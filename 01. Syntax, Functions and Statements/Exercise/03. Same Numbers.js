function sameNumbers(number) {

    let numAsString = number.toString();
    let result = 0;
    let firtsNumber = numAsString[0];
    let isSame = true;

    for (let i = 0; i < numAsString.length; i++) {
        if (isSame) {
            if (firtsNumber !== numAsString[i]) {
            isSame = false;
            }
        }
        result += Number(numAsString[i]);
    }

    console.log(isSame);
    console.log(result);
}
sameNumbers(2222222)