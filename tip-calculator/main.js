const bill = document.querySelector(".bill-input");
const people = document.querySelector(".people-input");
const tipbutton = document.querySelectorAll(".tip-button");
const customtip = document.querySelector(".tip-input");

const tipamount = document.querySelector(".tip-amount");
const totalamount = document.querySelector(".total-amount");
const zero = document.querySelector(".cantzero");

const resetBtn = document.querySelector(".reset");

bill.addEventListener("input", billInputHandle);
people.addEventListener("input", peopleInputHandle);
customtip.addEventListener("input", customInputHandle);
resetBtn.addEventListener("click", resetAll);

var billValue = 0.0;
var peopleNumber = 1;
var tipvalue = 0.05;
var totaltip = 0;
var persontip = 0;

function billInputHandle() {
  billValue = parseFloat(bill.value);
  calculate();
}

function peopleInputHandle() {
  peopleNumber = parseFloat(people.value);
  if (peopleNumber == "0") {
    people.classList.add("warning-input");
    zero.classList.add("warning");
  } else {
    people.classList.remove("warning-input");
    zero.classList.remove("warning");
  }
  calculate();
}

function customInputHandle() {
  tipvalue = parseFloat(customtip.value / 100);

  tipbutton.forEach(function (value) {
    console.log("girdi");
    value.classList.remove("active");
  });
  calculate();
}

function resetAll() {
  bill.value = 0.0;
  billInputHandle();
  people.value = 0;
  peopleInputHandle();
  tipamount.innerHTML = "$" + 0.0;
  totalamount.innerHTML = "$" + 0.0;
}

tipbutton.forEach(function (tips) {
  tips.addEventListener("click", (event) => {
    tipbutton.forEach(function (value) {
      value.classList.remove("active");
      if (event.target.innerHTML == value.innerHTML) {
        value.classList.add("active");
        tipvalue = parseFloat(value.innerHTML) / 100;
      }
    });
    console.log(tipvalue);
    calculate();
  });
});

function calculate() {
  if (peopleNumber >= 1) {
    persontip = (tipvalue * billValue) / peopleNumber;
    tipamount.innerHTML = "$" + persontip.toFixed(2);
    totaltip = persontip * peopleNumber;
    totalamount.innerHTML = "$" + totaltip.toFixed(2);
  }
}
