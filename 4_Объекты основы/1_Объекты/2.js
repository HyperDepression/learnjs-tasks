function isEmpty(ob){
    for (i in ob) return true
    return false
}

let schedule = {}

console.log(isEmpty(schedule))

schedule["8:30"] = "get up"

console.log(isEmpty(schedule))