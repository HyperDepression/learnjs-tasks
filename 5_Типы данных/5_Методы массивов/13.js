function groupById(array) {
    return array.reduce((res, elem) => {
        res[elem.id] = elem
        return res
    }, {})
}

let users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users)
for (let elem in usersById) {
    console.log(`\n ${elem}`)
    console.log(usersById[elem])    
}