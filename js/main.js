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
}
