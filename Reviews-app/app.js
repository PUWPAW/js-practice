const cards = document.querySelectorAll(".card");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const surpriseBtn = document.getElementById("rand");

let currentReview = 0;

function showOneRewiew(num) {
  if (num > cards.length - 1) {
    currentReview = 0;
  }

  if (num < 0) {
    currentReview = cards.length - 1;
  }

  cards.forEach((card) => (card.style.display = "none"));
  cards[currentReview].style.display = "block";
}

function changeReview(num) {
  showOneRewiew((currentReview += num));
}

showOneRewiew(currentReview);

nextBtn.addEventListener("click", () => {
  cards.forEach((card) => (card.style.transform = "translateX(-200px)"));
  changeReview(1);
});

prevBtn.addEventListener("click", () => {
  cards.forEach((card) => (card.style.transform = "translateX(200px)"));
  changeReview(-1);
});

surpriseBtn.addEventListener("click", () => {
  currentReview = Math.floor(Math.random() * cards.length);
  cards.forEach((card) => (card.style.transform = "translateX(0)"));
  showOneRewiew(currentReview);
});
