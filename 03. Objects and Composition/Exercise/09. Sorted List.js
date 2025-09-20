function createSortedList () {
    return {
        numbers: [],
        size: 0,


        add: function (element) {
            if (typeof element !== 'number') {
                return;
            }
            this.numbers.push(element);
            this.numbers.sort((a, b) => a - b);
            this.size = this.numbers.length;
        },
        remove: function (index) {
            if (index >= 0 && index < this.numbers.length) {
                this.numbers.splice(index, 1);
                this.size = this.numbers.length;
            }
        },
        get: function (index) {
            if (index >= 0 && index < this.numbers.length) {
                return this.numbers[index];
            }
        }
    }
}

{
   let list = createSortedList();

list.add(5);

list.add(6);

list.add(7);

console.log(list.get(1));

list.remove(1);

console.log(list.get(1)); 
}