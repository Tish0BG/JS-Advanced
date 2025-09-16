function solve(array) {

    array.sort((a, b) => a - b);
    let middle = Math.floor(array.length / 2);
    let output = [];
    
    for (let i = middle; i < array.length; i++) {
        output.push(array[i]);
    }

    return output;
}
solve([4, 7, 2, 5]);
solve([3, 19, 14, 7, 2, 19, 6]);