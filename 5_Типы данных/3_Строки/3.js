function truncate(str, maxlength) {
    return (str.length > maxlength) ?
    str = str.substr(0, maxlength - 1) + '…'
    : str
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))