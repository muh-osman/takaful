// All Offers
let offers = {
  offerOne: "بطاقة واحدة لمدة سنتين بـ 200 ريال",
  offerTwo: "بطاقتين لمدة سنة بـ 200 ريال",
  offerThree: "بطاقتين لمدة سنتين بـ 300 ريال",
  offerFour: "4 بطاقات لمدة سنة بـ 300 ريال",
};

// Show\hide inputs depends on selected offer
let offersSelect = document.getElementById("offers");

let inputsTwoCard = document.getElementById("offer-two-cards");
let inputsFourCard = document.getElementById("offer-four-cards");

// Change hiden inputs title "بيانات البطاقات الإضافية" or "بيانات البطاقة الإضافية"
let extraInputsTitle = document.getElementById("extra-inputs-title");

// Add\remove "required" from hiden inputs
let colectionTwo = document.querySelectorAll(".colection-two");
let colectionFour = document.querySelectorAll(".colection-four");

// Submit button
let submitBtn = document.getElementById("submit-btn");

// Add
const applyOffersToHtml = () => {
  for (let key in offers) {
    let optionElement = document.createElement("option");
    optionElement.value = offers[key];
    optionElement.textContent = offers[key];
    offersSelect.appendChild(optionElement);
  }
};

applyOffersToHtml();

offersSelect.addEventListener("change", showInputs);

function showInputs() {
  let selectedOffer = offersSelect.value;
  if (selectedOffer === offers.offerOne) {
    console.log(1);
    // Remove "required" from hiden inputs  (colectionTwo & colectionFour)
    for (let i = 0; i < colectionTwo.length; i++) {
      colectionTwo[i].removeAttribute("required");
    }
    for (let i = 0; i < colectionFour.length; i++) {
      colectionFour[i].removeAttribute("required");
    }

    // Hide inputs
    inputsTwoCard.style.display = "none";
    inputsFourCard.style.display = "none";
  } else if (
    selectedOffer === offers.offerTwo ||
    selectedOffer === offers.offerThree
  ) {
    console.log("2 or 3");
    // Remove "required" from hiden inputs (colectionFour)
    for (let i = 0; i < colectionFour.length; i++) {
      colectionFour[i].removeAttribute("required");
    }

    // Add "required" to showen inputs (colectionTwo)
    for (let i = 0; i < colectionTwo.length; i++) {
      colectionTwo[i].setAttribute("required", "");
    }

    extraInputsTitle.innerHTML = "بيانات البطاقة الإضافية";
    inputsTwoCard.style.display = "block";
    inputsFourCard.style.display = "none";
  } else if (selectedOffer === offers.offerFour) {
    console.log(4);
    // Add "required" to showen inputs (colectionFour)
    for (let i = 0; i < colectionFour.length; i++) {
      colectionFour[i].setAttribute("required", "");
    }

    // Add "required" to showen inputs (colectionTwo)
    for (let i = 0; i < colectionTwo.length; i++) {
      colectionTwo[i].setAttribute("required", "");
    }

    extraInputsTitle.innerHTML = "بيانات البطاقات الإضافية";
    inputsTwoCard.style.display = "block";
    inputsFourCard.style.display = "block";
  }
}

// Handle form data
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxMjDlzvAEXFDlFXFcno5dWYS9oUImYXxS8j1G_RrNSFajF1PqjgIpX9USLpap9E2uw/exec";

const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  submitBtn.setAttribute("disabled", "");
  submitBtn.innerHTML =
    '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>';

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      body: new FormData(form),
    });

    console.log("Success!", response);

    window.location.href = "./thankyou.html";
  } catch (error) {
    submitBtn.removeAttribute("disabled");
    submitBtn.innerHTML = "اطلب";
    console.error("Error!", error.message);
  }
});

// Hide sidebar(offcanvas) when click on any nav link in small screen
let navLinks = document.querySelectorAll(".anchor");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", clickOnCloseBtn);
});

function clickOnCloseBtn() {
  let btn = document.getElementsByClassName("btn-close")[0];
  btn.click();
}
