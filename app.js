// All Offers
let offers = {
  offerOne: "بطاقة واحدة لمدة سنتين بـ 200 ريال",
  offerTwo: "بطاقتين لمدة سنة بـ 200 ريال",
  offerThree: "بطاقتين لمدة سنتين بـ 300 ريال",
  // offerFour: "4 بطاقات لمدة سنة بـ 300 ريال",
};


// Select element <select></select>
let selectElement = document.getElementById("offers");

// Show\hide inputs depends on selected offer
let inputsTwoCard = document.getElementById("offer-two-cards");
let inputsFourCard = document.getElementById("offer-four-cards");

// Change hiden inputs title "بيانات البطاقات الإضافية" or "بيانات البطاقة الإضافية"
let extraInputsTitle = document.getElementById("extra-inputs-title");

// Add\remove "required" from hiden inputs
let colectionTwo = document.querySelectorAll(".colection-two");
let colectionFour = document.querySelectorAll(".colection-four");

// Add offers <option> to <select> element
const applyOffersToHtml = () => {
  for (let key in offers) {
    let optionElement = document.createElement("option");
    optionElement.value = offers[key];
    optionElement.textContent = offers[key];
    selectElement.appendChild(optionElement);
  }
};
applyOffersToHtml();

// Handle <select> change
selectElement.addEventListener("change", showInputs);

function showInputs() {
  let selectedOffer = selectElement.value;
  if (selectedOffer === offers.offerOne) {
    // Remove "required" from hiden inputs  (colectionTwoInputs & colectionFourInputs)
    for (let i = 0; i < colectionTwo.length; i++) {
      colectionTwo[i].removeAttribute("required");
    }
    for (let i = 0; i < colectionFour.length; i++) {
      colectionFour[i].removeAttribute("required");
    }

    // Hide inputs box
    inputsTwoCard.style.display = "none";
    inputsFourCard.style.display = "none";
  } else if (
    selectedOffer === offers.offerTwo ||
    selectedOffer === offers.offerThree
  ) {
    extraInputsTitle.innerHTML = "بيانات البطاقة الإضافية";
    inputsTwoCard.style.display = "block";
    inputsFourCard.style.display = "none";

    // Remove "required" from hiden inputs (colectionFourInputs)
    for (let i = 0; i < colectionFour.length; i++) {
      colectionFour[i].removeAttribute("required");
    }
    // Add "required" to showen inputs (colectionTwo)
    for (let i = 0; i < colectionTwo.length; i++) {
      colectionTwo[i].setAttribute("required", "");
    }
  } else if (selectedOffer === offers.offerFour) {
    extraInputsTitle.innerHTML = "بيانات البطاقات الإضافية";
    inputsTwoCard.style.display = "block";
    inputsFourCard.style.display = "block";

    // Add "required" to showen inputs (colectionFour)
    for (let i = 0; i < colectionFour.length; i++) {
      colectionFour[i].setAttribute("required", "");
    }
    // Add "required" to showen inputs (colectionTwo)
    for (let i = 0; i < colectionTwo.length; i++) {
      colectionTwo[i].setAttribute("required", "");
    }
  }
}

// Handle form data
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzBCmQquojao-RXr-IcT-onwZwyLd_9gE6qkUd7iPVSQ9Egk3IptKElquFFWBbfn7bVeA/exec";

// form
let form = document.forms["submit-to-google-sheet"];
// Submit button
let submitBtn = document.getElementById("submit-btn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  // disable button until submit finish
  submitBtn.setAttribute("disabled", "");
  // Run bootstrap spinner
  submitBtn.innerHTML =
    '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>';

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      body: new FormData(form),
    });

    console.log("Success!", response);
    window.location.href = "./thankyou.html"; // Go to thank you page

    // Print data for testing
    // const z  = new FormData(form)
    // for (let entry of z.entries()) {
    //   console.log(entry);
    // }
    
  } catch (error) {
    console.error("Error!", error.message);
    submitBtn.removeAttribute("disabled"); // Active btn
    submitBtn.innerHTML = "اطلب"; //Replace spinner to "اطلب"
  }
});

// Hide sidebar(offcanvas)  on click on any nav link (in small screen)
let navLinks = document.querySelectorAll(".anchor");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", clickOnCloseBtn);
});

function clickOnCloseBtn() {
  let btn = document.getElementsByClassName("btn-close")[0];
  btn.click(); // click on hiden close btn
}
