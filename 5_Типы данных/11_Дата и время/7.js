function getSecondsToTomorrow() {
    let tomorrow = new Date(cur.getFullYear(), cur.getMonth(), cur.getDate() + 1)
    let cur = new Date()
    return Math.floor((tomorrow - cur) / 1000)
}

console.log(getSecondsToTomorrow())