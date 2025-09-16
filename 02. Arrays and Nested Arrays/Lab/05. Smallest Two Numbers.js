function solve(array) {

    let sortedArray = array.sort((a, b) => a - b);
    let firstElement = sortedArray[0];
    let secondElement = sortedArray[1];

    console.log(firstElement, secondElement);
}
solve([30, 15, 50, 5]);