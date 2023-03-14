function fib(n) {
    if (n < 2) return 1
    return n < 2 ? 1 : fib(n - 2) + fib(n - 1)
}

for (let i = 1; i < 10; i++) console.log(fib(i))