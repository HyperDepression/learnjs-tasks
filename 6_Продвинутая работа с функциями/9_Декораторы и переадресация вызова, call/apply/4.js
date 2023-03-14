function f(a) {
    console.log(a)
}
function throttle(func, timeout) {
    let busy = false, cur = null
    return function wrapper(x) {
        if (busy) {
            cur = x
            return
        }

        busy = true
        func.call(this, x)
        setTimeout(() => {
            busy = false
            if (cur) {
                func.call(this, cur)
                cur = null
            }
        }, timeout)
    }
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли выводим 3