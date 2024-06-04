document.addEventListener("DOMContentLoaded", function () {
  const aboutTexts = document.querySelectorAll(".about-text");

  aboutTexts.forEach((text, index) => {
    setTimeout(() => {
      text.classList.add("visible");
    }, index * 200);
  });
});
