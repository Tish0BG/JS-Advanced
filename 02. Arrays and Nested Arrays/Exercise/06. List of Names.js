function solve(array) {
    array.sort((a, b) => a.localeCompare(b));
    array.forEach((t, i) => {
        console.log(`${i + 1}.${t}`);
    })
}
solve(["John",

"Bob",

"Christina",

"Ema"])