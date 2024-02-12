// main
import { onlyBooks } from "./data/data.js";
import { updateCategoriesDOM } from "./dom/updated_categories.js";
import { hamburgerMenu } from "./hamburger/hamburger.js";
import { renderDiscoverMore } from "./renderHTML/render_discover_more.js";
import { handlePostPage } from "./renderHTML/render_post.js";
import { sortOptions, startContent } from "./renderHTML/render_posts.js";
import { loadingIndicatorOff } from "./ui/loading_indicator.js";

const url = window.location.href;
let data = onlyBooks();

if (url.includes("about")) {
  updateCategoriesDOM();
  hamburgerMenu();
}
if (url.includes("books")) {
  startContent();
  sortOptions();
  hamburgerMenu();
}
if (url.includes("post")) {
  handlePostPage();
  hamburgerMenu();
}
if (url.includes("behind")) {
  renderDiscoverMore(data);
  loadingIndicatorOff();
  hamburgerMenu();
}
if (url.includes("index")) {
  hamburgerMenu();
}
if (url.includes("contact")) {
  hamburgerMenu();
}
