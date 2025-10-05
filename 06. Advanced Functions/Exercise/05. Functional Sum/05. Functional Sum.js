function add(number) {
    let state = 0;

    sum(number);
    function sum(number) {
        state += number;
        return sum;
    }
    sum.toString = () => state;
    return sum;
}

console.log(add(5)(10)(15).toString());