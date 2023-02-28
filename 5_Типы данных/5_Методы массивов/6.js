function Calculator() {
    this.ops = new Map()
        .set('+', (a, b) => a + b)
        .set('-', (a, b) => a - b)
    this.calculate = (str) => {
        let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2]
        
        if (isNaN(a) || isNaN(b)) return NaN
        for (let cur_op of this.ops) {
            if (op == cur_op[0]) return cur_op[1](a, b)
        }
        return NaN
    }
    this.addMethod = (str, func) => this.ops.set(str, func)
}

let calc = new Calculator
console.log(calc.calculate('3 + 7'))

calc.addMethod('*', (a, b) => a * b)
calc.addMethod('/', (a, b) => a / b)
calc.addMethod('**', (a, b) => a ** b)

console.log(calc.calculate('2 * 3'))
console.log(calc.calculate('2 / 3'))
console.log(calc.calculate('2 ** 3'))