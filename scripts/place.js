// Get Dom ELEMENTS
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
//WEATHER VALUES
const weatherVal = document.querySelector(".weather-value");
const temp = 5;
const windSpeed = 10;
function calculateWindChill(temp, windSpeed) {
  if ((temp <= 10 && windSpeed > 4.8) || (temp <= 50 && windSpeed > 3)) {
    const windChillVal =
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(windSpeed, 0.16) +
      0.3965 * temp * Math.pow(windSpeed, 0.16);
    return windChillVal.toFixed(1) + "°C";
  } else {
    return "N/A";
  }
}

function displayWindChill() {
  windChillELement = document.querySelector(".weather-value");
  const windChill = calculateWindChill(temp, windSpeed);
  windChillELement.textContent = windChill;
}
window.onload = displayWindChill;
