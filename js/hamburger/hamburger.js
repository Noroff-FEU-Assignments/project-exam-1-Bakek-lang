const hamburger = document.querySelector(".hamburger-menu");
const nav = document.querySelector("nav");
const icon = hamburger.querySelector("i");
const overlay = document.querySelector(".modal-overlay");
const body = document.body;

export function hamburgerMenu() {
  hamburger.addEventListener("click", function () {
    if (nav.style.width === "60%") {
      nav.style.width = "0";
      overlay.style.display = "none";
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
      body.classList.remove("freeze-screen");
      hamburger.setAttribute("aria-label", "Open menu");
    } else {
      nav.style.width = "60%";
      overlay.style.display = "block";
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
      body.classList.add("freeze-screen");
      hamburger.setAttribute("aria-label", "Close menu");
    }
  });
}

overlay.addEventListener("click", function () {
  nav.style.width = "0";
  overlay.style.display = "none";
  icon.classList.remove("fa-xmark");
  icon.classList.add("fa-bars");
  body.classList.remove("freeze-screen");
});

function resetNavOnResize() {
  if (window.innerWidth > 830) {
    nav.style.width = "";
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
}

window.addEventListener("resize", resetNavOnResize);
