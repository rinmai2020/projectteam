// carousel

// pagination: new SwiperPagination(
//   alignment: Alignment.bottomCenter,
//   builder: new DotSwiperPaginationBuilder(
//       color: Colors.grey, activeColor: Color(0xff38547C)),
// ),
// control: new SwiperControl(
//   color: Color(0xff38547C),
// ),

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

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
  // document.querySelector(".swiper-pagination").classList.toggle("dark");
};
