function solve(array) {
    let output = '';

    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            output += array[i];
            output += ' ';
        }
    }
    console.log(output);
}
solve(['20', '30', '40', '50'])