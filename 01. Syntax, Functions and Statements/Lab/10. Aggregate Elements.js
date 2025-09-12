function solve(array) {

    let sumOne = 0;
    let sumTwo = 0;
    let concat = '';

    for (let num of array) {
        sumOne += num;
        sumTwo += 1 / num;
        concat += num;
    }

    console.log(sumOne);
    console.log(sumTwo);
    console.log(concat);
}
solve([1, 2, 3])