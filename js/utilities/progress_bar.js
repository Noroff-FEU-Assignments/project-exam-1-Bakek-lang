import { makeApiCall } from "../api/fetch.js";
const url =
  "http://code-corner.henrikbakke.no/wp-json/wp/v2/posts?acf_format=standard";

let data = await makeApiCall(url);

console.log(data[0].acf);

// Make function to get categories from api, loop through and see how many posts has each of the tag

function animatedProgressBar(bar, width, delay) {
  setTimeout(() => {
    bar.style.width = width;
  }, delay);
}

function animatedBars() {
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

animatedBars();
