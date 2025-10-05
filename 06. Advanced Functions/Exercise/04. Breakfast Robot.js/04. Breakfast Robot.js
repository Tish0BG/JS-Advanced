function result() {
    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    return function manager(input) {
        let [command, item, qtyStr] = input.split(" ");
        let quantity = Number(qtyStr);

        if (command === "restock") {
            stock[item] += quantity;
            return "Success";
        }

        if (command === "prepare") {
            let recipe = recipes[item];

            for (let el in recipe) {
                if (stock[el] < recipe[el] * quantity) {
                    return `Error: not enough ${el} in stock`;
                }
            }

            for (let el in recipe) {
                stock[el] -= recipe[el] * quantity;
            }

            return "Success";
        }

        if (command === "report") {
            return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
        }
    };
}

let manager = solution();
console.log (manager ("restock flavour 50"));
console.log (manager ("prepare apple 1"));

result = result();

var expectationPairs = [
    ['restock carbohydrate 10', 'Success'],
    ['restock flavour 10', 'Success'],
    ['prepare apple 1', 'Success'],
    ['restock fat 10', 'Success'],
    ['prepare burger 1', 'Success'],
    ['report', 'protein=0 carbohydrate=4 fat=3 flavour=5']
];

for (let i = 0; i < expectationPairs.length; i++) {
    let expectation = expectationPairs[i];
    expect(result(expectation[0])).to.equal(expectation[1], `Order ${expectation[0]} should have resulted in ${expectation[1]}`);
}