const navList = document.querySelector(".nav-list");
const openBtn = document.querySelector(".nav-menu");
const closeBtn = document.querySelector(".nav-list .fa-xmark");

openBtn.addEventListener("click", () => {
  navList.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  navList.classList.remove("show");
});
