function solve() {

    function convertToUnit(valueInCm, targetUnits) {
        if (targetUnits === 'm') {
            return valueInCm / 100;
        } else if (targetUnits === 'mm') {
            return valueInCm * 10;
        }
        return valueInCm;
    }

    class Figure {
        constructor() {
            this.units = 'cm';
        }

        get area() {
            return 0;
        }

        changeUnits(newUnits) {
            this.units = newUnits;
        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this._radiusInCm = radius;
        }

        get radius() {
            return convertToUnit(this._radiusInCm, this.units);
        }

        get area() {
            let areaInCm2 = Math.PI * this._radiusInCm * this._radiusInCm;
            
            if (this.units === 'm') {
                return areaInCm2 / 10000;
            } else if (this.units === 'mm') {
                return areaInCm2 * 100;
            }
            return areaInCm2;
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super();
            this._widthInCm = width;
            this._heightInCm = height;

            if (units) {
                this.units = units;
            }
        }

        get width() {
            return convertToUnit(this._widthInCm, this.units);
        }

        get height() {
            return convertToUnit(this._heightInCm, this.units);
        }

        get area() {
            let areaInCm2 = this._widthInCm * this._heightInCm;

            if (this.units === 'm') {
                return areaInCm2 / 10000;
            } else if (this.units === 'mm') {
                return areaInCm2 * 100;
            }
            return areaInCm2;
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    };
}