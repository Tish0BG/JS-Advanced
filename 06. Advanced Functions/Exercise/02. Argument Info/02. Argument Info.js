function argumentInfo(...args) {
    const result = {};

    for (let element of args) {
        let type = typeof element;
        console.log(`${type}: ${element}`);

        if (!result.hasOwnProperty(type)) {
            result[type] = 0;
        }

        result[type] += 1;
    }

    Object.entries(result)
    .sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA)
    .forEach(([type, value]) => console.log(`${type} = ${value}`))
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); })