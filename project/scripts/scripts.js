const hamButton = document.getElementById("menu");
const nav = document.querySelector(".navigation");
hamButton.addEventListener("click", function () {
  nav.classList.toggle("open");
  hamButton.classList.toggle("open");
});
// Form

// get the selcet element
const select = document.getElementById("product-name");
const priceSpan = document.querySelector(".price-span");
// the products array
const products = [
  {
    id: "fc-1888",
    name: "Basic Plan",
    averagerating: 4.5,
    price: 49.99,
  },
  {
    id: "fc-2050",
    name: "Standard Plan",
    averagerating: 4.7,
    price: 79.99,
  },
  {
    id: "fs-1987",
    name: "Premium Plan",
    averagerating: 3.5,
    price: 99.99,
  },
];
//display the selct options
products.forEach((product) => {
  const option = document.createElement("option");
  option.textContent = product.name;
  option.value = product.id;
  select.appendChild(option);
});
// to get the selected value if its empty or not
select.addEventListener("change", () => {
  const selectedProductId = select.value;
  if (selectedProductId === "") {
    priceSpan.innerHTML = `Please select a laudry plan`;
  } else {
    const selectedProduct = products.find(
      (product) => product.id === selectedProductId
    );
    if (selectedProduct) {
      priceSpan.innerHTML = `$${selectedProduct.price}`;
    }
  }
});
