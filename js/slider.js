export function showSlide(index, slides) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

export function nextSlide(currentSlide, slides) {
  return (currentSlide + 1) % slides.length;
}
