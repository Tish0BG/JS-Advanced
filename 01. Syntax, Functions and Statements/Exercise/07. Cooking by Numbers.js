function solve(argument, ...params) {
    let number = Number(argument);

    let operations = {
        'chop': (num) => num / 2,
        'dice': (num) => Math.sqrt(num),
        'spice': (num) => num + 1,
        'bake': (num) => num * 3,
        'fillet': (num) => num * 0.8
    }

    for (let action of params) {
        number = operations[action](number);
        console.log(number); 
    }
}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')