function delay(ms) {
    return new Promise((res, rej) => setTimeout(() => res(), ms))
}

delay(3000).then(() => console.log('выполнилось через 3 секунды'));