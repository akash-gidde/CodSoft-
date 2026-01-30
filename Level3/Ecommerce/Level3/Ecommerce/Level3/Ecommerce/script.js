let total = 0;

function addToCart(price) {
  total += price;
  document.getElementById("total").innerText = total;
}
