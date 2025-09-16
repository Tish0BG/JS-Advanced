function solve(arrays) {

    let biggest = -Infinity;

    for (let array of arrays) {
        for (let num of array) {
            if (num > biggest) {
                biggest = num;
            }
        }
    }
    return biggest
}
solve([[20, 50, 10], [8, 33, 145]]);