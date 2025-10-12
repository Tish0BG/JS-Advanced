function carRegister(array) {

    const register = new Map();

    for (let line of array) {
        let [brand, model, carsCount] = line.split(" | ");
        carsCount = Number(carsCount);
        

        if (!register.has(brand)) {
            register.set(brand, new Map());

            register.get(brand).set(model, carsCount);
            continue;
        }

        let models = register.get(brand);

        if (!models.has(model)) {
            register.get(brand).set(model, carsCount);
        } else {
            let currentNumber = register.get(brand).get(model);
            register.get(brand).set(model, currentNumber + carsCount);
        }

    }

    for (let [key, values] of register.entries()) {
        console.log(key);
        for (let value of values) {
            let key = value[0];
            let count = value[1];
            console.log(`###${key} -> ${count}`);
        }
    }
}

carRegister(['Audi | Q7 | 1000',

'Audi | Q6 | 100',

'BMW | X5 | 1000',

'BMW | X6 | 100',

'Citroen | C4 | 123',

'Volga | GAZ-24 | 1000000',

'Lada | Niva | 1000000',

'Lada | Jigula | 1000000',

'Citroen | C4 | 22',

'Citroen | C5 | 10'])