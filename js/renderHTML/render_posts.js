// import { makeApiCall } from "../data/fetch.js";

// let data = await makeApiCall();

import { getInitialPosts, getRemainingPosts } from "../data/data.js";
import { sortPosts } from "../data/data.js";

let data = getInitialPosts();

function renderPosts(data) {
  const postCardContainer = document.querySelector(".post-card-container");
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < data.length; i++) {
    const postCard = document.createElement("div");
    postCard.className = "post-card";

    const imageContainer = document.createElement("div");
    imageContainer.className = "post-image-container";
    postCard.append(imageContainer);

    if (data[i].category_names[0] === "Book") {
      const bookBackground = document.createElement("div");
      bookBackground.className = "book-background";
      bookBackground.style.backgroundImage = `url('${data[i].acf.review_image}')`;
      imageContainer.append(bookBackground);

      const imageBook = document.createElement("img");
      imageBook.className = "post-image-card";
      imageBook.src = `${data[i].acf.review_image}`;
      imageContainer.append(imageBook);

      const tagDiv = document.createElement("div");
      tagDiv.className = "tag book tag-posts";
      postCard.append(tagDiv);

      const tagName = document.createElement("span");
      tagName.className = "tag-name";
      tagName.textContent = `${data[i].category_names[0]}`;
      tagDiv.append(tagName);
    } else {
      const imageTool = document.createElement("img");
      imageTool.className = "post-image-card-tool";
      imageTool.src = `${data[i].acf.review_image}`;
      imageContainer.append(imageTool);

      const tagDiv = document.createElement("div");
      tagDiv.className = "tag tool tag-posts";
      postCard.append(tagDiv);

      const tagName = document.createElement("span");
      tagName.className = "tag-name";
      tagName.textContent = `${data[i].category_names[0]}`;
      tagDiv.append(tagName);
    }
    const postTitle = document.createElement("h3");
    postTitle.textContent = `${data[i].acf.heading}`;
    postCard.append(postTitle);

    const authorDiv = document.createElement("div");
    authorDiv.className = "author-information";
    postCard.append(authorDiv);

    const authorImage = document.createElement("img");
    authorImage.className = "author-image";
    authorImage.src = data[i].acf.author_image;
    authorDiv.append(authorImage);

    const authorName = document.createElement("span");
    authorName.className = "line";
    authorName.textContent = data[i].acf.author_name;
    authorDiv.append(authorName);

    const authorDate = document.createElement("span");
    authorDate.textContent = data[i].acf.date_of_post;
    authorDiv.append(authorDate);

    // wrapped in anchor tag
    const anchor = document.createElement("a");
    anchor.href = `post.html?id=${data[i].id}`;
    anchor.append(postCard);

    fragment.append(anchor);
  }
  postCardContainer.append(fragment);
}

// renderPosts(data);
let viewMoreEventAdded = false;

function viewMoreButton() {
  const viewMore = document.getElementById("view-more");
  viewMore.style.display = "block";

  if (!viewMoreEventAdded) {
    viewMore.addEventListener("click", function () {
      let rest = getRemainingPosts();
      renderPosts(rest);
      viewMore.style.display = "none";
    });
    viewMoreEventAdded = true;
  }
}

function sortOptions() {
  const sortOptions = document.getElementById("sort-options");
  sortOptions.style.display = "block";
  sortOptions.addEventListener("change", (event) => {
    localStorage.setItem("lastSortOption", event.target.value);
    clearContainer();
    sortPosts(event.target.value);
    let posts = getInitialPosts();
    renderPosts(posts);
    viewMoreButton();
  });
}

function startContent() {
  let lastSortOption = localStorage.getItem("lastSortOption") || "AtoZ";

  const sortOptions = document.getElementById("sort-options");
  sortOptions.value = lastSortOption;
  sortPosts(lastSortOption);
  let posts = getInitialPosts();
  renderPosts(posts);
  viewMoreButton();
}

function clearContainer() {
  const container = document.querySelector(".post-card-container");
  container.innerHTML = "";
}

startContent();
sortOptions();
