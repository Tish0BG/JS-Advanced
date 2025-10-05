function solve(array) {
    let processor = (function () {
        let list = [];

        return {
            add: (str) => list.push(str),
            remove: (str) => list = list.filter(x => x !== str),
            print: () => console.log(list.join(',')),
        };
    })();

    for (let command of array) {
        let [action, arg] = command.split(' ');
        processor[action](arg);
    }
}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])