const modal = document.querySelector(".modal");
const modalBtn = document.querySelector(".btn");
const modalClose = document.querySelector(".modal__close");
const activeModal = document.querySelector(".modal-active");

modalBtn.addEventListener("click", showModal);
modalClose.addEventListener("click", hideModal);

window.addEventListener("click", (event) => {
  if (!modal.contains(event.target) && !modalBtn.contains(event.target)) {
    hideModal();
  }
});

function showModal() {
  modal.classList.add("show-modal");
  activeModal.style.display = "block";
  document.body.style.overflow = "hidden";
}

function hideModal() {
  modal.classList.remove("show-modal");
  activeModal.style.display = "none";
  document.body.style.overflow = "";
}
