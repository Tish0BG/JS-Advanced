function solve(array) {

    array.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < Math.ceil(array.length / 2); i++) {
        let lastIndex = array.length - 1;
        result.push(array[i]);

        if (array.length % 2 !== 0) {
            if (i !== Math.ceil(array.length / 2) - 1) {
                result.push(array[lastIndex - i]);
            }
        } else {
            result.push(array[lastIndex - i]);
        }
    }

    return result;
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);