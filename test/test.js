// You can use any JavaScript library to control the animation if needed.
// For this example, we'll just use plain JavaScript to start and stop the animation.

const soundWaveContainer = document.querySelector('.sound-wave-container');
const soundWaves = document.querySelectorAll('.sound-wave');

// Start the animation
function startAnimation() {
  soundWaves.forEach(wave => {
    wave.style.animationPlayState = 'running';
  });
}

// Stop the animation
function stopAnimation() {
  soundWaves.forEach(wave => {
    wave.style.animationPlayState = 'paused';
  });
}

// Start the animation on page load
startAnimation();