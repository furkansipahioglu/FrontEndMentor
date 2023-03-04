const card = document.querySelectorAll(".card");
console.log(card);

card.forEach(function (element) {
  element.addEventListener("click", function () {
    this.classList.toggle("active");

    if (element.classList.contains("active")) {
      card.forEach(function (element) {
        element.classList.remove("active");
      });
      element.classList.toggle("active");
    }
  });
});

window.onload = function () {
  if (screen.width >= 600) {
    document.querySelector(".women").src =
      "images/illustration-woman-online-desktop.svg";
    document.querySelector(".pattern").src = "images/bg-pattern-desktop.svg";
  } else {
    const boxelement = document.getElementById("box1");
    boxelement.remove();
    document.querySelector(".women").src =
      "images/illustration-woman-online-mobile.svg";
    document.querySelector(".pattern").src = "images/bg-pattern-mobile.svg";
  }
};
