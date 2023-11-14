// ==UserScript==
// @name           Key sounds
// @version        0.1
// @description    Plays a sound when you type.Edit the code to customize the sounds.
// @author         itsshello (https://github.com/itsshello)
// @match          *://*/*
// @icon           https://www.lovemyfire.com/xfavicon-16x16.png.pagespeed.ic.RKkQq_ZG21.png
// @namespace      https://github.com/itsshello
// @supportURL     https://github.com/itsshello
// ==/UserScript==

function playSound() {

  const sounds = {
    'A': 'https://www.myinstants.com/media/sounds/amogus.mp3',
    'B': '',
    'C': 'https://www.myinstants.com/media/sounds/amogus.mp3',
    // add more characters and more sounds (Note: all characters should be Uppercase)
  };
  // Get the key that was pressed.
  const key = event.key;

  const uppercaseKey = key.toUpperCase();

  // Get the sound URL for the pressed key.
  const soundURL = sounds[uppercaseKey];

  // If there is a sound URL for the pressed key, play it.
  if (soundURL) {
    const sound = new Audio(soundURL);
    sound.play();
  }
}

// Listen for key presses.
document.addEventListener('keydown', playSound);
