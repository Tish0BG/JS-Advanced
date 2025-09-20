function solve (array) {

    let result = [];

    for (let i = 1; i < array.length; i++) {

        let line = array[i];
        line = line.split('|').map(x => x.trim()).filter(x => x !== '');

        let [town, latitude, longitude] = line
        latitude = +Number(latitude).toFixed(2);
        longitude = +Number(longitude).toFixed(2);

        result.push({ 'Town': town, 'Latitude': latitude, 'Longitude': longitude });
    }

    console.log(JSON.stringify(result));
}
solve (['| Town | Latitude | Longitude |',

'| Sofia | 42.696552 | 23.32601 |',

'| Beijing | 39.913818 | 116.363625 |']);