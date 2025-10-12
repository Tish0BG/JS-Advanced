function solve(array) {
    const juices = new Map();
    const bottles = new Map();

    for (let line of array) {
        let [juice, quantity] = line.split(" => ");
        quantity = Number(quantity);


        let current = juices.get(juice) || 0;
        current += quantity;
        juices.set(juice, current);


        if (current >= 1000) {
            let count = Math.floor(current / 1000);

            if (!bottles.has(juice)) {
                bottles.set(juice, 0);
            }
            bottles.set(juice, bottles.get(juice) + count);

            juices.set(juice, current % 1000);
        }
    }

    for (let [juice, count] of bottles.entries()) {
        console.log(`${juice} => ${count}`);
    }
}

solve([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);