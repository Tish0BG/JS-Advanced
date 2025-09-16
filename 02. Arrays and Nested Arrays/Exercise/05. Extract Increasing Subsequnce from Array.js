function solve(array) {

    let result = [];
    let currentBig = 0;

    for (let element of array) {
        if (element >= currentBig) {
            currentBig = element;
            result.push(currentBig)
        }
    }
    return result;
}
solve([1,

3,

8,

4,

10,

12,

3,

2,

24])