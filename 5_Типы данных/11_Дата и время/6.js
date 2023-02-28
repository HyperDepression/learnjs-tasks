function getSecondsToday() {
    let cur = new Date()
    let date = new Date(cur.getFullYear(), cur.getMonth(), cur.getDate())
    return Math.floor((cur - date) / 1000)
}

console.log(getSecondsToday())