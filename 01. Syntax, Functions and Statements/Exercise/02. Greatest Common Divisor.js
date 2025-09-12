function gcd(numOne, numTwo) {
    let gcd = numOne % numTwo;

    while (gcd !== 0) {
        numOne = numTwo;
        numTwo = gcd;
        gcd = numOne % numTwo;
    }

    console.log(numTwo);
}
gcd(2154, 458)