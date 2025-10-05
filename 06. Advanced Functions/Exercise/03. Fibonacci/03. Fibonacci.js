function getFibonator() {
    let previous = 0;
    let current = 1;

    return function fib() {
        let next = previous + current;
        previous = current;
        current = next;
        return previous;
    }
}
