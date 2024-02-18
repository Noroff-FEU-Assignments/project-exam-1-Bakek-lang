// for progressbars in about page

import { creatingCategoryCounter } from "../data/category_data_handler.js";
import { makeApiCall } from "../data/fetch.js";
import { loadingIndicatorOff } from "../ui/loading_indicator.js";
import { animatedBars } from "../ui/progress_bar.js";
import { implementUpdatedCategoryData } from "./category_dom_updater.js";

export async function updateCategoriesDOM() {
  try {
    const category_data = await makeApiCall();
    let sortedCategoriesCount = creatingCategoryCounter(category_data);
    implementUpdatedCategoryData(sortedCategoriesCount);
    loadingIndicatorOff();
    const tagList = document.querySelector(".tags-list");
    tagList.removeAttribute("hidden");
    animatedBars();
  } catch (error) {
    loadingIndicatorOff();
    const tagList = document.querySelector(".tags-list");
    tagList.removeAttribute("hidden");
    animatedBars();
    const title = document.querySelector(".blog-content-breakdown h2");
    title.textContent += `(offline estimated numbers)`;
  }
}
