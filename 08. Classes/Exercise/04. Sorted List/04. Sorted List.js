class List {
    array;
    size;

    constructor () {
        this.array = [];
        this.size = 0;
    };

    add(element) {
        this.array.push(element);
        this.array.sort((a, b) => a - b);
        this.size = this.array.length;
    };

    remove(index) {
        if (index < 0 || index > this.array.length) {
            throw new Error("Invalid index");
        }
        this.array.splice(index, 1);
        this.size = this.array.length;
    };

    get(index) {
        if (index < 0 || index > this.array.length) {
            throw new Error("Invalid index");
        }
        return this.array[index];
    };
}

let list = new List();

list.add(5);

list.add(6);

list.add(7);

console.log(list.get(1));

list.remove(1);

console.log(list.get(1));