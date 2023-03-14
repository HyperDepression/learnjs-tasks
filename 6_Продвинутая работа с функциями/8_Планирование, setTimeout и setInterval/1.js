function PrintNumbersInterval(from, to) {
    let cur = from
    let inter = setInterval(() => {
        console.log(cur)
        if (cur == to) clearInterval(inter)
        cur++
    }, 1000)
}
function PrintNumbersTimeout(from, to) {
    let cur = from
    setTimeout(function next() {
        console.log(cur)
        if (cur < to) setTimeout(next, 1000)
        cur++
    }, 1000)
}

PrintNumbersInterval(1, 10)
PrintNumbersTimeout(1, 10)