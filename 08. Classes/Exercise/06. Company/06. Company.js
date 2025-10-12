class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (name === '' || name == null ||
            position === '' || position == null ||
            department === '' || department == null ||
            salary == null || salary === '') {
            throw new Error("Invalid input!");
        }

        if (Number(salary) < 0) {
            throw new Error("Invalid input!");
        }

        salary = Number(salary);

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = {
                sumSalary: 0,
                avg: 0,
                employee: []
            };
        }

        this.departments[department].employee.push({ name, salary, position });
        this._updateDepartmentInfo(department, salary);

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        const best = this._getBestDepartment();
        if (!best) return '';

        const [departmentName, departmentInfo] = best;

        const lines = [
            `Best Department is: ${departmentName}`,
            `Average salary: ${departmentInfo.avg.toFixed(2)}`
        ];

        departmentInfo.employee
            .slice()
            .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
            .forEach(e => lines.push(`${e.name} ${e.salary} ${e.position}`));

        return lines.join('\n');
    }

    _updateDepartmentInfo(department, salary) {
        const d = this.departments[department];
        d.sumSalary += salary;
        d.avg = d.sumSalary / d.employee.length;
    }

    _getBestDepartment() {
        const entries = Object.entries(this.departments);
        if (entries.length === 0) return null;

        entries.sort(([, a], [, b]) => b.avg - a.avg);
        return entries[0];
    }
}