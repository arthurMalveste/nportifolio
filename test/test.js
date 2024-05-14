const timeline = document.querySelector('.timeline');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

nextButton.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= timeline.children.length) {
    currentIndex = 0;
  }
  updateTimelinePosition();
});

prevButton.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = timeline.children.length - 1;
  }
  updateTimelinePosition();
});

function updateTimelinePosition() {
  const timelineWidth = timeline.offsetWidth;
  const newPosition = -currentIndex * timelineWidth;
  timeline.style.transform = `translateX(${newPosition}px)`;
}