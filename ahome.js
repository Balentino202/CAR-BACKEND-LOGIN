let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const overlay = document.querySelector(".slider-overlay");

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${slideIndex * 100}%)`;
  }
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
  overlay.classList.add("hide-slider-overlay");
}

function previousSlide() {
  slideIndex--;
  showSlide(slideIndex);
  overlay.classList.add("hide-slider-overlay");
}

showSlide(slideIndex);

// Auto slide change every 5 seconds
setInterval(() => {
  slideIndex++;
  showSlide(slideIndex);
  overlay.classList.add("hide-slider-overlay");
}, 5000);

overlay.addEventListener("transitionend", () => {
  overlay.classList.remove("hide-slider-overlay");
});
