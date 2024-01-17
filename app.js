let offers = document.getElementById("offers");

let twoCardOffer = document.getElementById("offer-two-cards");
let fourCardOffer = document.getElementById("offer-four-cards");

// console.log(offers);
// console.log(twoCardOffer);
// console.log(fourCardOffer);

offers.addEventListener("change", showInputs);

function showInputs() {
  let selectedOffer = offers.value;
  //   console.log(selectedOffer);
  if (selectedOffer === "بطاقة واحدة لمدة سنتين بـ 200 ريال") {
    twoCardOffer.style.display = "none";
    fourCardOffer.style.display = "none";
  } else if (
    selectedOffer === "بطاقتين لمدة سنة بـ 200 ريال" ||
    selectedOffer === "بطاقتين لمدة سنتين بـ 300 ريال"
  ) {
    twoCardOffer.style.display = "block";
    fourCardOffer.style.display = "none";
  } else if (selectedOffer === "4 بطاقات لمدة سنة بـ 300 ريال") {
    twoCardOffer.style.display = "none";
    fourCardOffer.style.display = "block";
  }
}
