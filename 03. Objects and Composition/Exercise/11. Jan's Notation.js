function solve (array) {

    let stack = [];

    const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '%': (a, b) => a % b
    }

    for (let line of array) {
        if (typeof line === 'number') {
            stack.push(line);
        } else {
            if (stack.length >= 2) {
                let b = stack.pop();
                let a = stack.pop();
                let result = operators[line](a, b);
                stack.push(result);
            } else {
                console.log(`Error: not enough operands!`);
                return;
            }
        }
    }

    if (stack.length === 1) {
        console.log(stack[0]);
    } else {
        console.log(`Error: too many operands!`);
    }

}
solve([5,

3,

4,

'*',

'-'])