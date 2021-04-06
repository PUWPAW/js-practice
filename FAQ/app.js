const questionsArray = [
  {
    id: 1,
    question: "Do You Accept All Major Credit Cards?",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        provident at quibusdam ad veniam, possimus perferendis velit minima
        labore dolorum.`,
  },
  {
    id: 2,
    question: "Do You Suppport Local Farmers?",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        provident at quibusdam ad veniam, possimus perferendis velit minima
        labore dolorum.`,
  },
  {
    id: 3,
    question: "Do You Use Organic Ingredients?",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        provident at quibusdam ad veniam, possimus perferendis velit minima
        labore dolorum.`,
  },
];

window.addEventListener("DOMContentLoaded", () => {
  const template = questionsArray.map(questionTemplate);

  const box = document.querySelector(".questions");
  box.insertAdjacentHTML("beforeend", template.join(""));

  const questions = document.querySelectorAll(".question");

  questions.forEach((question) => {
    const showBtn = question.querySelector(".question__show");

    showBtn.addEventListener("click", () => {
      questions.forEach((item) => {
        if (item !== question) {
          item.classList.remove("show-descr");
        }
      });
      question.classList.toggle("show-descr");
    });
  });
});

function questionTemplate(q) {
  return `
    <div class="question">
        <div class="question__wrapper">
        <h3 class="question__title">
            ${q.question}
        </h3>
        <button class="question__show">
            <i class="far fa-plus-square plus"></i>
            <i class="far fa-minus-square minus"></i> 
        </button>
        </div>
        <p class="question__description">
            ${q.text}
        </p>
    </div>
    `;
}
