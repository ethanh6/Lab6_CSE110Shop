// Script.js

window.addEventListener("DOMContentLoaded", () => {

   if (localStorage.getItem("") == null) {
    localStorage.setItem("cart", "");
  }

 fetch("https://fakestoreapi.com/products")
    .then(function (response) {
      return response.json();
    })
    .then(function (par) {
      let count = 0;
      let cart = JSON.parse(localStorage.getItem("cart"));
      let product_list = document.getElementById("product-list");
      let product_class = window.customElements.get("produt-item");

      for (let elem in par) {
        count += par[elem].id in cart ? 1 : 0;
        new_product = new product_class(par[elem], par[elem].id in cart);
        product_list.appendChild(new_product);
      }

      document.getElementById("cart-count").innerText = count;
    });

});
