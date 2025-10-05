function solve() {
    let string = "";

    return {
        append,
        removeStart,
        removeEnd,
        print
    };

    function append(value) {
        string += value;
    }

    function removeStart(n) {
        string = string.slice(n);
    }

    function removeEnd(n) {
        string = string.slice(0, -n);
    }
    
    function print() {
        console.log(string);
    }
}