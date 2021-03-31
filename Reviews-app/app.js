const reviews = [
  {
    id: 1,
    avatart: "./img/woman1.jpg",
    photoBy: "Photo by Christopher Campbell on Unsplash",
    name: "Susana Smith",
    job: "Web developer",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
    adipisci asperiores earum repudiandae sed aut perspiciatis soluta
    quos recusandae nemo corrupti suscipit ex voluptate, a omnis fuga
    assumenda nobis distinctio necessitatibus, ipsam iste.`,
  },
  {
    id: 2,
    avatart: "./img/man2.jpg",
    photoBy: "Photo by Salomé Guruli on Unsplash",
    name: "Salomé Guruli",
    job: "Photographer",
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
    adipisci asperiores earum repudiandae sed aut perspiciatis soluta
    quos recusandae nemo corrupti.`,
  },
  {
    id: 3,
    avatart: "./img/woman2.jpg",
    photoBy: "Photo by x ) on Unsplash",
    name: "Margo Ulrich",
    job: "Frontend developer",
    review: `Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации.`,
  },
  {
    id: 4,
    avatart: "./img/man1.jpg",
    photoBy: "Photo by omid bonyadian on Unsplash",
    name: "Jone Born",
    job: "Backend developer",
    review: `Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца.`,
  },
  {
    id: 5,
    avatart:
      "https://images.unsplash.com/photo-1617094876942-958b070179c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=650&q=80",
    photoBy: "Photo by ROOTED STUDIO on Unsplash",
    name: "Avraam Jolten",
    job: "UX/UI designer",
    review: `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.`,
  },
];

const img = document.querySelector(".card__img");
const name = document.querySelector(".card__name");
const profession = document.querySelector(".card__profession");
const review = document.querySelector(".card__review");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const randomBtn = document.getElementById("rand");
const card = document.querySelector(".card");

let currentReview = 0;

window.addEventListener("DOMContentLoaded", () => {
  showReview();
});

function showReview() {
  const item = reviews[currentReview];

  img.src = item.avatart;
  img.alt = item.photoBy;
  name.textContent = item.name;
  profession.textContent = item.job;
  review.textContent = item.review;
}

function changeReview(num) {
  currentReview += num;

  if (currentReview > reviews.length - 1) {
    currentReview = 0;
  }

  if (currentReview < 0) {
    currentReview = reviews.length - 1;
  }

  card.classList.add("animated");

  setTimeout(() => {
    card.classList.remove("animated");
  }, 500);

  showReview();
}

nextBtn.addEventListener("click", () => {
  changeReview(1);
});

prevBtn.addEventListener("click", () => {
  changeReview(-1);
});

randomBtn.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * reviews.length);

  changeReview(randomNumber);
  showReview();
});
