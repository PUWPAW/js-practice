const incBtn = document.getElementById("incr");
const decBtn = document.getElementById("decr");
const resetBtn = document.getElementById("reset");
const counter = document.querySelector(".counter");

let currentCount = 0;

incBtn.addEventListener("click", () => changeCounter(1));
decBtn.addEventListener("click", () => changeCounter(-1));
resetBtn.addEventListener("click", resetCounter);

function changeCounter(num) {
  counter.textContent = currentCount += num;

  switch (true) {
    case currentCount > 0:
      counter.style.color = "white";
      break;
    case currentCount < 0:
      counter.style.color = "darkred";
      break;

    default:
      counter.style.color = "black";
      break;
  }
}

function resetCounter() {
  currentCount = 0;
  counter.textContent = currentCount;
  counter.style.color = "black";
}
