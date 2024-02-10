// for progressbars in about page

import { creatingCategoryCounter } from "../data/category_data_handler.js";
import { makeApiCall } from "../data/fetch.js";
import { loadingIndicatorOff } from "../ui/loading_indicator.js";
import { animatedBars } from "../ui/progress_bar.js";
import { implementUpdatedCategoryData } from "./category_dom_updater.js";

export async function updateCategoriesDOM() {
  try {
    console.log("du har ikke kommet forbi makeapicall");
    const category_data = await makeApiCall();
    console.log("Du har kommet forbi makeapicall");
    let sortedCategoriesCount = creatingCategoryCounter(category_data);
    implementUpdatedCategoryData(sortedCategoriesCount);
    loadingIndicatorOff();
    const tagList = document.querySelector(".tags-list");
    tagList.removeAttribute("hidden");
    animatedBars();
  } catch (error) {
    console.log("Erroren ble catchet");
    console.error("Error fetching data: ", error);
    loadingIndicatorOff();
    const tagList = document.querySelector(".tags-list");
    tagList.removeAttribute("hidden");
    animatedBars();
    const title = document.querySelector(".blog-content-breakdown h1");
    title.textContent += `(offline estimated numbers)`;
  }
}
