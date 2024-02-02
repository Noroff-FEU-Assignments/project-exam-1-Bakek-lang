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
export function showModal(options, success = true) {
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

  if (options.contentType === "text") {
    // Success modal after contact form
    modal.classList.add("form-modal");

    const successDiv = document.createElement("div");
    successDiv.className = "submit-modal";
    modal.append(successDiv);

    const icon = document.createElement("i");
    icon.className = success
      ? "fa-solid fa-check checkmark"
      : "fa-solid fa-xmark crossmark";
    successDiv.append(icon);

    const h2 = document.createElement("h2");
    h2.textContent = success
      ? "Your submission has been succesful!"
      : "Oops! Something Went Wrong";
    successDiv.append(h2);

    const h3 = document.createElement("h3");
    h3.textContent = `Hey ${options.name}`;
    successDiv.append(h3);

    const paragraph = document.createElement("p");
    paragraph.textContent = success
      ? `I'm grateful you've connected with Code Corner. Your time and effort in reaching out are highly valued. Feel free to keep exploring the variety of posts at Code Corner.`
      : "There was a problem processing your request. Please try again later. Thank you for your understanding.";
    successDiv.append(paragraph);

    const buttonDiv = document.createElement("div");
    buttonDiv.className = "buttons-modal";
    successDiv.append(buttonDiv);

    const homeButton = document.createElement("a");
    homeButton.className = success
      ? "home-button modal-button"
      : "home-button buttonsOnError";
    homeButton.textContent = "Home";
    homeButton.href = "/index.html";

    const browseButton = document.createElement("a");
    browseButton.className = success
      ? "browse-button modal-button"
      : "browse-button buttonsOnError";
    browseButton.textContent = "Browse";
    browseButton.href = "/books.html";
    buttonDiv.append(homeButton, browseButton);
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
