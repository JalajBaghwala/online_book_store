document.addEventListener("DOMContentLoaded", function () {
  const paymentForm = document.getElementById("payment-form");
  const cardNumberInput = document.getElementById("card-number");
  const expiryDateInput = document.getElementById("expiry-date");
  const cvvInput = document.getElementById("cvv");

  cardNumberInput.addEventListener("input", function (event) {
    const value = event.target.value.replace(/\D/g, "");
    event.target.value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
  });

  cvvInput.addEventListener("input", function (event) {
    const value = event.target.value.replace(/\D/g, "");
    event.target.value = value;
  });

  paymentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const cardNumber = cardNumberInput.value.replace(/\s/g, "");
    const expiryDate = expiryDateInput.value;
    const cvv = cvvInput.value;

    if (!/^\d{16}$/.test(cardNumber)) {
      alert("Invalid card number. Please enter a 16-digit card number.");
      return;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      alert("Invalid expiry date. Please enter in MM/YY format.");
      return;
    }

    if (!/^\d{3,4}$/.test(cvv)) {
      alert("Invalid CVV. Please enter a 3 or 4-digit CVV.");
      return;
    }

    alert("Payment successful!");
    window.location.href = "index.html";
  });
});
