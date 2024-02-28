import { initializeSearch } from "./search.js";

initializeSearch();

import { showSlide, nextSlide } from "./slider.js";

document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slider-slide");

  function updateSlide() {
    showSlide(currentSlide, slides);
    currentSlide = nextSlide(currentSlide, slides);
  }

  updateSlide();
  setInterval(updateSlide, 3000);
});
