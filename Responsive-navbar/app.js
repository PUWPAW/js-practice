const menuBtn = document.querySelector(".nav__btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});
