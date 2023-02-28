function getLastDayOfMonth(year, month) {
    let date = new Date(year, month)
    date.setDate(date.getDate() - 1)
    return date.getDate()
}

console.log(getLastDayOfMonth(2012, 1))