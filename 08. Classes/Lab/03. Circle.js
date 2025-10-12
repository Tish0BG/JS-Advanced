class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        this._radius = value;
    }

    get diameter() {
        return this._radius * 2;
    }

    set diameter(value) {
        this._radius = value / 2;
    }

    get area() {
        return Math.PI * this._radius ** 2;
    }
}

let c = new result(2);
expect(c.radius).to.equal(2, "Object's radius wasn't properly initialized.");
expect(c.diameter).to.equal(4, "Object's diameter wasn't properly initialized.");
expect(c.area.toFixed(3)).to.equal('12.566', "Object's area wasn't calculated correctly.");