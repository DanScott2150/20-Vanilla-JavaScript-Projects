const currencyEl_1 = document.getElementById('currency-one');
const currencyEl_2 = document.getElementById('currency-two');

const amountEl_1 = document.getElementById('amount-one');
const amountEl_2 = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function calculate() {
  const currency_one = currencyEl_1.value;
  const currency_two = currencyEl_2.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
      const rate = data.rates[currency_two];
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`
      amountEl_2.value = (amountEl_1.value * rate).toFixed(2);
    })
}




// Event Listeners
currencyEl_1.addEventListener('change', calculate);
currencyEl_2.addEventListener('change', calculate);
amountEl_1.addEventListener('input', calculate);
amountEl_2.addEventListener('input', calculate);
swap.addEventListener('click', () => {
  const temp = currencyEl_1.value;
  currencyEl_1.value = currencyEl_2.value;
  currencyEl_2.value = temp;
  calculate();
})

calculate();