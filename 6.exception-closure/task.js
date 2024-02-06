function parseCount(item) {
	let number = Number.parseFloat(item);
	if (Number.isNaN(number)) {
		throw new Error("Невалидное значение");
	}
	return number;
}

function validateCount(item) {
	try {
		let number = parseCount(item);
		return number;
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(a, b, c) {
		if (a + b <= c || a + c <= b || b + c <= a) {
			throw new Error("Треугольник с такими сторонами не существует");
		}

		this._a = a;
		this._b = b;
		this._c = c;
	}

	get perimeter() {
		return this._a + this._b + this._c;
	}

	get area() {
		let p = this.perimeter / 2;
		return +Math.sqrt(p * (p - this._a) * (p - this._b) * (p - this._c)).toFixed(3);
	}
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        console.error(error.message);
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
        };
    }
}
	