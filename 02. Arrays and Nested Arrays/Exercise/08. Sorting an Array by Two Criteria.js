function solve(array) {

    array.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    })
    array.forEach(e => console.log(e));
}
solve(['alpha',

'beta',

'gamma'])