function solve(name, population, treasury) {
    const city = {};

    city.name = name;
    city.population = population;
    city.treasury = treasury;
    city.taxRate = 10;

    city.collectTaxes = function () {
        this.treasury += Math.floor(this.population * this.taxRate);
    };
    city.applyGrowth = function (percent) {
        this.population += Math.floor(this.population * percent / 100);
    };
    city.applyRecession = function (percent) {
        this.treasury -= Math.ceil(this.treasury * percent / 100);
    };

    return city;
}

{
    const city = solve('Tortuga', 7000, 15000);
    console.log(city);
}