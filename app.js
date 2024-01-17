// Show\hide inputs depends on selected offer
let offers = document.getElementById("offers");

let twoCardOffer = document.getElementById("offer-two-cards");
let fourCardOffer = document.getElementById("offer-four-cards");

// Change hiden inputs title "بيانات البطاقات الإضافية" or "بيانات البطاقة الإضافية"
let extraInputsTitle = document.getElementById("extra-inputs-title");

// Add\remove "required" from hiden inputs
let colectionTwo = document.querySelectorAll(".colection-two");
let colectionFour = document.querySelectorAll(".colection-four");

offers.addEventListener("change", showInputs);

function showInputs() {
  let selectedOffer = offers.value;
  //   console.log(selectedOffer);
  if (selectedOffer === "بطاقة واحدة لمدة سنتين بـ 200 ريال") {
    // Remove "required" from hiden inputs  (colectionTwo & colectionFour)
    for (let i = 0; i < colectionTwo.length; i++) {
      colectionTwo[i].removeAttribute("required");
    }
    for (let i = 0; i < colectionFour.length; i++) {
      colectionFour[i].removeAttribute("required");
    }

    // Hide inputs
    twoCardOffer.style.display = "none";
    fourCardOffer.style.display = "none";
  } else if (
    selectedOffer === "بطاقتين لمدة سنة بـ 200 ريال" ||
    selectedOffer === "بطاقتين لمدة سنتين بـ 300 ريال"
  ) {
    // Remove "required" from hiden inputs (colectionFour)
    for (let i = 0; i < colectionFour.length; i++) {
      colectionFour[i].removeAttribute("required");
    }

    // Add "required" to showen inputs (colectionTwo)
    for (let i = 0; i < colectionTwo.length; i++) {
      colectionTwo[i].setAttribute("required", "");
    }

    extraInputsTitle.innerHTML = "بيانات البطاقة الإضافية";
    twoCardOffer.style.display = "block";
    fourCardOffer.style.display = "none";
  } else if (selectedOffer === "4 بطاقات لمدة سنة بـ 300 ريال") {
    // Add "required" to showen inputs (colectionFour)
    for (let i = 0; i < colectionFour.length; i++) {
      colectionFour[i].setAttribute("required", "");
    }

    // Add "required" to showen inputs (colectionTwo)
    for (let i = 0; i < colectionTwo.length; i++) {
      colectionTwo[i].setAttribute("required", "");
    }

    extraInputsTitle.innerHTML = "بيانات البطاقات الإضافية";
    twoCardOffer.style.display = "block";
    fourCardOffer.style.display = "block";
  }
}

// Handle form data
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxMdM6MBV1d0281rDosEvz9z4rRwh34URjohdhMAsoarL9IVYMknQB8b3cVGV1Yr4L64w/exec";

const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))

    .catch((error) => console.error("Error!", error.message));
});
