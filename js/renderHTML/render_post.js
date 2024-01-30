import { makeApiCall } from "../data/fetch.js";
import { showModal } from "../ui/modal_form.js";

let data = await makeApiCall();

function findCorrectPost(data) {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");

  const matchingPost = data.find(function (object) {
    return object.id.toString() === id;
  });
  console.log(matchingPost);
  return matchingPost;
}

let postData = findCorrectPost(data);

function renderPost(data) {
  const postContainer = document.querySelector(".post-container");

  const divTag = document.createElement("div");
  divTag.className = "div-tag-post";
  postContainer.append(divTag);

  for (let i = 0; i < data.category_names.length; i++) {
    // just to fix the css/html problem
    let categoryName = data.category_names[i].replace(/\//g, "-");
    const divEachTag = document.createElement("div");
    divEachTag.className = `tag ${categoryName.toLowerCase()}`;
    divTag.append(divEachTag);

    const tagName = document.createElement("span");
    tagName.classList.add("tag-name");
    tagName.textContent = data.category_names[i];
    divEachTag.append(tagName);
  }

  const heading = document.createElement("h1");
  heading.textContent = data.acf.heading;
  postContainer.append(heading);

  const subheading = document.createElement("h2");
  subheading.className = "subheading";
  subheading.textContent = data.acf.subheading;
  postContainer.append(subheading);

  const authorDiv = document.createElement("div");
  authorDiv.className = "author-information";
  postContainer.append(authorDiv);

  const authorImage = document.createElement("img");
  authorImage.className = "author-image";
  authorImage.src = data.acf.author_image;
  authorImage.alt = "Author image";
  authorDiv.append(authorImage);

  const authorName = document.createElement("span");
  authorName.className = "line";
  authorName.textContent = data.acf.author_name;

  const authorDate = document.createElement("span");
  authorDate.textContent = data.acf.date_of_post;
  authorDiv.append(authorName, authorDate);

  // check if article is book or tool

  if (data.category_names[0] === "Book") {
    const imageContainer = document.createElement("div");
    imageContainer.className = "post-specific-image-container";
    postContainer.append(imageContainer);

    const bookBackground = document.createElement("div");
    bookBackground.className = "book-background wide-image";
    bookBackground.style.backgroundImage = `url('${data.acf.review_image}')`;
    imageContainer.append(bookBackground);

    const imageBook = document.createElement("img");
    imageBook.className = "post-image-card";
    imageBook.src = `${data.acf.review_image}`;
    imageContainer.append(imageBook);
  } else {
    const reviewImage = document.createElement("img");
    reviewImage.className = "wide-image";
    reviewImage.src = data.acf.review_image;
    postContainer.append(reviewImage);
  }

  // 1
  const paragraphSectionOne = document.createElement("section");
  postContainer.append(paragraphSectionOne);

  const paragraphTitleOne = document.createElement("h2");
  paragraphTitleOne.className = "paragraph-title";
  paragraphTitleOne.textContent = data.acf.paragraph_1_title;

  const paragraphContentOne = document.createElement("p");
  paragraphContentOne.className = "paragraph-content";
  paragraphContentOne.textContent = data.acf.paragraph_1_content;
  paragraphSectionOne.append(paragraphTitleOne, paragraphContentOne);

  // 2
  const paragraphSectionTwo = document.createElement("section");
  postContainer.append(paragraphSectionTwo);

  const paragraphTitleTwo = document.createElement("h2");
  paragraphTitleTwo.className = "paragraph-title";
  paragraphTitleTwo.textContent = data.acf.paragraph_2_title;

  const paragraphContentTwo = document.createElement("p");
  paragraphContentTwo.className = "paragraph-content";
  paragraphContentTwo.textContent = data.acf.paragraph_2_content;
  paragraphSectionTwo.append(paragraphTitleTwo, paragraphContentTwo);
  // 3
  const paragraphSectionThree = document.createElement("section");
  postContainer.append(paragraphSectionThree);

  const paragraphTitleThree = document.createElement("h2");
  paragraphTitleThree.className = "paragraph-title";
  paragraphTitleThree.textContent = data.acf.paragraph_3_title;

  const paragraphContentThree = document.createElement("p");
  paragraphContentThree.className = "paragraph-content";
  paragraphContentThree.textContent = data.acf.paragraph_3_content;
  paragraphSectionThree.append(paragraphTitleThree, paragraphContentThree);
  // 4
  const paragraphSectionFour = document.createElement("section");
  postContainer.append(paragraphSectionFour);

  const paragraphTitleFour = document.createElement("h2");
  paragraphTitleFour.className = "paragraph-title";
  paragraphTitleFour.textContent = data.acf.paragraph_4_title;

  const paragraphContentFour = document.createElement("p");
  paragraphContentFour.className = "paragraph-content";
  paragraphContentFour.textContent = data.acf.paragraph_4_content;
  paragraphSectionFour.append(paragraphTitleFour, paragraphContentFour);
  // 5
  const paragraphSectionFive = document.createElement("section");
  postContainer.append(paragraphSectionFive);

  const paragraphTitleFive = document.createElement("h2");
  paragraphTitleFive.className = "paragraph-title";
  paragraphTitleFive.textContent = data.acf.paragraph_5_title;

  const paragraphContentFive = document.createElement("p");
  paragraphContentFive.className = "paragraph-content";
  paragraphContentFive.textContent = data.acf.paragraph_5_content;
  paragraphSectionFive.append(paragraphTitleFive, paragraphContentFive);

  const linkContainer = document.createElement("div");
  linkContainer.className = "link-container";
  postContainer.append(linkContainer);

  linkContainer.textContent = "Link: ";

  const titleLink = document.createElement("a");
  titleLink.textContent = data.acf.original_name;
  titleLink.href = data.acf.original_url;
  linkContainer.append(titleLink);
}

renderPost(postData);

const image = document.querySelector(".wide-image");
const otherImage = document.querySelector(".post-image-card");

image.addEventListener("click", function () {
  let element = image;
  let imageSrc = image.src || otherImage.src;
  console.log("this is the element: ", element);
  console.log("this is the other image: ", otherImage);

  if (image.classList.contains("book-background")) {
    element = otherImage;
  }
  showModal({
    contentType: "image",
    element: image,
    imageSrc: imageSrc,
  });
});
