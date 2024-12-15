// show menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // validatet that variabel exist
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      //  we add the show-menu to the div class tag with the nav_menu class
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");
// remove menu mobile
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // wehn we click on each nav__link, we remove the  show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
// scroll selection active link
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link");
    } else {
      document.querySelectorAll(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
// change background header
function scrollHeader() {
  const nav = document.getElementById("header");

  //when the scroll is greater then 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// show scroll top
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");

  // when teh scroll is higher 560 viewport, add the show-scroll class to the tag with the scroll-top
  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);
// dark light theme

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-toggle-right";

// previous selected topic ( if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// we obtain the current theme tha the interface has by validatong
const getCurrentTheme = () => (document.body.contains(darkTheme) ? "dark" : "light");
const getCurrentIcon = () => (themeButton.body.contains(iconTheme) ? "bx-toggle-left" : "bx-toggle-right");
// we validate if the user
if (selectedTheme) {
  document.body.classList[selectedTheme == "dark" ? "add" : "remove"](darkTheme);
  themeButton.classList[selectedIcon == "bx-toggle-left" ? "add" : "remove"](iconTheme);
}

// activate
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
// slideshow
var slidIndek = 1;
showSlides(slidIndek);

// next/prev
function plusSlides(n) {
  showSlides((slidIndek += n));
}
// thumbnail
function currentSlides(n) {
  showSlides((slidIndek = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slidIndek = 1;
  }
  if (n < 1) {
    slidIndek = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slidIndek - 1].style.display = "block";
  dots[slidIndek - 1].className += " active";
}
// scroll reveal animantion
const sr = $scroolReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
});

sr.reveal(".home, .about__data, .about__img, .services__content, .products, .size__data, .size__img, .contact__data, .contact__button, .footer__content, .detail__img, .detail__data", {
  interval: 200,
});
