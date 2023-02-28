function getMaxSubSum(arr) {
    let cur = 0, res = 0
    for (i of arr) {
        if (i >= 0) cur += i
        else {
            res = (cur > res) ? cur : cur
            cur = 0
        }
    }
    return res
}

console.log(getMaxSubSum([-1, 2, 3, -9]))