function solve(params) {
    let [width, height, starX, starY] = params;

    let matrix = [];

    for (let row = 0; row < height; row++) {
        let currentRow = [];

        for (let col = 0; col < width; col++) {
            const value = Math.max(Math.abs(row - starX), Math.abs(col - starY)) + 1;
            currentRow.push(value);
        }
        matrix.push(currentRow);
    }
    matrix.forEach(row => console.log(row.join(' ')));
}
solve([3, 3, 2, 2])