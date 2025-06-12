// Объект с курсами валют
const exchangeRates = {
  USD: {
    RUB: 79.99,
    EUR: 0.88,
    BTC: 0.000042,
    KZT: 0.002,
    PEPE: 0.000001,
    DOGE: 0.0001,
  },
  EUR: {
    RUB: 89.76,
    USD: 1.14,
    BTC: 0.000047,
    KZT: 0.0023,
    PEPE: 0.0000011,
    DOGE: 0.00012,
  },
  BTC: {
    RUB: 8577352.0,
    USD: 107981.0,
    EUR: 0.021,
    KZT: 0.00029,
    PEPE: 0.000000014,
    DOGE: 0.00000015,
  },
  RUB: {
    USD: 0.013,
    EUR: 0.011,
    BTC: 0.000014,
    KZT: 0.0019,
    PEPE: 0.000000012,
    DOGE: 0.0000012,
  },
  KZT: {
    RUB: 510.05,
    USD: 0.002,
    EUR: 0.00088,
    BTC: 0.0000034,
    PEPE: 0.000000002,
    DOGE: 0.00000025,
  },
  PEPE: {
    RUB: 1000000,
    USD: 0.000001,
    EUR: 0.0000009,
    BTC: 0.000000000014,
    KZT: 0.000000002,
    DOGE: 10000000,
  },
  DOGE: {
    RUB: 8333.33,
    USD: 0.00012,
    EUR: 0.0001,
    BTC: 0.00000015,
    KZT: 0.00000025,
    PEPE: 10000000,
  },
};






// Функция для конвертации валют
function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;

  //проверка на адекватность пользователя
  if (isNaN(amount) || amount <= 0) {
    alert("Пожалуйста, введите корректную сумму для конвертации.");
    return;
  }

  const rate = exchangeRates[fromCurrency][toCurrency];
  const convertedAmount = (amount * rate).toFixed(2);

  document.getElementById("convertedAmount").value = convertedAmount;
}

// Функция для смены валют (стрелочка синяя)
function swapCurrencies() {
  const fromCurrencySelect = document.getElementById("fromCurrency");
  const toCurrencySelect = document.getElementById("toCurrency");
  const amountInput = document.getElementById("amount");
  const convertedAmountInput = document.getElementById("convertedAmount");

  // Сохраняем текущее значение валют
  const tempFromCurrency = fromCurrencySelect.value;
  const tempToCurrency = toCurrencySelect.value;

  // Меняем местами валюты
  fromCurrencySelect.value = tempToCurrency;
  toCurrencySelect.value = tempFromCurrency;

  // Обновляем сумму
  convertCurrency();
}

// Добавляем обработчики событий после загрузки DOM
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".btn-meme")
    .addEventListener("click", convertCurrency);
  document
    .querySelector(".exchange-icon")
    .addEventListener("click", swapCurrencies);
});

 
