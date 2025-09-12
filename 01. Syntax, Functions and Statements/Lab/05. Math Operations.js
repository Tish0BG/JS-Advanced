function solve(num1, num2, operator) {

    let operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '%': (a, b) => a % b,
        '**': (a, b) => a ** b
    }

    console.log(operators[operator](num1, num2));
}
solve(5, 6, '+')