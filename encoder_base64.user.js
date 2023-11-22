// ==UserScript==
// @name         Encryption/Decryption
// @namespace    itsshello (github.com/itsshello)
// @version      1.0
// @description  Encrypts and decrypts text manually using base64 and binary conversions
// @author       itsshello (github.com/itsshello)
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
  
    // Create a function to encrypt text manually
    function encryptText(text) {
      // Convert text to base64
      const base64Text = btoa(encodeURIComponent(text));
  
      // Convert base64 to binary
      const binaryArray = toBinary(base64Text);
  
      // Convert binary back to base64 (simulating encryption)
      const encryptedText = toBase64(binaryArray);
      return encryptedText;
    }
  
    // Create a function to decrypt text manually
    function decryptText(encryptedText) {
      // Convert base64 to binary
      const binaryArray = toBinary(encryptedText);
  
      // Convert binary back to base64 (simulating decryption)
      const decryptedText = toBase64(binaryArray);
  
      // Decode base64 to text
      const decodedText = decodeURIComponent(atob(decryptedText));
      return decodedText;
    }
  
    // Create a function to convert text to base64
    function toBase64(data) {
        if (typeof data === 'string') {
          // Encode the text using UTF-8 before converting to base64
          const encodedText = new TextEncoder('utf-8').encode(data);
          return btoa(encodedText);
        } else if (data instanceof Uint8Array) {
          const binaryString = String.fromCharCode.apply(null, data);
          return btoa(encodeURIComponent(binaryString));
        } else {
          throw new Error('Invalid data type for base64 conversion');
        }
      }
      
  
    // Create a function to convert base64 to binary
    function toBinary(base64Text) {
      const binaryString = atob(base64Text);
      const binaryArray = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        binaryArray[i] = binaryString.charCodeAt(i);
      }
      return binaryArray;
    }
  
    // Function to open a popup for encryption/decryption
    function openPopup() {
      let activeElement = document.activeElement;
  
      if (activeElement.tagName === 'TEXTAREA') {
        let inputText = prompt("Enter text to encrypt or decrypt:");
        if (inputText !== null) {
          let selectedText = window.getSelection().toString();
  
          // If text is selected, decrypt it
          if (selectedText !== "") {
            let decryptedText = decryptText(inputText);
            activeElement.value = decryptedText;
          } else {
            // Encrypt the input text and replace the existing content
            let encryptedText = encryptText(inputText);
            activeElement.value = encryptedText;
          }
        }
      } else {
        // Not in a text area, show popup for decrypting
        let encryptedText = prompt("Enter encrypted text:");
        if (encryptedText !== null) {
          let decryptedText = decryptText(encryptedText);
          alert(`Decrypted text:\n${decryptedText}`);
        }
      }
    }
  
    // Keybind to open the popup for encryption/decryption
    document.addEventListener('keydown', function(event) {
      // Change the key combination as needed (Ctrl + Alt + E in this example)
      if (event.ctrlKey && event.shiftKey && event.key === 'E') {
        openPopup();
      }
    });
  })();
  