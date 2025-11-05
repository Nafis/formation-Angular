console.log('Start app!');

function fcsAsyncPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('FCS Async Promise resolved!');
        }, 3000);
    });
}

fcsAsyncPromise().then((message) => {
    //si appel de resolve
    console.log("OK " + message);
}).catch(() => {
    //si appel de reject
    console.log("NOT OK");
});

console.log('End app!');