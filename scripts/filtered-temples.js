const hamButton = document.getElementById("menu");
const nav = document.querySelector(".navigation");
const year = document.getElementById("year");
const lastModified = document.getElementById("lastModified");
const today = new Date();
const lastModifiedDate = new Date(document.lastModified);
year.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `Last Modified On: ${lastModifiedDate}`;
lastModified.style.color = "white";

const templesElement = document.querySelector(".grid");
const home = document.querySelector("#home");
const old = document.querySelector("#old");
const news = document.querySelector("#new");
const large = document.querySelector("#large");
const small = document.querySelector("#small");

const listFilters = [home, old, news, large, small];

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  // Add more temple objects here...
    {
      templeName: "Durban South Africa",
      location: "Umhlanga, South Africa",
      dedicated: "2020, February, 16",
      area: 19860,
      alternate: "Durban South Africa",
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/durban-south-africa/400x250/5-a34bb1899983ed73e499a18da741b3704e1d4d35.jpg"
    },
    {
      templeName: "Copenhagen Denmark",
      location: "Frederiksberg, Denmark",
      dedicated: "2004, May, 23",
      area: 25000,
      alternate: "Copenhagen Denmark Temple",
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/copenhagen-denmark/400x250/copenhagen-denmark-temple-lds-278232-wallpaper.jpg"
    },
    {
      templeName: "Asunción Paraguay",
      location: "Asunción, Paraguay",
      dedicated: "2002, May, 19",
      area: 11906,
      alternate: "Asunción Paraguay Temple",
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/asuncion-paraguay/400x250/2-5b20486ae3876279c35be147ef9e63aec256a459.jpeg"
    }, 
  {
    templeName: "Guatemala City",
    location: "Guatemala City, Guatemala",
    dedicated: "1984, December, 14",
    area: 17609,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/guatemala-city-guatemala/800x1280/guatemala-lds-temple-82739-wallpaper.jpg",
  },
  {
    templeName: "Quetzaltenango Guatemala",
    location: "Quetzaltenango Guatemala",
    dedicated: "2011, December, 11",
    area: 21086,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/quetzaltenango-guatemala/800x500/quetzaltenango-guatemala-temple-lds-893073-wallpaper.jpg",
  },
];

/* Declare and initialize global variables */

displayTemples(temples);

const resetOpts = () =>
  listFilters.forEach((element) => {
    if (element.getAttribute("class") === "active") {
      element.classList.toggle("active");
    }
  });

// Event Listeners
hamButton.addEventListener("click", function () {
  nav.classList.toggle("open");
  hamButton.classList.toggle("open");
});

home.addEventListener("click", () => {
  resetOpts();
  home.classList.toggle("active");
  let filterTemples = temples;
  displayTemples(filterTemples);
});
old.addEventListener("click", () => {
  resetOpts();
  old.classList.toggle("active");
  let filterTemples = temples.filter(
    (temple => temple.dedicated.substring(0, 4) < 1900) 
  );
  displayTemples(filterTemples);
});
news.addEventListener("click", () => {
  resetOpts();
  news.classList.toggle("active");
  let filterTemples = temples.filter(
    (temple => temple.dedicated.substring(0, 4) > 2000) 
  );
  displayTemples(filterTemples);
});

small.addEventListener("click", () => {
  resetOpts();
  small.classList.toggle("active");
  let filterTemples = temples.filter((temple) => (temple.area < 10000));
  displayTemples(filterTemples);
});

large.addEventListener("click", () => {
  resetOpts();
  large.classList.toggle("active");
  let filterTemples = temples.filter((temple) => (temple.area > 90000));
  displayTemples(filterTemples);
});

function displayTemples(filterTemples) {
  templesElement.innerHTML = ``;
  console.table(temples);
  filterTemples.forEach((temple) => {
    // Create an HTML <article> element (createElement).
    let article = document.createElement("article");
    // Create an HTML <h3> element and add the temple's templeName property to this new element.
    let title = document.createElement("h3");
    title.innerHTML = temple["templeName"];
    // Create an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's location property to the alt attribute.
    let image = document.createElement("img");
    image.setAttribute("src", temple["imageUrl"]);
    image.setAttribute("alt", temple["location"]);
    image.setAttribute("loading", "lazy");
    // create a location <h4> and add the temples location property to it
    let location = document.createElement("h5");
    location.innerHTML = `LOCATION: ${temple["location"]}`;
    // create a <h4> and add dedicated property to it
    let dedication = document.createElement("h5");
    dedication.innerHTML = `DEDICATED ON: ${temple["dedicated"]}`;
    // create <h4> and add a size property
    let size = document.createElement("h5");
    size.innerHTML = `SIZE: ${temple["area"]}sqft`;
    // Append the <h3> element and the <img> element to the <article> element as children. (appendChild
    article.appendChild(title);
    article.appendChild(location);
    article.appendChild(dedication);
    article.appendChild(size);
    article.appendChild(image);
    // Append the <article> element to the global templesElement variable declared in Step 2.
    templesElement.appendChild(article);
  });
}
