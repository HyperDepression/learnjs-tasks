let n = 10

for (let i = 2; i <= n; i++){
    let flag = true

    for (let j = 2; j <= Math.sqrt(i); j++)
        if (i % j == 0){
            flag = false
            continue
        }
    if (flag) console.log(i)
}