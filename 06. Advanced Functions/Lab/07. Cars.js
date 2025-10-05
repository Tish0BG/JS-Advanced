function result(commands) {
    let processor = (function () {
        let objects = {};

        function getAllProperties(obj) {
            let props = [];
            for (let key of Object.keys(obj)) {
                props.push(`${key}:${obj[key]}`);
            }
            let proto = Object.getPrototypeOf(obj);
            if (proto && proto !== Object.prototype) {
                props = props.concat(getAllProperties(proto));
            }
            return props;
        }

        return {
            create: (name, inheritKeyword, parentName) => {
                if (inheritKeyword === 'inherit' || inheritKeyword === 'inherits') {
                    objects[name] = Object.create(objects[parentName]);
                } else {
                    objects[name] = {};
                }
            },
            set: (name, key, value) => {
                objects[name][key] = value;
            },
            print: (name) => {
                let props = getAllProperties(objects[name]);
                console.log(props.join(','));
            }
        };
    })();

    for (let command of commands) {
        let parts = command.split(' ');
        let action = parts[0];

        if (action === 'create') {
            processor.create(parts[1], parts[2], parts[3]);
        } else if (action === 'set') {
            processor.set(parts[1], parts[2], parts[3]);
        } else if (action === 'print') {
            processor.print(parts[1]);
        }
    }
}

solve(['create c1',

'create c2 inherit c1',

'set c1 color red',

'set c2 model new',

'print c1',

'print c2'])