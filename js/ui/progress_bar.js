function animatedProgressBar(bar, width, delay) {
  setTimeout(() => {
    bar.style.width = width;
  }, delay);
}

export function animatedBars() {
  const progressBars = document.querySelectorAll(".progress");
  const animationDuration = 1500;

  progressBars.forEach((bar, index) => {
    const width = bar.parentElement.getAttribute("data-progress");

    const delay = index * 700;

    animatedProgressBar(bar, width, delay);

    const totalDelay = delay + animationDuration;

    setTimeout(() => {
      const tagProgress = bar.closest(".tag-progress");
      const percentage = tagProgress.querySelector(".percentage");
      percentage.style.opacity = 1;
    }, totalDelay);
  });
}
