const overlay = document.querySelector(".overlay");
const OpenBtn = document.querySelector(".open-menu");
const closeBtn = document.querySelector(".close");

OpenBtn.addEventListener("click", () => {
  OpenBtn.classList.add("hide");
  closeBtn.classList.remove("hide");
  overlay.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  closeBtn.classList.add("hide");
  OpenBtn.classList.remove("hide");
  overlay.classList.remove("show");
});
