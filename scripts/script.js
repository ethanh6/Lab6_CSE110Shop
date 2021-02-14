// Script.js

window.addEventListener("DOMContentLoaded", () => {

   if (windows.localStorage.getItem("cart") == null) {
    windows.localStorage.setItem("cart", "");
  }

 fetch("https://fakestoreapi.com/products")
    .then(function (response) {
      return response.json();
    })

    .then(function (json) {
      let count = 0;
      let cart = JSON.parse(window.localStorage.getItem("cart"));
      let product_list = document.getElementById("product-list");

      for (let elem in json) {
        count += elem.id in cart ? 1 : 0;
        new_product = new ProductItem(elem, (elem.id in cart));
        product_list.append(new_product);
      }

      document.getElementById("cart-count").setAttribute("innerText", count);
    });

});
