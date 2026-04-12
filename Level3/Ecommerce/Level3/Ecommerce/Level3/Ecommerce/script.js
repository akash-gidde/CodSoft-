let cart = [];

function addToCart(productName) {
  cart.push(productName);
  displayCart();
}

function displayCart() {
  let cartBox = document.getElementById("cart");
  cartBox.innerHTML = "";

  cart.forEach(function(item) {
    let p = document.createElement("p");
    p.innerText = item;
    cartBox.appendChild(p);
  });
}
