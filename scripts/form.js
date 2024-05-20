const year = document.getElementById("year");
const lastModified = document.getElementById("lastModified");
const today = new Date();
const lastModifiedDate = new Date(document.lastModified);
year.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `Last Modified On: ${lastModifiedDate}`;
lastModified.style.color = "white";
// get the selcet element
const select = document.getElementById("product-name");
// the products array
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];
//display the selct options
products.forEach((product) => {
  const option = document.createElement("option");
  option.textContent = product.name;
  option.value = product.id;
  select.appendChild(option);
});
