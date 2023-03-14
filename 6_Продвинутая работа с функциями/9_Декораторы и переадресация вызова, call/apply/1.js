function work(a, b) {
    console.log(a + b)
}

function spy(func) {
    function wrapper(x, y) {
        wrapper.calls.push([x, y])
        return func(x, y)
    }
    wrapper.calls = []
    return wrapper
}
work = spy(work)

work(1, 2)
work(4, 5)

for (let args of work.calls) {
    console.log('call:' + args.join())
}