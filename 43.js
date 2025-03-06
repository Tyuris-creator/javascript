const promise = new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    setTimeout(() => {
        if(randomNumber < .6) {
            resolve('ok');
        } else {
            reject('smth wrong');
        }
    }, 2000);
})