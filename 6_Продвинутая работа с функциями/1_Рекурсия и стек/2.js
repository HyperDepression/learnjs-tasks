function factorial(n) {
    return n == 1 ? 1 : factorial(n - 1) * n
}

for (let i = 1; i < 10; i++) console.log(factorial(i))