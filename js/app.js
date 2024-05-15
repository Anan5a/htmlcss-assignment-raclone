const nav = document.querySelector(".nav-links");
const submenu = document.querySelector(".activate-dropdown");
const burger = document.querySelector(".burger");
const submenu_container = document.querySelector(".sub-menu");
const has_submenu = document.querySelector(".has-submenu");
const links = nav.querySelectorAll("a");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});
submenu.addEventListener("click", () => {
  has_submenu.classList.toggle("active");
  submenu_container.classList.toggle("nav-open");
  if (submenu.classList.contains("fa-chevron-down")) {
    submenu.classList.remove("fa-chevron-down");
    submenu.classList.add("fa-chevron-up");
  } else {
    submenu.classList.add("fa-chevron-down");
    submenu.classList.remove("fa-chevron-up");
  }
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});

// JavaScript code for slider functionality
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(n) {
  let newSlide = currentSlide + (n * 1);

  if (newSlide < 0) {
    newSlide = slides.length - 1;
  }
  if (newSlide > slides.length - 1) {
    newSlide = 0;
  }

  slides[currentSlide].style.display = "none";
  currentSlide = newSlide;
  console.log(currentSlide);
  slides[currentSlide].style.display = "block";
}
// showSlide(0);
