// main
import { onlyBooks } from "./data/data.js";
import { updateCategoriesDOM } from "./dom/updated_categories.js";
import { renderDiscoverMore } from "./renderHTML/render_discover_more.js";
import { handlePostPage } from "./renderHTML/render_post.js";
import { sortOptions, startContent } from "./renderHTML/render_posts.js";
import { loadingIndicatorOff } from "./ui/loading_indicator.js";

const url = window.location.href;
let data = onlyBooks();
console.log("denne går?");

if (url.includes("about")) {
  console.log("denne går");
  updateCategoriesDOM();
}
if (url.includes("books")) {
  startContent();
  sortOptions();
}
if (url.includes("post")) {
  console.log("jeg hater safari main.js");
  handlePostPage();
}
if (url.includes("behind")) {
  renderDiscoverMore(data);
  loadingIndicatorOff();
}
