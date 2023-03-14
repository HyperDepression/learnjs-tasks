function printListIter(list) {
    let temp = list
    while (temp) {
        console.log(temp.value)
        temp = temp.next
    }
}
function printListRec(list) {
    console.log(list.value)
    if (list.next) {
        printListRec(list.next)
    }
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
};
printListIter(list)
console.log('')
printListRec(list)