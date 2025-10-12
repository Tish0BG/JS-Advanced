class Hex {
    value;

    constructor(value) {
        this.value = value;
    };

    valueOf() {
        return this.value;
    };

    toString() {
        return "0x" + this.value.toString(16).toUpperCase();
    };

    plus(number) {
        return new Hex(this.value + Number(number));
    };

    minus(number) {
        return new Hex(this.value - Number(number));
    };

    parse(string) {
        return parseInt(string, 16);
    };
}

let FF = new Hex(255);
let actual = FF.toString();
let expected = "0xFF";
assert.equal(actual,expected);
assert.equal(FF.valueOf() + 1 , 256);
let a = new Hex(10);
let b = new Hex(5);
let act = a.plus(b).toString();
let exp = "0xF";
assert.equal(act,exp);
