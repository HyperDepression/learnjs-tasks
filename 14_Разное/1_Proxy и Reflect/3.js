function makeObservable(target) {

    target.observe = function (handler) {
        target.handler = handler
    }

    return new Proxy(target, {
        set(target, property, value, receiver) {
            if (Reflect.set(target, property, value, receiver)) target.handler(property, value)
        }
    })
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
    console.log(`SET ${key} = ${value}`);
});

user.name = "John";// выводит: SET name=John

console.log(user.name)