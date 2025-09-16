function solve(matrix) {

    for (let i = 0; i < matrix.length - 1; i++) {
        let sumRowOne = 0;
        let sumRowTwo = 0;
        let sumColOne = 0;
        let sumColTwo = 0;

        matrix[i].forEach(e => sumRowOne += e);
        matrix[i + 1].forEach(e => sumRowTwo += e);
        matrix.forEach(row => sumColOne += row[i]);
        matrix.forEach(row => sumColTwo += row[i + 1]);

        if (sumRowOne !== sumRowTwo || sumColOne !== sumColTwo) {
            return false;
        } 
    }
    return true;
}
solve([[4, 5, 6],

[6, 5, 4],

[5, 5, 5]])