function solve(area, vol, jsonData) {
    const data = JSON.parse(jsonData);

    const result = [];
    
    for (let entry of data) {
        const obj = {
            area: area.call(entry),
            volume: vol.call(entry)
        };

        result.push(obj);
    }

    return result;
}

function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}