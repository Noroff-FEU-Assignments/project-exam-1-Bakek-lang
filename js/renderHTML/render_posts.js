import { makeApiCall } from "../data/fetch.js";

let data = await makeApiCall();

function renderPosts1(data) {
  const container = document.querySelector(".post-card-container");

  for (let i = 0; i < data.length; i++) {
    if (data[i].category_names[0] === "Tool") {
      container.innerHTML += `
      <div class="post-card">
            <img class="post-image-card" src="${
              data[i].acf.review_image
            }" alt="review image" />
    
            <div class="tag ${data[
              i
            ].category_names[0].toLowerCase()} tag-posts">
              <span class="tag-name">${data[i].category_names[0]}</span>
            </div>
            <h3>${data[i].acf.heading}</h3>
            <div class="author-information">
              <img class="author-image" src="${
                data[i].acf.author_image
              }" alt="author image" />
              <span class="line">Matt Corner</span>
              <span>${data[i].acf.date_of_post}</span>
            </div>
          </div>
      `;
    }
  }
}

// renderPosts(data);

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

    fragment.append(postCard);
  }
  postCardContainer.append(fragment);
}

renderPosts(data);
