function generateReport() {
    const inputs = document.querySelectorAll("thead input");
    const rows = document.querySelectorAll('tbody tr');

    const result = [];

    for (let row of rows) {
        const obj = {};
        const cells = row.querySelectorAll('td');

        for (let i = 0; i < cells.length; i++) {
            if (inputs[i].checked) {
                const key = inputs[i].name;
                const value = cells[i].textContent;
                obj[key] = value;
            }
        }

        result.push(obj);
    }

    document.getElementById('output').value = JSON.stringify(result, null, 2);
}
