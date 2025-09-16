function solve(array) {

    let filtered = array.filter((e, i) => i % 2 === 1).map(e => e * 2);;
    filtered.reverse();
    console.log(filtered.join(' '));
}
solve([10, 15, 20, 25])