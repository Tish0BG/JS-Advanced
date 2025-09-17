function generateSpiralMatrix(rows, cols) {
    const matrix = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

    let top = 0;
    let bottom = rows - 1;
    let left = 0;
    let right = cols - 1;
    let currentNumber = 1;

    while (top <= bottom && left <= right) {
        
        for (let i = left; i <= right; i++) {
            matrix[top][i] = currentNumber++;
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = currentNumber++;
        }
        right--;

        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                matrix[bottom][i] = currentNumber++;
            }
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                matrix[i][left] = currentNumber++;
            }
            left++;
        }
    }

    matrix.forEach(row => console.log(row.join(' ')));
}
generateSpiralMatrix(5, 5)