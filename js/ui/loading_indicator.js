export function loadingIndicatorOff() {
  const loadingIndicator = document.querySelectorAll(".lds-ring");
  loadingIndicator.forEach(function (i) {
    i.style.display = "none";
  });
}
