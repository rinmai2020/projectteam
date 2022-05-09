//footer
class myFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="footer" id="contact" >
    <div class="footer-sub py-5">
      <div class="container py-lg-4">
        <div class="row footer-top-29">
          <div
            class="col-lg-4 col-md-6 col-sm-7 footer-list-29 footer-1 pe-lg-5"
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
  </section>
  <section class="bottom-copyright">
      <div class="container">
        <div class="row">
          <p class="col-lg-8 copy-footer-29">
            © 2021 Diner. All rights reserved. Design by
            <a href="https://w3layouts.com/" target="_blank"> W3Layouts</a>
          </p>

          <div class="col-lg-4 footer-list-29">
            <ul class="d-flex text-lg-right">
              <li><a href="#careers"> Careers</a></li>
              <li class="mx-lg-5 mx-md-4 mx-3">
                <a href="#privacymy">Privacy Policy</a>
              </li>
              <li><a href="contact.html">Contact us</a></li>
            </ul>
          </div>
        </div>
      </div>
      <button
      onclick="topFunction()"
      id="movetop"
      title="Go to top"
      style="display: block">
    ⤴
    </button>
    </section>`;
  }
}
customElements.define("my-footer", myFooter);
class rightBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="demo-bar-right text-center">
    <div class="icon">
      <i class="fa-solid fa-angles-right"></i>
      <div class="list-icon">
        <div class="btn-icon">
          <i class="fa-solid fa-arrow-left"></i>
          <p>Back</p>
        </div>
        <div class="btn-icon">
          <i class="fa-solid fa-download"></i>
          <p>Download</p>
        </div>
        <div class="btn-icon">
          <i class="fa-solid fa-cart-shopping"></i>
          <p>Buy</p>
        </div>
      </div>
    </div>
  </div>`;
  }
}
customElements.define("right-bar", rightBar);
class rightSideBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="pull-right toggle-right-sidebar">
      <span
        class="fa title-open-right-sidebar tooltipstered fa-angle-double-right"
      ></span>
    </div>
    <div id="right-sidebar">
      <div>
        <div id="DemoBar" class="r-demo-bar">
          <div class="demo-btns">
            <a href="#url">
              <span class="r-icon">
                <span class="fa fa-arrow-left"></span>
              </span>
              <span>Back</span>
            </a>
            <a href="#url">
              <span class="r-icon">
                <span class="fa fa-download"></span>
              </span>
              <span>Download</span>
            </a>
            <a href="#url" class="mb-0">
              <span class="r-icon">
                <span class="fa fa-shopping-cart"></span>
              </span>
              <span>Buy</span>
            </a>
          </div>
        </div>
      </div>
    </div>`;
  }
}
customElements.define("right-side-bar", rightSideBar);
