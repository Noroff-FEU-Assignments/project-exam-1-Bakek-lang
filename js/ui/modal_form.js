function modalSuccess() {
  console.log("yeas");
}

// export function showModal(contentType, content) {
//   const body = document.body;
//   const modalOverlay = document.createElement("div");
//   modalOverlay.classList.add("modal-overlay");
//   const modal = document.createElement("div");
//   modal.classList.add("modal");
//   modalOverlay.append(modal);
//   body.append(modalOverlay);

//   if (contentType === "image") {
//     modal.innerHTML = `<img src="${content}" class="modal-image" alt="Modal Image">`;
//   } else if (contentType === "text") {
//     modal.innerHTML = `<p>${content}</p>`;
//   }
//   modalOverlay.style.display = "block";
//   modal.style.display = "flex";

//   // add hideModal so it can access the dynamically added elements

//   modalOverlay.addEventListener("click", function (event) {
//     if (event.target === modalOverlay) {
//       hideModal(modalOverlay);
//     }
//   });
// }
export function showModal(options) {
  const body = document.body;
  body.classList.add("freeze-screen");
  const modalOverlay = document.createElement("div");
  modalOverlay.classList.add("modal-overlay");
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modalOverlay.append(modal);
  body.append(modalOverlay);

  if (options.contentType === "image") {
    if (options.element.tagName === "IMG") {
      // for tools
      const img = document.createElement("img");
      img.src = options.element.src;
      img.className = "modal-image";
      modal.append(img);
    } else {
      // for books
      const bookBackground = document.createElement("div");
      bookBackground.className = "book-background wide-image";
      bookBackground.style.backgroundImage =
        options.element.style.backgroundImage;
      modal.append(bookBackground);

      const imageElement = document.createElement("img");
      imageElement.className = "post-image-card modal-image";
      imageElement.src = options.imageSrc;
      modal.append(imageElement);
    }
  }
  if (options.contentType === "author") {
    modal.classList.add("height-adjustment");
    const authorImage = document.createElement("img");
    authorImage.className = "modal-image";
    authorImage.src = options.imgSrc;
    modal.append(authorImage);
  }

  modalOverlay.style.display = "block";
  modal.style.display = "flex";

  // add hideModal so it can access the dynamically added elements

  modalOverlay.addEventListener("click", function (event) {
    if (event.target === modalOverlay) {
      hideModal(modalOverlay);
    }
  });
}

function hideModal(modalOverlay) {
  modalOverlay.style.display = "none";

  modalOverlay.remove();
  document.body.classList.remove("freeze-screen");
}
