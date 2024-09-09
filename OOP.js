class Calculator {
    constructor() {
        this.result = 0; 
    }

    add(number) {
        this.result += number;
        return this.result;
    }

    subtract(number) {
        this.result -= number;
        return this.result;
    }

    multiply(number) {
        this.result *= number;
        return this.result;
    }

    divide(number) {
        if (number === 0) {
            console.error('Error: Division by zero is not allowed.');
            return null;  
        }
        this.result /= number;
        return this.result;
    }

    reset() {
        this.result = 0;
        return this.result;
    }

    getResult() {
        return this.result;
    }
}

const calculator = new Calculator();

console.log('Initial result:', calculator.getResult());

console.log('Add 10:', calculator.add(10));
console.log('Subtract 4:', calculator.subtract(4));
console.log('Multiply by 3:', calculator.multiply(3));
console.log('Divide by 2:', calculator.divide(2));

const divisionByZero = calculator.divide(0);
if (divisionByZero === null) {
    console.log('Division by zero operation was not successful.');
}

console.log('Reset result:', calculator.reset());