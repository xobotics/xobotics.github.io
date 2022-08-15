<template>
  <header
    :class="[scrolledFromTop ? 'a1 dark:a3 a4 dark:a4 a5 a6' : 'a7 dark:a7']"
    class="a8 a9 aa ab ac ad a7 dark:a7"
  >
    <div class="ae">
      <div class="af ag aa ac ah">
        <div class="ai aj ak">
          <a
            href="/"
            :class="{ '!al lg:!am': scrolledFromTop }"
            class="an ab a2h lg:aW"
          >
            <img src="/xobotics-logo.png" alt="logo" class="ab dark:ao" />
            <img src="/xobotics-logo.png" alt="logo" class="ao ab dark:an" />
          </a>
        </div>
        <div class="aa ab ac ap ak">
          <div>
            <button
              @click="navbarOpen = !navbarOpen"
              :class="{ navbarTogglerActive: navbarOpen }"
              id="navbarToggler"
              class="aq ar as/2 an at/2 au av aw[6px] ax focus:ay lg:ao"
            >
              <span
                :class="{ 'az aA[7px]': navbarOpen }"
                class="af aB[6px] an aC[2px] aD[30px] a2 dark:a1"
              ></span>
              <span
                :class="{ aE: navbarOpen }"
                class="af aB[6px] an aC[2px] aD[30px] a2 dark:a1"
              ></span>
              <span
                :class="{ 'aA[-8px] aF[135deg]': navbarOpen }"
                class="af aB[6px] an aC[2px] aD[30px] a2 dark:a1"
              ></span>
            </button>
            <nav
              :class="{ ao: !navbarOpen }"
              id="navbarCollapse"
              class="aq ar aG ab aH[250px] au a1 al aI aJ dark:a2 lg:aK lg:an lg:ab lg:aj lg:a7 lg:aL lg:aM dark:lg:a7 ao"
            >
              <ul class="aN lg:aa">
                <li class="aQ dark:aS">
                  <a
                    href="/"
                    class="scroll-menu aa am aO aP hover:aR dark:hover:aT lg:aU lg:aV lg:aW xl:aX 2xl:aY dark:aT aR"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="scroll-menu aa am aO aP aQ hover:aR dark:aS dark:hover:aT lg:aU lg:aV lg:aW xl:aX 2xl:aY"
                  >
                    Services
                  </a>
                </li>
                <li class="aZ submenu-item af">
                  <a
                    href="javascript:void(0)"
                    @click="dropdownOpen = !dropdownOpen"
                    class="af aa am aO aP aQ after:aq after:a_ after:as/2 after:a10[-2px] after:a11 after:a12 after:a13[-50%] after:az after:a14 after:a15 after:a16 group-hover:aR dark:aS dark:group-hover:aT lg:aU lg:aV lg:aW lg:a17 lg:a18 lg:after:a19 xl:aX 2xl:aY"
                  >
                    About
                  </a>
                  <div
                    :class="[dropdownOpen ? 'an' : 'ao lg:an']"
                    class="submenu af aG a1a au a1 a1b[top] a1c group-hover:a1d dark:a2 lg:a1e lg:aq lg:aA[115%] lg:aD[250px] lg:a1f lg:aE lg:a1g lg:group-hover:a1h lg:group-hover:aG ao lg:an"
                  >
                    <a
                      href="/team"
                      class="an a1i aw[10px] a1j a1k hover:aR dark:aT dark:hover:aR lg:ak"
                    >
                      Team
                    </a>
                    <a
                      href="/privacy-policy"
                      class="an a1i aw[10px] a1j a1k hover:aR dark:aT dark:hover:aR lg:ak"
                    >
                      Privacy Policy
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div class="aa ap a1l lg:a1m xl:a1n 2xl:a1o">
            <div class="a1p">
              <label
                for="darkToggler"
                class="aa a1q a1r a1s ac a1t a1u a1v dark:a1w[#1E2763]"
              >
                <input
                  type="checkbox"
                  name="darkToggler"
                  id="darkToggler"
                  class="a1x"
                  aria-label="darkToggler"
                />
                <span class="aa a1y a1z ac a1t a1u a1A aT dark:a7 dark:aS">
                  <svg width="16" height="16" viewBox="0 0 16 16" class="a1B">
                    <path
                      d="M4.50663 3.2267L3.30663 2.03337L2.36663 2.97337L3.55996 4.1667L4.50663 3.2267ZM2.66663 7.00003H0.666626V8.33337H2.66663V7.00003ZM8.66663 0.366699H7.33329V2.33337H8.66663V0.366699ZM13.6333 2.97337L12.6933 2.03337L11.5 3.2267L12.44 4.1667L13.6333 2.97337ZM11.4933 12.1067L12.6866 13.3067L13.6266 12.3667L12.4266 11.1734L11.4933 12.1067ZM13.3333 7.00003V8.33337H15.3333V7.00003H13.3333ZM7.99996 3.6667C5.79329 3.6667 3.99996 5.46003 3.99996 7.6667C3.99996 9.87337 5.79329 11.6667 7.99996 11.6667C10.2066 11.6667 12 9.87337 12 7.6667C12 5.46003 10.2066 3.6667 7.99996 3.6667ZM7.33329 14.9667H8.66663V13H7.33329V14.9667ZM2.36663 12.36L3.30663 13.3L4.49996 12.1L3.55996 11.16L2.36663 12.36Z"
                    ></path>
                  </svg>
                </span>
                <span class="aa a1y a1z ac a1t a1u a7 aQ dark:a1A dark:aT">
                  <svg width="13" height="15" viewBox="0 0 13 15" class="a1B">
                    <path
                      d="M10.6111 12.855C11.591 12.1394 12.3151 11.1979 12.7723 10.1623C10.4824 10.4065 8.1342 9.46314 6.67948 7.47109C5.22476 5.47905 5.04093 2.95516 5.97054 0.848179C4.84491 0.968503 3.72768 1.37162 2.74781 2.08719C-0.224105 4.25747 -0.874706 8.43084 1.29558 11.4028C3.46586 14.3747 7.63923 15.0253 10.6111 12.855Z"
                    ></path>
                  </svg>
                </span>
              </label>
            </div>
            <div class="ao sm:aa">
              <a
                href="/"
                class="aa ac a1t a1u a1C a1D aw[9px] a1E a1F aP aQ a1G hover:a1H hover:a1A hover:aT dark:a1I dark:aT dark:hover:a1 dark:hover:aR lg:px-4 xl:px-8"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!--<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
    <a href="https://flowbite.com/" class="flex items-center">
        <img src="/xobotics-logo.png" alt="Xobotics Logo" class="brand-logo" />
    </a>
    <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
      <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <li>
          <nuxt-link to="/" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/#services-section" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Services</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">About Us</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/privacy-policy" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Privacy Policy</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/#footer-section" class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Contact</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</nav>-->
