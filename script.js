const exchangeRates = {
    "CAD": 1.4748680356,
    "EUR": 1,
    "USD": 1.0747024339
};

function convert() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const fromAmount = parseFloat(document.getElementById('fromAmount').value);

    const exchangeRate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
    const convertedAmount = (fromAmount * exchangeRate).toFixed(2);
    document.getElementById('toAmount').value = convertedAmount;
}