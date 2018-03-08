class SmartCalculator {
    constructor(initialValue) {
        this.operandsAndOperators = [initialValue]
    }

    add(number) {
        this.operandsAndOperators.push('+');
        this.operandsAndOperators.push(number);
        return this;
    }

    subtract(number) {
        this.operandsAndOperators.push('-');
        this.operandsAndOperators.push(number);
        return this;
    }

    multiply(number) {
        this.operandsAndOperators.push('*');
        this.operandsAndOperators.push(number);
        ;
        return this;
    }

    devide(number) {
        this.operandsAndOperators.push('/');
        this.operandsAndOperators.push(number);
        return this;
    }

    pow(number) {
        this.operandsAndOperators.push('^');
        this.operandsAndOperators.push(number);
        return this;
    }

    valueOf() {
        let result;
        for (let j = this.operandsAndOperators.length - 2; j > 0; j--) {
            if (this.operandsAndOperators[j] === '^') {
                result = Math.pow(this.operandsAndOperators[j - 1], this.operandsAndOperators[j + 1]);
                this.operandsAndOperators.splice(j - 1, 3, result);
                j += 2;
            }
        }
        let operators = ['/', '*', '-', '+'];
        for (let i = 0; i < operators.length; i++) {
            for (let j = 0; j < this.operandsAndOperators.length - 1; j++) {
                if (operators[i] === this.operandsAndOperators[j]) {
                    switch (operators[i]) {
                        case'/':
                            result = this.operandsAndOperators[j - 1] / this.operandsAndOperators[j + 1];
                            break;
                        case'*':
                            result = this.operandsAndOperators[j - 1] * this.operandsAndOperators[j + 1];
                            break;
                        case'-':
                            result = this.operandsAndOperators[j - 1] - this.operandsAndOperators[j + 1];
                            break;
                        case'+':
                            result = this.operandsAndOperators[j - 1] + this.operandsAndOperators[j + 1];
                            console.log(result);
                            break;
                    }
                    this.operandsAndOperators.splice(j - 1, 3, result);
                    j = 0;
                }
            }
        }
        return this.operandsAndOperators[0];
    }
};
module.exports = SmartCalculator;
