function filterRange(arr, a, b) {
    return arr.filter(elem => (elem >= a && elem <= b))
}

let arr = [5, 3, 8, 1]

console.log(filterRange(arr, 1, 4))
console.log(arr)