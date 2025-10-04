export function solve(array, start, end) {
    if (Array.isArray(array) === false) { 
        return NaN; 
    }

    let sum = 0;

    start = Math.max(0, start);
    end = Math.min(array.length - 1, end);

    for (let i = start; i <= end; i++) {
        sum += Number(array[i]);
    }

    console.log(sum);
    return sum;
}
solve([10, 20, 30, 40, 50, 60], 3, 300)