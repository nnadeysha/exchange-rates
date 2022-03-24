export function setExhangeRates({ Valute }) {
  const currentRatesList = Valute;
  const valutesCode = document.querySelector(".js-valutes__list");

  for (let key in currentRatesList) {
    console.log(currentRatesList[key].ID);
    valutesCode.innerHTML += `
        <div  data-tooltip='${currentRatesList[key].Name}' class='valutes__item'>
        <p class='valutes__details valutes__code'>${currentRatesList[key].Nominal} ${currentRatesList[key].CharCode}</p>
        <p class='valutes__details valutes__value'> ${currentRatesList[key].Value}</p>
        <p class='valutes__details valutes__difference'> ${currentRatesList[key].ID}</p>
        </div>
        `;
  }
}
