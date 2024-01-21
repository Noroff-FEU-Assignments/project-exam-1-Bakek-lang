export function loadingIndicatorOn() {
  const loadingIndicator = document.getElementById("loadingIndicator");
  loadingIndicator.style.display = "block";
}

export function loadingIndicatorOff() {
  const loadingIndicator = document.getElementById("loadingIndicator");
  loadingIndicator.style.display = "none";
}
