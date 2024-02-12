import { postsForCarousel } from "../data/data.js";
import { clearContainer, renderPosts } from "../renderHTML/render_posts.js";
import { loadingIndicatorOff } from "./loading_indicator.js";

let currentIndex = 0;

function renderCarouselPosts(index) {
  const posts = postsForCarousel();
  const postsToShow = posts.slice(index, index + 3);
  console.log("This is the first batch: ", postsToShow);
  clearContainer();
  renderPosts(postsToShow);
}

export function updateCarousel() {
  renderCarouselPosts(currentIndex);
  loadingIndicatorOff();
}

const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");

prevButton.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex -= 3;
  } else {
    currentIndex = 9;
  }
  updateCarousel();
});

nextButton.addEventListener("click", function () {
  if (currentIndex < 9) {
    currentIndex += 3;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
});
