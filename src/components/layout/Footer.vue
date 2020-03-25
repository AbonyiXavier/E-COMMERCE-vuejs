<template>
  <div class="bg-color mt-3 pb-3">
    <div class="wrapper">
      <b-container>
        <b-row class="text-center">
          <b-col>
            <div class="footer-item">
              <h6 class="mt-3">LET US HELP YOU</h6>
              <ul>
                <li>
                  <a href>Help Center</a>
                </li>
                <li>
                  <a href>Contact Us</a>
                </li>
              </ul>
            </div>
          </b-col>
          <b-col>
            <div class="footer-item">
              <h6 class="mt-3">
                ABOUT XAVIER'S
                <i class="fas fa-shopping-cart"></i>
              </h6>
              <ul>
                <li>
                  <a href>About Us</a>
                </li>
                <li>
                  <a href>Terms & Condition</a>
                </li>
                <li>
                  <a href>Privacy policy</a>
                </li>
              </ul>
            </div>
          </b-col>
          <b-col>
            <div class="footer-item">
              <h6 class="mt-3">EARN WITH US</h6>
              <ul>
                <li>
                  <a href>Become a Sales Consultant</a>
                </li>
                <li>
                  <a href>An Affliated Partner</a>
                </li>
              </ul>
            </div>
          </b-col>
          <b-col>
            <div class="footer-item">
              <h6 class="mt-3">COUNTRIES</h6>
              <ul>
                <li>
                  <a href>Nigeria</a>
                </li>
                <li>
                  <a href>Kenya</a>
                </li>
                <li>
                  <a href>South Africa</a>
                </li>
                <li>
                  <a href>Ghana</a>
                </li>
              </ul>
            </div>
          </b-col>
        </b-row>
      </b-container>

      <b-container>
        <b-row class="text-center">
          <b-col>
            <div class="footer-item mt-2">
              <h6>Follow us on</h6>
              <ul class="ul">
                <li>
                  <a href="https://facebook.com/francis.abonyi" target="_blank">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/abonyi_Xavier" target="_blank">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a href="https://instagram.com/Xavierblaze_art" target="_blank">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href>
                    <i class="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </b-col>
          <b-col>
            <div class="footer-item mt-2">
              <h6>Methods of payment and delivery partner</h6>
              <ul class="ul">
                <li>
                  <a href>
                    <i class="fab fa-cc-visa"></i> Visa
                  </a>
                </li>

                <li>
                  <a href>Verve</a>
                </li>

                <li>
                  <a href>
                    <i class="fab fa-dhl"></i>
                  </a>
                </li>
              </ul>
            </div>
          </b-col>

          <b-col>col</b-col>
        </b-row>
      </b-container>
    </div>
    <small class="hr"></small>

    <div class="hide-on-big my-3">
      <b-container>
        <b-row>
          <b-col>
            <a href>HELP CENTER</a>
          </b-col>
          <b-col>
            <a href>CONTACT US</a>
          </b-col>
          <span>
            <b-col>
              <a href>
                <router-link to="/about">ABOUT US</router-link>
              </a>
            </b-col>
          </span>
          <b-col class>
            <a href>TERMS & CONDITIONS</a>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="footer-item text-center hide-icon">
      <ul class="ul">
        <li>
          <a href="https://facebook.com/francis.abonyi" target="_blank">
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/abonyi_Xavier" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://instagram.com/Xavierblaze_art" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
    <div>
      <h6 class="text-center copyright pt-1 mb-0">
        Xavier's
        <i class="fas fa-shopping-cart"></i> &copy; Copyright 2020
      </h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.bg-color {
  /* background-color: black; */
  background-color: rgb(32, 32, 32);
  /* height: 46vh; */
}
.footer-item {
  color: #fff;
  font-size: 14px;
  text-align: left;
}
ul {
  padding: 0;
}
ul li {
  list-style: none;
}
ul li a {
  text-decoration: none;
  font-size: 14px;
  color: #fff;
}

.ul li {
  display: inline-block;
  padding: 9px;
  font-size: 14px;
  color: #fff;
}
.hr {
  display: block;
  unicode-bidi: isolate;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: 12rem;
  margin-inline-end: 10rem;
  overflow: hidden;
  border-style: inset;
  border-width: 0.3px;
}
.copyright {
  color: #fff;
}
.hide-on-big {
  display: none;
}
.hide-icon {
  display: none;
}
h6 {
  font-size: 14px;
  font-weight: bold;
}

@media only screen and (max-width: 800px) {
  .bg-color {
    /* background-color: black; */
    background-color: rgb(32, 32, 32);
    /* height: 60vh; */
  }
  .footer-item {
    color: #fff;
    font-size: 14px;
  }
  ul li {
    text-decoration: none;
    list-style: none;
    font-size: 14px;
    color: #fff;
  }
  ul a li {
    text-decoration: none;
  }
  .ul li {
    list-style: none;
    display: inline-block;
    padding: 9px;
    font-size: 14px;
    color: #fff;
  }
  .hr {
    display: block;
    unicode-bidi: isolate;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: 12rem;
    margin-inline-end: 10rem;
    overflow: hidden;
    border-style: inset;
    border-width: 0.3px;
  }
  .copyright {
    color: #fff;
  }

  h6 {
    font-size: 14px;
    font-weight: bold;
  }
}

@media only screen and (max-width: 600px) {
  .wrapper {
    display: none;
  }
  .hide-on-big {
    display: block;
    /* color: #fff; */
    font-size: 10px;
  }
  .hide-on-big a {
    color: #fff;
    text-decoration: none;
  }
  .hide-icon {
    display: block;
  }
  .bg-color {
    background-color: rgb(32, 32, 32);
    /* height: 25vh; */
  }
  .copyright {
    font-size: 10px;
  }
  .hr {
    display: block;
    unicode-bidi: isolate;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: 12rem;
    margin-inline-end: 10rem;
    overflow: hidden;
    border-style: inset;
    border-width: 0.3px;
  }
}
</style>
