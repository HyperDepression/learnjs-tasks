function multiplyNumeric(ob) {
    for (i in ob) {
        if (typeof ob[i] == 'number') ob[i] = ob[i] * 2
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}

multiplyNumeric(menu)
console.log(menu)