import { submitForm } from "../data/contactPOST.js";
import { showModal } from "./modal_form.js";

function showError(inputElement, message) {
  clearError(inputElement);
  inputElement.classList.add("invalid");
  inputElement.classList.add("valid");

  let errorDiv = document.createElement("div");
  errorDiv.classList.add("error-message");
  errorDiv.textContent = message;
  inputElement.parentNode.insertBefore(errorDiv, inputElement.nextSibling);
}

function clearError(inputElement) {
  let existingError = inputElement.parentNode.querySelector(".error-message");
  if (existingError) {
    inputElement.parentNode.removeChild(existingError);
  }
  inputElement.classList.remove("invalid");
  inputElement.classList.remove("valid");
}

function checkContactName() {
  const name = document.getElementById("name");
  if (name.value.trim().length <= 5) {
    showError(name, "Name should be more than 5 characters long.");
    return false;
  } else {
    clearError(name);
    return true;
  }
}

function checkContactEmail() {
  const email = document.getElementById("email");
  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;

  if (!emailRegex.test(email.value)) {
    showError(email, "Must be a valid email address");
    return false;
  } else {
    clearError(email);
    return true;
  }
}

function checkContactSubject() {
  const subject = document.getElementById("subject");
  if (subject.value.trim().length <= 15) {
    showError(subject, "Subject should be more than 15 characters long.");
    return false;
  } else {
    clearError(subject);
    return true;
  }
}

function checkContactMessage() {
  const message = document.getElementById("message");
  if (message.value.trim().length <= 25) {
    showError(message, "Message should be more than 25 characters long.");
    return false;
  } else {
    clearError(message);
    return true;
  }
}

function checkContactForm(event) {
  const nameCheck = checkContactName();
  const emailCheck = checkContactEmail();
  const subjectCheck = checkContactSubject();
  const messageCheck = checkContactMessage();

  if (!nameCheck || !emailCheck || !subjectCheck || !messageCheck) {
    console.error("Her mangler du noe");
    event.preventDefault();
    return false;
  }
  return true;
}

document.getElementById("name").addEventListener("blur", checkContactName);
document.getElementById("email").addEventListener("blur", checkContactEmail);
document
  .getElementById("subject")
  .addEventListener("blur", checkContactSubject);
document
  .getElementById("message")
  .addEventListener("blur", checkContactMessage);

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (checkContactForm(event)) {
    const nameValue = document.getElementById("name").value;
    const emailValue = document.getElementById("email").value;
    const subjectValue = document.getElementById("subject").value;
    const messageValue = document.getElementById("message").value;
    console.log(nameValue, emailValue, subjectValue, messageValue);
    submitForm(nameValue, emailValue, subjectValue, messageValue);
  }
});
