import { postsForCarousel } from "../data/data.js";
import { renderPosts } from "../renderHTML/render_posts.js";

let posts = postsForCarousel();
console.log("this is the posts for carousel: ", posts);

renderPosts(posts);

// function letsGo() {
//   renderPosts(posts);
//   workingCarousel();
// }

// letsGo();

// function workingCarousel() {
//   const prevButton = document.querySelector(".carousel-prev");
//   const nextButton = document.querySelector(".carousel-next");
//   const carousel = document.querySelector(".carousel-home");
//   let scrollAmount = 0;
//   const maxScroll = -carousel.scrollWidth + carousel.offsetWidth;

//   nextButton.addEventListener("click", () => {
//     carousel.scrollTo({
//       top: 0,
//       left: (scrollAmount -= carousel.offsetWidth / 1),
//       behavior: "smooth",
//     });

//     if (scrollAmount < maxScroll) {
//       scrollAmount = maxScroll;
//     }
//   });

//   prevButton.addEventListener("click", () => {
//     carousel.scrollTo({
//       top: 0,
//       left: (scrollAmount += carousel.offsetWidth / 1),
//       behavior: "smooth",
//     });
//     console.log("this also works");
//     if (scrollAmount > 0) {
//       scrollAmount = 0;
//     }
//   });
// }
