function unique(arr) {
    let res = []
    for (elem of arr) {
        if (!res.includes(elem)) {
            res.push(elem);
        }
    }
    return res
}
let strings = ['кришна', 'кришна', 'харе', 'харе',
    'харе', 'харе', 'кришна', 'кришна', ':-O'
];

console.log(unique(strings))