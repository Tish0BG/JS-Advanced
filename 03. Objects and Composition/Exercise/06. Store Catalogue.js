function solve (array) {
    const store = {};

    for (let line of array) {
        let [item, price] = line.split(' : ');
        let firstCharacter = item[0];

        if (!store.hasOwnProperty(firstCharacter)) {
            store[firstCharacter] = [];
        }
        
        store[firstCharacter].push({ item, price: Number(price) });
    }

    const keys = Object.keys(store).sort((a, b) => a.localeCompare(b));

    for (let key of keys) {
        const productGroup = store[key];
        console.log(key);
        productGroup
            .sort((a, b) => a.item.localeCompare(b.item))
            .forEach(i => console.log(`  ${i.item}: ${i.price}`));
    }
}
solve(['Appricot : 20.4',

'Fridge : 1500',

'TV : 1499',

'Deodorant : 10',

'Boiler : 300',

'Apple : 1.25',

'Anti-Bug Spray : 15',

'T-Shirt : 10']);