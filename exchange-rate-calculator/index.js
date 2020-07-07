const currency1 = document.getElementById("currency-one");
const currency2 = document.getElementById("currency-two");
const input1 = document.getElementById("amount-one");
const input2 = document.getElementById("amount-two");
const swapButton = document.getElementById("swapbutton");
const rateSpan = document.getElementById("rate");
let rate = 0;

const updateRate = () => {
  const cur1 = currency1.value;
  const cur2 = currency2.value;
  //   console.log("Dit is het: " + cur1, cur2);
  rateSpan.innerHTML = `1 ${cur1} = ${rate} ${cur2}`;
  const calculation = input1.value * rate;
  input2.value = calculation;
};

const setExchangeRates = () => {
  const currencyOne = currency1.value;
  const currencyTwo = currency2.value;

  getExchangeRates(currencyOne).then((result) => {
    const rates = result.rates;
    // console.log(rates);
    // console.log(currencyOne);
    // console.log(currencyTwo);

    const rateToUse = rates[currencyTwo];
    // console.log(rateToUse);
    rate = rateToUse;
    updateRate();
  });
};

const swapCurrencies = () => {
  const currency1Value = currency1.value;
  const currency2Value = currency2.value;
  currency2.value = currency1Value;
  currency1.value = currency2Value;
  setExchangeRates(currency1.value, currency2.value);
};

// Event listeners
swapButton.addEventListener("click", swapCurrencies);

currency1.addEventListener("change", setExchangeRates);
currency2.addEventListener("change", setExchangeRates);

input1.addEventListener("change", updateRate);
input1.addEventListener("input", updateRate);

setExchangeRates(currency1.value, currency2.value);
