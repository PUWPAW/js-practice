const slides = document.querySelectorAll(".slider__img");
const dotsBox = document.querySelector(".slider__dots");
const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");

let currentSlide = 0;
const dots = addDot(slides.length);

function showOneSlide(num) {
  if (num > slides.length - 1) {
    currentSlide = 0;
  }

  if (num < 0) {
    currentSlide = slides.length - 1;
  }

  slides.forEach((slide) => (slide.style.display = "none"));
  slides[currentSlide].style.display = "block";

  dots.forEach((dot) => {
    dot.classList.remove("active-dot");
    dotsBox.append(dot);
  });

  dots[currentSlide].classList.add("active-dot");
}

function changeSlide(num) {
  showOneSlide((currentSlide += num));
}

function addDot(length) {
  return Array(length).fill("").map(createDot);
}

function createDot() {
  const dot = document.createElement("div");
  dot.classList.add("slider__dot");

  return dot;
}

function slideFromDot() {
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      showOneSlide((currentSlide = i));
    });
  });
}

showOneSlide(currentSlide);
slideFromDot();

nextBtn.addEventListener("click", () => {
  changeSlide(1);
});

prevBtn.addEventListener("click", () => {
  changeSlide(-1);
});
