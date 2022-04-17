//footer
class myFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="footer">
    <div class="footer-sub py-5">
      <div class="container py-lg-4">
        <div class="row footer-top-29">
          <div
            class="col-lg-4 col-md-6 col-sm-7 footer-list-29 footer-1 pr-lg-5"
          >
            <div class="footer-logo mb-3">
              <h2>
                <a class="navbar-brand" href="index.html"> Diner </a>
              </h2>
            </div>
            <p>
              Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
              ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
              amet Semper at elit.
            </p>
            <div class="main-social-footer-29 mt-4">
              <a href="#facbook" class="facebook">
                <span class="fa fa-facebook"></span>
              </a>
              <a href="#twitter" class="twitter">
                <span class="fa fa-twitter"></span>
              </a>
              <a href="#instagram" class="instagram">
                <span class="fa fa-instagram"></span>
              </a>
              <a href="#linkedin" class="linkedin">
                <span class="fa fa-linkedin"></span>
              </a>
            </div>
          </div>
          <div
            class="col-lg-2 col-md-6 col-sm-5 col-6 footer-list-29 footer-2 mt-sm-0 mt-5"
          >
            <ul>
              <h6 class="footer-title-29">Usefull Links</h6>
              <li>
                <a href="about.html">About Us</a>
              </li>
              <li>
                <a href="services.html">Services</a>
              </li>
              <li>
                <a href="blog.html"> Blog posts</a>
              </li>
              <li>
                <a href="careers.html"> Careers</a>
              </li>
              <li>
                <a href="contact.html">Contact us</a>
              </li>
            </ul>
          </div>
          <div
            class="col-lg-2 col-md-6 col-sm-5 col-6 footer-list-29 footer-3 mt-lg-0 mt-5"
          >
            <ul>
              <h6 class="footer-title-29">More Info</h6>
              <li>
                <a href="history.html">History</a>
              </li>
              <li>
                <a href="vision.html">Vision & Values</a>
              </li>
              <li>
                <a href="awards.html"> Awards</a>
              </li>
              <li>
                <a href="media.html">Media</a>
              </li>
              <li>
                <a href="support.html">Support</a>
              </li>
            </ul>
          </div>
          <div
            class="col-lg-4 col-md-6 col-sm-7 footer-list-29 footer-4 mt-lg-0 mt-5"
          >
            <h6 class="footer-title-29">Subscribe to our Newsletter</h6>
            <p>
              Enter your email and receive the latest news, updates and
              special offers from us.
            </p>
            <form action="#" class="subscribe mt-4" method="post">
              <input
                type="email"
                name="email"
                id=""
                placeholder="Your Email Address"
                required
              />
              <button class="btn btn-style btn-primary w-100 mt-3">
                Subscibe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>`;
  }
}
customElements.define("my-footer", myFooter);
// class myHeader extends HTMLElement {
//   connectedCallback() {
//     this.innerHTML = `
//   <header class="header">
//     <div class="header__left-logo">
//       <h1><a href="index.html" class="logo">Diner</a></h1>
//     </div>
//     <div class="header__right-content">
//       <div class="search-bar">
//         <form class="search-header">
//           <input
//             type="search"
//             name="search"
//             class="search__input"
//             placeholder="Search here.."
//           />
//           <span class="fa fa-search search__icon"></span>
//         </form>
//       </div>
//       <div class="w3_menu text-center">
//         <!-- toggle switch for light and dark theme -->
//         <div class="mobile-position">
//           <nav class="navigation">
//             <div class="theme-switch-wrapper">
//               <label class="theme-switch" for="checkbox">
//                 <input type="checkbox" id="checkbox" />
//                 <div class="mode-container">
//                   <i class="gg-sun"></i>
//                   <i class="gg-moon"></i>
//                 </div>
//               </label>
//             </div>
//           </nav>
//         </div>
//       </div>
//       <div class="mobile-nav-button text-center">
//         <button id="trigger-overlay" type="button">
//           <i class="fa fa-bars" aria-hidden="true"></i>
//         </button>
//       </div>
//     </div>
//     <div class="overlay overlay-scale">
//       <button type="button" class="overlay-close">
//         <i class="fa fa-times" aria-hidden="true"></i>
//       </button>
//       <nav>
//         <ul>
//           <li><a href="index.html"> Home </a></li>
//           <li><a href="about.html"> About </a></li>
//           <li><a href="services.html"> Services </a></li>
//           <li><a href="error.html"> 404 </a></li>
//           <li><a href="landing-single.html"> Landing Page </a></li>
//           <li><a href="contact.html"> Contact </a></li>
//         </ul>
//       </nav>
//     </div>
//   </header>`;
//   }
// }
// customElements.define("my-header", myHeader);

// const toggle = document.querySelector(".mobile-nav-button");
// const toggle2 = document.querySelector(".overlay-scale");
// const close = document.querySelector(".overlay-close");
// function addIcon() {
//   toggle.classList.toggle("open");
//   toggle2.classList.toggle("open");
// }
// document.querySelector(".mobile-nav-button").addEventListener("click", addIcon);
// function removeIcon() {
//   toggle.classList.remove("open");
//   toggle2.classList.remove("open");
// }
// document.querySelector(".overlay-close").addEventListener("click", removeIcon);
// document.querySelector(".mode-container").onclick = function () {
//   document.querySelector("body").classList.toggle("dark");
//   document.querySelector(".search-bar").classList.toggle("dark");
// };
