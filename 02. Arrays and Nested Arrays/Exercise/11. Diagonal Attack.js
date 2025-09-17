function solve(matrix) {
    let numsMatrix = matrix.map(row => row.split(' ').map(Number));
    let n = numsMatrix.length;

    let diagonalOne = 0;
    let diagonalTwo = 0;

    for (let i = 0; i < n; i++) {
        diagonalOne += numsMatrix[i][i];
        diagonalTwo += numsMatrix[i][n - 1 - i];
    }

    if (diagonalOne === diagonalTwo) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i !== j && i + j !== n - 1) {
                    numsMatrix[i][j] = diagonalOne;
                }
            }
        }
    }

    for (let row of numsMatrix) {
        console.log(row.join(' '));
    }
}
solve(['5 3 12 3 1',

'11 4 23 2 5',

'101 12 3 21 10',

'1 4 5 2 2',

'5 22 33 11 1']);