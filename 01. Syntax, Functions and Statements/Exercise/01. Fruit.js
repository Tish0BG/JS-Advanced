function fruit(string, grams, price) {

    let kilograms = grams / 1000;
    let sum = kilograms * price;

    console.log(`I need $${sum.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${string}.`);
}
fruit('orange', 2500, 1.80)