const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("show");
  menu.classList.toggle("show");
});

// trying to hide dropdown once one is selected
// const id = document.querySelector("#skills");
// id.addEventListener("click", () => {
//   menu.classList.toggle("hidden");
// });
