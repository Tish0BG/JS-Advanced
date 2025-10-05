function solution(number) {
    return function add(gn) {
        return number + gn;
    }
}

{
    let add5 = solution(5);
    console.log(add5(2));
    console.log(add5(3));
}