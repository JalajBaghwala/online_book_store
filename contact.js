document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const contactNumberInput = document.getElementById("contactNumber");
  const pinCodeInput = document.getElementById("pinCode");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const contactNumber = contactNumberInput.value;
    const pinCode = pinCodeInput.value;

    if (!/^\d+$/.test(contactNumber)) {
      alert("Contact Number should contain only numbers.");
      contactNumberInput.focus();
      return;
    }

    if (!/^\d+$/.test(pinCode)) {
      alert("Pin Code should contain only numbers.");
      pinCodeInput.focus();
      return;
    }

    // If validation passes, submit the form (or perform an AJAX request)
    alert("Form submitted successfully!");
  });
});
