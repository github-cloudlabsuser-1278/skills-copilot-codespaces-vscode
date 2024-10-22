class Calculator {
    constructor() {
        this.currentValue = 0;
    }

    add(value) {
        this.currentValue += value;
        return this.currentValue;
    }

    subtract(value) {
        this.currentValue -= value;
        return this.currentValue;
    }

    multiply(value) {
        this.currentValue *= value;
        return this.currentValue;
    }

    divide(value) {
        if (value === 0) {
            throw new Error("Cannot divide by zero");
        }
        this.currentValue /= value;
        return this.currentValue;
    }

    clear() {
        this.currentValue = 0;
        return this.currentValue;
    }

    getCurrentValue() {
        return this.currentValue;
    }
}

// Example usage
const calculator = new Calculator();

console.log("Initial value:", calculator.getCurrentValue());

console.log("Add 5:", calculator.add(5));
console.log("Subtract 2:", calculator.subtract(2));
console.log("Multiply by 3:", calculator.multiply(3));
console.log("Divide by 2:", calculator.divide(2));

console.log("Clear:", calculator.clear());
console.log("Final value:", calculator.getCurrentValue());