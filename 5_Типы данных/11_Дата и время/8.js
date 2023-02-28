function formatDate(date) {
    let cur_diff = new Date - date
    if (cur_diff < 1000) return 'прямо сейчас'

    cur_diff = Math.floor(cur_diff / 1000)
    if (cur_diff < 60) return `${cur_diff} сек. назад`

    cur_diff = Math.floor(cur_diff / 60)
    if (cur_diff < 60) return `${cur_diff} мин. назад`

    let res = date.toLocaleString().slice(0, -3).split(',')
    res[0] = res[0].split('.').map(elem => elem.slice(-2)).join('.')
    return res.join('')
}

console.log(formatDate(new Date(Date.now() - 1)))

console.log(formatDate(new Date(Date.now() - 30 * 1000)))

console.log(formatDate(new Date(Date.now() - 5 * 60 * 1000)))

console.log(formatDate(new Date(Date.now() - 86400 * 1000)))