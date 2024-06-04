document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".book button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      alert("Book added to cart!");
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".book button");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // For simplicity, we just redirect to the cart page here.
      // In a real application, you would add the book to a cart array and save it in local storage or a database.
      window.location.href = "cart.html";
    });
  });
});
// document.addEventListener('DOMContentLoaded', function() {
//   const buttons = document.querySelectorAll('.book button');

//   buttons.forEach(button => {
//       button.addEventListener
