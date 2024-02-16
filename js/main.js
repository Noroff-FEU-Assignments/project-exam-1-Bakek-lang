// main
import { onlyBooks } from "./data/data.js";
import { updateCategoriesDOM } from "./dom/updated_categories.js";
import { hamburgerMenu } from "./hamburger/hamburger.js";
import { renderDiscoverMore } from "./renderHTML/render_discover_more.js";
import { handlePostPage, modalPostEvent } from "./renderHTML/render_post.js";
import { sortOptions, startContent } from "./renderHTML/render_posts.js";
import { updateCarousel } from "./ui/carousel.js";
import { setupFormValidation } from "./ui/form_validation.js";
import { loadingIndicatorOff } from "./ui/loading_indicator.js";

const url = window.location.href;
let data = onlyBooks();

hamburgerMenu();

if (url.includes("about")) {
  updateCategoriesDOM();
}
if (url.includes("books")) {
  startContent();
  sortOptions();
}
if (url.includes("post")) {
  handlePostPage();
}
if (url.includes("behind")) {
  renderDiscoverMore(data);
  loadingIndicatorOff();
  modalPostEvent();
}
if (
  url.includes("index") ||
  url.endsWith("/") ||
  url === "https://code-corner-pe1.netlify.app"
) {
  updateCarousel();
}
if (url.includes("contact")) {
  setupFormValidation();
}
