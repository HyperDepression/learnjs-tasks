function printListIter(list) {
    let arr = [], temp = list

    while (temp) {
        arr.push(temp.value)
        temp = temp.next
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i])
    }
}
function printListRec(list) {
    if (list.next) {
        printListRec(list.next)
    }
    console.log(list.value)
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}
printListIter(list)
console.log('')
printListRec(list)