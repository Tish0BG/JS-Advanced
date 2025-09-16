function solve(array) {

    let main = 0;
    let second = 0;

    for (let i = 0; i < array.length; i++) {
        main += array[i][i];
        second += array[i][array.length - 1 - i];
    }

    console.log(`${main} ${second}`);

}
solve([[20, 40], [10, 60]])