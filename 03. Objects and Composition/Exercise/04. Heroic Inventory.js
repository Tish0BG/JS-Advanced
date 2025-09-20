function solve (array) {

    let result = [];

    for (const line of array) {
        if (!line.trim()) { continue };

        let [name, level, items] = line.split(' / ');
        level = Number(level);

        items = items ? items.split(', ') : [];
        result.push({ name, level, items });
    }

    console.log(JSON.stringify(result));
}
solve (['Isacc / 25 / Apple, GravityGun',

'Derek / 12 / BarrelVest, DestructionSword',

'Hes / 1 / Desolator, Sentinel, Antara']);