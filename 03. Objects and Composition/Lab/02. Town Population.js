function solve(input) {

    const result = {};

    for (let line of input) {
        let tokens = line.split(' <-> ');
        let townName = tokens[0];
        let population = Number(tokens[1]);

        if (result.hasOwnProperty(townName)) {
            result[townName] += population;
        } else {
            result[townName] = population;
        }
    }

    for (let town in result) {
        console.log(`${town} : ${result[town]}`);
    }

}
solve(['Sofia <-> 1200000',

'Montana <-> 20000',

'New York <-> 10000000',

'Washington <-> 2345000',

'Las Vegas <-> 1000000'])