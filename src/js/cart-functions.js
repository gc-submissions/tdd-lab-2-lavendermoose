function calculateChange( total, payment) {
    let change = payment - total;
    return +change.toFixed(2);
}

function isSufficientPayment(total, payment) {
    return payment >= total;
}

function calculateTotal(itemsArray) {
    let sum = 0;
    for (let item of itemsArray) {
        sum = sum + item.price;
    }
    return +sum.toFixed(2);
}

module.exports = {calculateChange, isSufficientPayment, calculateTotal};