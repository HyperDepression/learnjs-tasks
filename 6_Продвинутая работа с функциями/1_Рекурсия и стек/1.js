function sumToFor(n) {
    let res = 0
    for (let i = 1; i <= n; i++) res += i
    return res
}
function sumToRec(n) {
    if (n == 1) return 1
    return sumToRec(n - 1) + n
}
function sumToProg(n) {
    return n * (n + 1) / 2
}

console.log(sumToFor(100))
console.log(sumToRec(100))
console.log(sumToProg(100))