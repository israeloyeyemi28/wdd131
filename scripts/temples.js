const hamButton = document.getElementById("menu");
const nav = document.querySelector(".navigation");
const year = document.getElementById("year");
const lastModified = document.getElementById("lastModified");
const today = new Date();
const lastModifiedDate = new Date(document.lastModified);
year.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `Last Modified On: ${lastModifiedDate}`;
lastModified.style.color = "white";

hamButton.addEventListener("click", function () {
  nav.classList.toggle("open");
  hamButton.classList.toggle("open");
});
