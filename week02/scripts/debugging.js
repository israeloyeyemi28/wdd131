const PI = 3.14;
let area = 0;

function circleArea(radius) {
  const area = radius * radius * PI;
  return area;
}
area = circleArea(5);
console.log("Area1:", area);
