function solve(name, population, treasure) {
    let object = {
        'name': name,
        'population': population,
        'treasury': treasure
    };
    return object;
}
console.log(solve(`Tortuga`, 7000, 15000));