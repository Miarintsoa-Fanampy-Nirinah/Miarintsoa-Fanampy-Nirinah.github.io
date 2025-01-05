// scriptcontact.js

let isInverted = false;

function invertColors() {
  document.body.style.filter = isInverted ? 'none' : 'invert(1)';
  isInverted = !isInverted;
}

// Set the function to run every 5 seconds (5000 milliseconds)
setInterval(invertColors, 5000);
