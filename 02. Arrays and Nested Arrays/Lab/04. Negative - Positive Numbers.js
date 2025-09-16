function solve(data) {

    let result = [];
    for (let element of data) {
        if (element < 0) {
            result.unshift(element);
        } else {
            result.push(element);
        }
    }

    for (let element of result) {
        console.log(element);
    }
}
solve([7,-2, 8, 9]);