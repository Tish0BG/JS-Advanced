function solve(string) {
    let array = JSON.parse(string);

    function escapeHtml(value) {
        return value
            .toString()
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    let result = ['<table>'];

    result.push('  <tr>' + Object.keys(array[0]).map(k => `<th>${escapeHtml(k)}</th>`).join('') + '</tr>');

    for (let obj of array) {
        let row = '  <tr>' + Object.values(obj).map(v => `<td>${escapeHtml(v)}</td>`).join('') + '</tr>';
        result.push(row);
    }

    result.push('</table>');

    console.log(result.join('\n'));
}

solve(`[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]`);

