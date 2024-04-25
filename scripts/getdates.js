const year = document.getElementById("year");
const lastModified = document.getElementById("lastModified");

const today = new Date();
const currentYear = today.getFullYear();

year.textContent = currentYear;

const LastModifiedDate = new Date(document.lastModified);

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};
const formattedDate = LastModifiedDate.toLocaleDateString(undefined, options);

lastModified.textContent = `Last Modified on : ${formattedDate}`;
lastModified.style.color = "white";
