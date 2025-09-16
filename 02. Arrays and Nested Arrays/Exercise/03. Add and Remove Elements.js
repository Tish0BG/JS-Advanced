function solve(array) {
    let index = 1;
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let command = array[i];

        if (command === 'add') {
            result.push(index);
            index++;
        } else {
            result.pop();
            index++;
        }
    }

    if (result.length === 0) {
        console.log('Empty');
    } else {
        result.forEach(n => console.log(n));
    }
}
solve(['add', 'add', 'remove', 'add', 'add'])