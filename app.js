// show menu
const toggle = document.querySelector(".mobile-nav-button");
const toggle2 = document.querySelector(".overlay-scale");
const close = document.querySelector(".overlay-close");
function addIcon() {
  toggle.classList.toggle("open");
  toggle2.classList.toggle("open");
}
document.querySelector(".mobile-nav-button").addEventListener("click", addIcon);
function removeIcon() {
  toggle.classList.remove("open");
  toggle2.classList.remove("open");
}
document.querySelector(".overlay-close").addEventListener("click", removeIcon);
document.querySelector(".mode-container").onclick = function () {
  document.querySelector("body").classList.toggle("dark");
  document.querySelector(".search-bar").classList.toggle("dark");
};
