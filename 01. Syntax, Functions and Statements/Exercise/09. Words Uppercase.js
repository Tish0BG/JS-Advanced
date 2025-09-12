function solve(string) {
    let worArr = string.split(/[\W]+/);
    let resultArr = worArr.filter(x => x !== '');
    console.log(resultArr.join(', ').toUpperCase());
}
solve('Hi, how are you?')