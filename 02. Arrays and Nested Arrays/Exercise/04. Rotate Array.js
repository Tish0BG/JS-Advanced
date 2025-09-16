function solve(array, rotations) {

    for (let i = 0; i < rotations; i++) {
        let last = array.pop();
        array.unshift(last);
    }

    console.log(array.join(' '));
}
solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15)