</template>

<script>
export default {
  data() {
    return {
      navbarOpen: false,
      scrolledFromTop: false,
      dropdownOpen: false,
    };
  },
  mounted() {
    // ==== darkToggler
    const darkTogglerCheckbox = document.querySelector("#darkToggler");
    const html = document.querySelector("html");

    const darkModeToggler = () => {
      darkTogglerCheckbox.checked
        ? html.classList.remove("a0")
        : html.classList.add("a0");
    };
    darkModeToggler();

    darkTogglerCheckbox.addEventListener("click", darkModeToggler);

    // ====== scroll top js
    function scrollTo(element, to = 0, duration = 500) {
      const start = element.scrollTop;
      const change = to - start;
      const increment = 20;
      let currentTime = 0;

      const animateScroll = () => {
        currentTime += increment;

        const val = Math.easeInOutQuad(currentTime, start, change, duration);

        element.scrollTop = val;

        if (currentTime < duration) {
          setTimeout(animateScroll, increment);
        }
      };

      animateScroll();
    }

    Math.easeInOutQuad = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };
  },
};
</script>
<style scoped>
.nuxt-link-exact-active {
  color: rgba(0, 0, 0, 0.9) !important;
}
a {
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
a,
a:hover {
  text-decoration: none !important;
}

.top-bar {
  padding: 0.5rem 0;
  background: #eee;
}
.top-bar a {
  color: #666666;
}

.site-logo img,
.brand-logo {
  height: 50px;
  width: auto;
}

@media (max-width: 500px) {
  .site-logo img,
  .brand-logo {
    height: 35px;
    width: auto;
  }
}

.site-navbar {
  margin-bottom: 0px;
  z-index: 1999;
  position: relative;
  width: 100%;
  padding: 1rem;
}
@media (max-width: 991.98px) {
  .site-navbar {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
.site-navbar .toggle-button {
  position: absolute;
  right: 0px;
}
.site-navbar .site-logo {
  position: absolute;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 900;
  line-height: 0;
  margin: 0;
  padding: 0;
  z-index: 3;
}
@media (max-width: 991.98px) {
  .site-navbar .site-logo {
    float: left;
    position: relative;
  }
}
.site-navbar .site-navigation.border-bottom {
  border-bottom: 1px solid white !important;
}
.site-navbar .site-navigation .site-menu {
  margin-bottom: 0;
}
.site-navbar .site-navigation .site-menu .active {
  color: #007bff !important;
}
.site-navbar .site-navigation .site-menu a {
  text-decoration: none !important;
  display: inline-block;
}
.site-navbar .site-navigation .site-menu > li {
  display: inline-block;
}
.site-navbar .site-navigation .site-menu > li > a {
  margin-left: 15px;
  margin-right: 15px;
  padding: 20px 0px;
  color: #000 !important;
  display: inline-block;
  text-decoration: none !important;
}
.site-navbar .site-navigation .site-menu > li > a:hover {
  color: #007bff;
}
.site-navbar .site-navigation .site-menu .has-children {
  position: relative;
}
.site-navbar .site-navigation .site-menu .has-children > a {
  position: relative;
  padding-right: 20px;
}
.nav-link img {
  width: 15px;
}
/*.site-navbar .site-navigation .site-menu .has-children > a:before {
  position: absolute;
  content: "\e313";
  font-size: 16px;
  top: 50%;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  font-family: "icomoon";
}*/
.site-navbar .site-navigation .site-menu .has-children .dropdown {
  visibility: hidden;
  opacity: 0;
  top: 100%;
  position: absolute;
  text-align: left;
  border-top: 2px solid #007bff;
  -webkit-box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.1);
  padding: 0px 0;
  margin-top: 20px;
  margin-left: 0px;
  background: #fff;
  -webkit-transition: 0.2s 0s;
  -o-transition: 0.2s 0s;
  transition: 0.2s 0s;
}
.site-navbar .site-navigation .site-menu .has-children .dropdown.arrow-top {
  position: absolute;
}
.site-navbar
  .site-navigation
  .site-menu
  .has-children
  .dropdown.arrow-top:before {
  display: none;
  bottom: 100%;
  left: 20%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}
.site-navbar
  .site-navigation
  .site-menu
  .has-children
  .dropdown.arrow-top:before {
  border-color: rgba(136, 183, 213, 0);
  border-bottom-color: #fff;
  border-width: 10px;
  margin-left: -10px;
}
.site-navbar .site-navigation .site-menu .has-children .dropdown a {
  text-transform: none;
  letter-spacing: normal;
  -webkit-transition: 0s all;
  -o-transition: 0s all;
  transition: 0s all;
  color: #000 !important;
}
.site-navbar .site-navigation .site-menu .has-children .dropdown a.active {
  color: #007bff !important;
  background: #f8f9fa;
}
.site-navbar .site-navigation .site-menu .has-children .dropdown > li {
  list-style: none;
  padding: 0;
  margin: 0;
  min-width: 200px;
}
.site-navbar .site-navigation .site-menu .has-children .dropdown > li > a {
  padding: 9px 20px;
  display: block;
}
.site-navbar
  .site-navigation
  .site-menu
  .has-children
  .dropdown
  > li
  > a:hover {
  background: #f8f9fa;
  color: #ced4da;
}
.site-navbar
  .site-navigation
  .site-menu
  .has-children
  .dropdown
  > li.has-children
  > a:before {
  content: "\e315";
  right: 20px;
}
.site-navbar
  .site-navigation
  .site-menu
  .has-children
  .dropdown
  > li.has-children
  > .dropdown,
.site-navbar
  .site-navigation
  .site-menu
  .has-children
  .dropdown
  > li.has-children
  > ul {
  left: 100%;
  top: 0;
}
.site-navbar
  .site-navigation
  .site-menu
  .has-children
  .dropdown
  > li.has-children:hover
  > a,
.site-navbar
  .site-navigation
  .site-menu
  .has-children
  .dropdown
  > li.has-children:active
  > a,
.site-navbar
  .site-navigation
  .site-menu
  .has-children
  .dropdown
  > li.has-children:focus
  > a {
  background: #f8f9fa;
  color: #ced4da;
}
.site-navbar .site-navigation .site-menu .has-children:hover > a,
.site-navbar .site-navigation .site-menu .has-children:focus > a,
.site-navbar .site-navigation .site-menu .has-children:active > a {
  color: #007bff;
}
.site-navbar .site-navigation .site-menu .has-children:hover,
.site-navbar .site-navigation .site-menu .has-children:focus,
.site-navbar .site-navigation .site-menu .has-children:active {
  cursor: pointer;
}
.site-navbar .site-navigation .site-menu .has-children:hover > .dropdown,
.site-navbar .site-navigation .site-menu .has-children:focus > .dropdown,
.site-navbar .site-navigation .site-menu .has-children:active > .dropdown {
  -webkit-transition-delay: 0s;
  -o-transition-delay: 0s;
  transition-delay: 0s;
  margin-top: 0px;
  visibility: visible;
  opacity: 1;
}

.site-mobile-menu {
  width: 300px;
  position: fixed;
  right: 0;
  z-index: 2000;
  padding-top: 20px;
  background: #fff;
  height: calc(100vh);
  -webkit-transform: translateX(110%);
  -ms-transform: translateX(110%);
  transform: translateX(110%);
  -webkit-box-shadow: -10px 0 20px -10px rgba(0, 0, 0, 0.1);
  box-shadow: -10px 0 20px -10px rgba(0, 0, 0, 0.1);
  -webkit-transition: 0.3s all ease-in-out;
  -o-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
}
.offcanvas-menu .site-mobile-menu {
  -webkit-transform: translateX(0%);
  -ms-transform: translateX(0%);
  transform: translateX(0%);
}
.site-mobile-menu .site-mobile-menu-header {
  width: 100%;
  float: left;
  padding-left: 20px;
  padding-right: 20px;
}
.site-mobile-menu .site-mobile-menu-header .site-mobile-menu-close {
  float: right;
  margin-top: 8px;
}
.site-mobile-menu .site-mobile-menu-header .site-mobile-menu-close span {
  font-size: 30px;
  display: inline-block;
  padding-left: 10px;
  padding-right: 0px;
  line-height: 1;
  cursor: pointer;
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
.site-mobile-menu .site-mobile-menu-header .site-mobile-menu-close span:hover {
  color: #ced4da;
}
.site-mobile-menu .site-mobile-menu-header .site-mobile-menu-logo {
  float: left;
  margin-top: 10px;
  margin-left: 0px;
}
.site-mobile-menu .site-mobile-menu-header .site-mobile-menu-logo a {
  display: inline-block;
  text-transform: uppercase;
}
.site-mobile-menu .site-mobile-menu-header .site-mobile-menu-logo a img {
  max-width: 70px;
}
.site-mobile-menu .site-mobile-menu-header .site-mobile-menu-logo a:hover {
  text-decoration: none;
}
.site-mobile-menu .site-mobile-menu-body {
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  position: relative;
  padding: 0 20px 20px 20px;
  height: calc(100vh - 52px);
  padding-bottom: 150px;
}
.site-mobile-menu .site-nav-wrap {
  padding: 0;
  margin: 0;
  list-style: none;
  position: relative;
}
.site-mobile-menu .site-nav-wrap a {
  padding: 10px 20px;
  display: block;
  position: relative;
  color: #212529;
}
.site-mobile-menu .site-nav-wrap a:hover {
  color: #007bff;
}
.site-mobile-menu .site-nav-wrap li {
  position: relative;
  display: block;
}
.site-mobile-menu .site-nav-wrap li .nav-link.active {
  color: #007bff;
}
.site-mobile-menu .site-nav-wrap .arrow-collapse {
  position: absolute;
  right: 0px;
  top: 10px;
  z-index: 20;
  width: 36px;
  height: 36px;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
}
.site-mobile-menu .site-nav-wrap .arrow-collapse:hover {
  background: #f8f9fa;
}
.site-mobile-menu .site-nav-wrap .arrow-collapse:before {
  font-size: 12px;
  z-index: 20;
  font-family: "icomoon";
  content: "\f078";
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%) rotate(-180deg);
  -ms-transform: translate(-50%, -50%) rotate(-180deg);
  transform: translate(-50%, -50%) rotate(-180deg);
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
.site-mobile-menu .site-nav-wrap .arrow-collapse.collapsed:before {
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.site-mobile-menu .site-nav-wrap > li {
  display: block;
  position: relative;
  float: left;
  width: 100%;
}
.site-mobile-menu .site-nav-wrap > li > a {
  padding-left: 20px;
  font-size: 20px;
}
.site-mobile-menu .site-nav-wrap > li > ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.site-mobile-menu .site-nav-wrap > li > ul > li {
  display: block;
}
.site-mobile-menu .site-nav-wrap > li > ul > li > a {
  padding-left: 40px;
  font-size: 16px;
}
.site-mobile-menu .site-nav-wrap > li > ul > li > ul {
  padding: 0;
  margin: 0;
}
.site-mobile-menu .site-nav-wrap > li > ul > li > ul > li {
  display: block;
}
.site-mobile-menu .site-nav-wrap > li > ul > li > ul > li > a {
  font-size: 16px;
  padding-left: 60px;
}
.site-mobile-menu .site-nav-wrap[data-class="social"] {
  float: left;
  width: 100%;
  margin-top: 30px;
  padding-bottom: 5em;
}
.site-mobile-menu .site-nav-wrap[data-class="social"] > li {
  width: auto;
}
.site-mobile-menu .site-nav-wrap[data-class="social"] > li:first-child a {
  padding-left: 15px !important;
}

.sticky-wrapper {
  position: relative;
  z-index: 100;
  width: 100%;
}
.sticky-wrapper .site-navbar {
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
.sticky-wrapper .site-navbar {
  background: #fff;
}
.sticky-wrapper .site-navbar .site-logo a {
  color: #fff;
}
.sticky-wrapper .site-navbar ul li a {
  color: rgba(255, 255, 255, 0.7) !important;
}
.sticky-wrapper .site-navbar ul li a.active {
  color: #fff !important;
}
.sticky-wrapper.is-sticky .site-navbar {
  background: #fff;
  -webkit-box-shadow: 4px 0 20px -5px rgba(0, 0, 0, 0.2);
  box-shadow: 4px 0 20px -5px rgba(0, 0, 0, 0.2);
}
.sticky-wrapper.is-sticky .site-navbar .site-logo a {
  color: #007bff;
}
.sticky-wrapper.is-sticky .site-navbar ul li a {
  color: #000 !important;
}
.sticky-wrapper.is-sticky .site-navbar ul li a.active {
  color: #007bff !important;
}
.sticky-wrapper .shrink {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
}
@media (max-width: 991.98px) {
  .sticky-wrapper .shrink {
    padding-top: 30px !important;
    padding-bottom: 30px !important;
  }
}
</style>
