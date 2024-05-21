const hamButton = document.getElementById("menu");
const nav = document.querySelector(".navigation");
hamButton.addEventListener("click", function () {
  nav.classList.toggle("open");
  hamButton.classList.toggle("open");
});
