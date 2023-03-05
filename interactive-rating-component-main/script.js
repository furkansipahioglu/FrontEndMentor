const buttons = document.querySelectorAll("li *");

const submitBtn = document.querySelector(".submitBtn");
const container2 = document.querySelector(".container2");
const content = document.querySelector(".content");
const choosen = document.querySelector(".selected h3 span");
const warning = document.querySelector(".warning p");
console.log(choosen);
var submitvalue = "";

submitBtn.addEventListener("click", () => {
  if (submitvalue === "") {
    submitBtn.disabled = true;
    warning.style.display = "block";
  } else {
    container2.classList.remove("swapRight");
    container2.style.opacity = "1";
    container2.style.display = "flex";
    content.style.opacity = "0";
    choosen.innerHTML = submitvalue;
    console.log(choosen);
  }
});

buttons.forEach(function (element) {
  element.addEventListener("click", function () {
    submitBtn.disabled = false;
    warning.style.display = "none";
    this.classList.toggle("active");
    submitvalue = element.innerHTML;
    if (element.classList.contains("active")) {
      buttons.forEach(function (element) {
        element.classList.remove("active");
      });
      element.classList.toggle("active");
    }
  });
});

// card.forEach(function (element) {
//   element.addEventListener("click", function () {
//     this.classList.toggle("active");

//     if (element.classList.contains("active")) {
//       card.forEach(function (element) {
//         element.classList.remove("active");
//       });
//       element.classList.toggle("active");
//     }
//   });
// });

// window.onload = function () {
//   if (screen.width >= 600) {
//     document.querySelector(".women").src =
//       "images/illustration-woman-online-desktop.svg";
//     document.querySelector(".pattern").src = "images/bg-pattern-desktop.svg";
//   } else {
//     const boxelement = document.getElementById("box1");
//     boxelement.remove();
//     document.querySelector(".women").src =
//       "images/illustration-woman-online-mobile.svg";
//     document.querySelector(".pattern").src = "images/bg-pattern-mobile.svg";
//   }
// };
