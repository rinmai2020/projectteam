let themeSwith = document.querySelector(".themeSwith ");
let searchInput = document.querySelector(".search__input ");
let searchIcon = document.querySelector(".search__icon ");
let paragraph = document.querySelector(".content-1-right");
let subscribe1 = document.querySelector(".subscribe1");
let subscribe2 = document.querySelector(".subscribe2");
let body = document.querySelector("body");
themeSwith.onclick = function () {
  themeSwith.classList.toggle("active");
  searchInput.classList.toggle("active");
  searchIcon.classList.toggle("active");
  subscribe1.classList.toggle("active");
  subscribe2.classList.toggle("active");
  paragraph.classList.toggle("active");
  body.classList.toggle("dark");
};
