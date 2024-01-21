// for progressbars in about page
import { isInteger } from "../snippets/is_integer.js";

export function implementUpdatedCategoryData(categoryCount) {
  const progressBar = document.querySelectorAll(".tags-list .tag-progress");

  for (let i = 0; i < categoryCount.length; i++) {
    let [categoryName, percentage] = categoryCount[i];
    let element = progressBar[i];

    // for the css/html tag to work
    let categoryName1 = categoryName.replace(/\//g, "-");

    element.setAttribute("data-id", categoryName1);
    element.querySelector(".tag-name").textContent = categoryName;
    element.querySelector(".percentage").textContent = `${isInteger(
      percentage
    )}%`;
    element
      .querySelector(".progress-bar")
      .setAttribute("data-progress", `${percentage}%`);
    element.querySelector(
      ".progress"
    ).className = `progress ${categoryName1.toLowerCase()}`;
    element.querySelector(
      ".tag"
    ).className = `tag ${categoryName1.toLowerCase()}`;
  }
}
