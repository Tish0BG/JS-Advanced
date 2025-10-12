function solution() {
    class Employee {
        constructor(name, age) {
            if (new.target === Employee) {
                throw new Error("Cannot instantiate abstract class Employee directly.");
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
            this._currentTaskIndex = 0;
        }

        work() {
            const currentTask = this.tasks[this._currentTaskIndex];
            
            console.log(this.name + currentTask);

            this._currentTaskIndex = (this._currentTaskIndex + 1) % this.tasks.length;
        }

        getSalary() {
            return this.salary;
        }

        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`);
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [
                ' is working on a simple task.'
            ];
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [
                ' is working on a complicated task.',
                ' is taking time off work.',
                ' is supervising junior workers.'
            ];
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            
            this.tasks = [
                ' scheduled a meeting.',
                ' is preparing a quarterly report.',
            ];
        }

        getSalary() {
            return this.salary + this.dividend;
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    };
}