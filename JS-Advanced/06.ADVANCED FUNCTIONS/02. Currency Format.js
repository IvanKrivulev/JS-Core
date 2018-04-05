function currencyFormat(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

function getDollarFormatter(formatCurrency) {
    return function dollarFormatter(value) {
        return formatCurrency(',', '$', true, value);
    }
}

function getEuroFormatter(formatCurrency) {
    return function euroFormatter(value) {
        return formatCurrency(',', '€', false, value);
    }
}

let dollars = getDollarFormatter(currencyFormat);
let euro = getEuroFormatter(currencyFormat);
console.log(euro(100));
console.log(dollars(500));