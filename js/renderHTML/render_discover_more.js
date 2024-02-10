import { onlyBooks } from "../data/data.js";
import { loadingIndicatorOff } from "../ui/loading_indicator.js";

function getCurrentPostId() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");

  return id ? id : "hardcoded";
}

export function renderDiscoverMore(data) {
  const currentPostId = getCurrentPostId();
  console.log(currentPostId);
  const filteredData = data.filter(function (post) {
    return post.id.toString() !== currentPostId;
  });

  const discoverMoreAside = document.querySelector(".discover-more");
  const discoverMoreContainer = document.createElement("div");
  discoverMoreContainer.className = "discover-more-container";
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

    // wrap in anchor tag
    const anchor = document.createElement("a");
    anchor.href = `post.html?id=${filteredData[j].id}`;
    anchor.append(dmPost);
    discoverMoreContainer.append(anchor);
  }
  return;
}

let data = onlyBooks();
console.log(data);

export function discoverMore() {
  renderDiscoverMore(data);
  loadingIndicatorOff();
}
