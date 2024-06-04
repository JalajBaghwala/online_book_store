document.addEventListener("DOMContentLoaded", function () {
  // Get total amount from local storage or from URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const totalAmount =
    urlParams.get("total") || localStorage.getItem("cartTotal") || "0.00";
  document.getElementById("totalAmount").value = `$${totalAmount}`;

  const checkoutForm = document.getElementById("checkoutForm");

  checkoutForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const cardNumber = document.getElementById("cardNumber").value;
    const cardExpiry = document.getElementById("cardExpiry").value;
    const cardCVC = document.getElementById("cardCVC").value;
    const cardName = document.getElementById("cardName").value;
    const billingAddress = document.getElementById("billingAddress").value;
    const totalAmount = document.getElementById("totalAmount").value;

    // Basic validation (you can add more comprehensive validation as needed)
    if (!/^\d{16}$/.test(cardNumber)) {
      alert("Please enter a valid 16-digit card number.");
      return;
    }
    if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
      alert("Please enter a valid expiry date (MM/YY).");
      return;
    }
    if (!/^\d{3}$/.test(cardCVC)) {
      alert("Please enter a valid 3-digit CVC.");
      return;
    }

    // If validation passes, proceed with payment (you would typically integrate with a payment gateway here)
    alert("Payment successful!");

    // Redirect to a confirmation page or clear the cart
    localStorage.removeItem("cartItems");
    localStorage.removeItem("cartTotal");
    window.location.href = "confirmation.html";
  });
});
