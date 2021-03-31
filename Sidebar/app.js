const sidebar = document.querySelector(".sidebar");
const showBtn = document.querySelector(".show-btn");

const closeIcon = document.querySelector(".close");
const showIcon = document.querySelector(".show");

showBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

window.addEventListener("click", (event) => {
  if (!sidebar.contains(event.target) && !showBtn.contains(event.target)) {
    sidebar.classList.remove("show-sidebar");
  }

  if (sidebar.classList.contains("show-sidebar")) {
    showIcon.style.display = "none";
    closeIcon.style.display = "block";
  } else {
    showIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
});
