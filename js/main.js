// main
import { updateCategoriesDOM } from "./dom/updated_categories.js";

const url = window.location.href;

if (url.includes("about")) {
  updateCategoriesDOM();
}
if (url.includes("books")) {
  // do something
}
