function solve (array) {

    const result = {};

    for (let i = 0; i < array.length; i += 2) {
        let food = array[i];
        let calories = Number(array[i + 1]);
        result[food] = calories;
    }

    console.log(result);
}
solve(['Yoghurt', '48', 'Rise', '138',

'Apple', '52']);