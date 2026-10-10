const showModalEl = document.querySelector(".ShowModal");
const modalEl = document.querySelector(".wrapper");
const modalClose = document.querySelector(".close");

function Moodal() {
  modalEl.classList.toggle("hidden");
  showModalEl.classList.toggle("hidden");
}

showModalEl.addEventListener("click", () => Moodal());
modalClose.addEventListener("click", () => Moodal());
