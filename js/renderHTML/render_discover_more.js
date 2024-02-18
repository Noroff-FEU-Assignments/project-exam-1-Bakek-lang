import { onlyBooks } from "../data/data.js";
import { loadingIndicatorOff } from "../ui/loading_indicator.js";
import { displayError } from "../ui/display_error.js";

function getCurrentPostId() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");

  return id ? id : "hardcoded";
}

export function renderDiscoverMore(data) {
  try {
    const currentPostId = getCurrentPostId();

    if (!data || data.length === 0) {
      throw new Error("No data available to display.");
    }

    const filteredData = data.filter(function (post) {
      return post.id.toString() !== currentPostId;
    });

    if (filteredData.length < 5) {
      throw new Error("Not enough posts to display in 'Discover More'.");
    }

    const discoverMoreAside = document.querySelector(".discover-more");
    if (!discoverMoreAside) {
      throw new Error("Discover more section not found in the document.");
    }

    const discoverMoreContainer = document.createElement("div");
    discoverMoreContainer.className = "discover-more-container";
    discoverMoreContainer.innerHTML = "";
    discoverMoreAside.append(discoverMoreContainer);

    for (let j = 15; j < 20; j++) {
      const dmPost = document.createElement("div");
      dmPost.className = "dm-post";

      const dmPostImage = document.createElement("img");
      dmPostImage.src = filteredData[j].acf.review_image;
      dmPostImage.alt = `book cover for ${filteredData[j].acf.original_name}`;
      dmPost.append(dmPostImage);

      const dmPostTitle = document.createElement("h3");
      dmPostTitle.textContent = filteredData[j].acf.heading;
      dmPost.append(dmPostTitle);

      const anchor = document.createElement("a");
      anchor.href = `post.html?id=${filteredData[j].id}`;
      anchor.append(dmPost);
      discoverMoreContainer.append(anchor);
    }
  } catch (error) {
    const errorMessageHtml = displayError(error);
    document.querySelector(".discover-more-container").innerHTML =
      errorMessageHtml;
  }
}

let data = onlyBooks();

export function discoverMore() {
  renderDiscoverMore(data);
  loadingIndicatorOff();
}
