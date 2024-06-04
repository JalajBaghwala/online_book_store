document.addEventListener("DOMContentLoaded", function () {
  let cartItems = [
    {
      id: 1,
      title: "Book Title 1",
      author: "Author 1",
      price: 10.0,
      quantity: 1,
    },
    {
      id: 2,
      title: "Book Title 2",
      author: "Author 2",
      price: 15.0,
      quantity: 1,
    },
    {
      id: 3,
      title: "Book Title 3",
      author: "Author 3",
      price: 15.0,
      quantity: 1,
    },
  ];

  const cartContainer = document.querySelector(".cart-items");
  const cartTotalPriceElement = document.getElementById("cart-total-price");
  const proceedToPayButton = document.getElementById("proceed-to-pay");

  function renderCart() {
    cartContainer.innerHTML = "";
    let totalPrice = 0;

    cartItems.forEach((item) => {
      const cartItemElement = document.createElement("div");
      cartItemElement.classList.add("cart-item");
      cartItemElement.innerHTML = `
              <img src="book${item.id}.png" alt="${item.title}">
              <div>
                  <h3>${item.title}</h3>
                  <p>${item.author}</p>
              </div>
              <div>
                  <input type="number" value="${
                    item.quantity
                  }" min="1" data-id="${item.id}">
                  <span>$${(item.price * item.quantity).toFixed(2)}</span>
              </div>
          `;

      cartContainer.appendChild(cartItemElement);
      totalPrice += item.price * item.quantity;
    });

    cartTotalPriceElement.textContent = totalPrice.toFixed(2);
  }

  cartContainer.addEventListener("change", function (event) {
    if (event.target.tagName === "INPUT" && event.target.type === "number") {
      const itemId = event.target.getAttribute("data-id");
      const newQuantity = parseInt(event.target.value);

      const item = cartItems.find((item) => item.id == itemId);
      if (item) {
        item.quantity = newQuantity;
        renderCart();
      }
    }
  });

  proceedToPayButton.addEventListener("click", function () {
    alert("Proceeding to payment...");
    // Redirect to payment page or process payment
    window.location.href = "payment.html"; // Ensure this page exists or handle payment processing
  });

  renderCart();
});
