const overlay = document.querySelector(".overlay");
const navList = document.querySelector(".nav-list");
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

navList.addEventListener("click", () => {
  OpenBtn.classList.remove("hide");
  overlay.classList.remove("show");
});

const date = document.querySelector(".date");
const cuurentDate = new Date().getFullYear();
date.textContent = cuurentDate;
