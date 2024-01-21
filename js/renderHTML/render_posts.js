import { makeApiCall } from "../data/fetch.js";

let data = await makeApiCall();

function renderPosts(data) {
  const container = document.querySelector(".post-card-container");

  for (let i = 0; i < data.length; i++) {
    container.innerHTML += `
    <div class="post-card">
          <img class="post-image-card" src="${
            data[i].acf.review_image
          }" alt="review image" />
  
          <div class="tag ${data[i].category_names[0].toLowerCase()} tag-posts">
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

renderPosts(data);
