function camelize(str){
    str = str.split('-')
    return str.map((elem, index) => index != 0 ? elem[0].toUpperCase() + elem.slice(1) : elem).join('')
}

console.log(camelize("background-color"))
console.log(camelize("list-style-image"))
console.log(camelize("-webkit-transition"))