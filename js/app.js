const tigger = document.querySelectorAll(".menu_items ul li a");
const dropdown = document.querySelectorAll(".dropdown");

tigger.forEach((item) => {
  item.addEventListener("click", () => {
    const willOpen = item.getAttribute("willopen");
    dropdown.forEach((item) => {
      const dropAttr = item.getAttribute("id");
      if (willOpen === dropAttr) {
        item.classList.toggle("menu_hover_open");
      } else {
        item.classList.remove("menu_hover_open");
      }
    });
  });
});

// code for trip form slide
const slideHeader = document.querySelector(".p3cost_details_heading");
const slideWrapper = document.querySelector(".p3cost_form_wrapper");
const arrowWrapper = document.querySelector(".p3cost_details_heading span");

slideHeader.addEventListener("click", () => {
  arrowWrapper.classList.toggle("rotatedarrow");
  slideWrapper.classList.toggle("showWrapper");
});

// code for number up and number down
const minusone = document.getElementById("minusone");
const inputone = document.getElementById("inputone");
const plusone = document.getElementById("plusone");

const minustwo = document.getElementById("minustwo");
const inputtwo = document.getElementById("inputtwo");
const plustwo = document.getElementById("plustwo");

const minusthree = document.getElementById("minusthree");
const inputthree = document.getElementById("inputthree");
const plusthree = document.getElementById("plusthree");

function numberUpDown(minus, input, plus) {
  let preValue;

  minus.addEventListener("click", () => {
    const inputValue = parseFloat(input.value);
    if (inputValue <= 0) {
      return false;
    } else {
      preValue = inputValue - 1;
    }

    input.value = preValue;
  });

  plus.addEventListener("click", () => {
    const inputValue = parseFloat(input.value);
    if (inputValue >= 9) {
      return false;
    } else {
      preValue = inputValue + 1;
    }

    input.value = preValue;
  });
}

numberUpDown(minusone, inputone, plusone);
numberUpDown(minustwo, inputtwo, plustwo);
numberUpDown(minusthree, inputthree, plusthree);
