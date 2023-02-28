function aclean(arr) {
    res = new Map
    for (elem of arr){
        anag = elem.toLowerCase().split('').sort().join()
        res.set(anag, elem)
    }
    return Array.from(res.values())
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr))