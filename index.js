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


const ret1 = await fcsAsyncPromise();
console.log("ret1 = " + ret1);  
const ret2 = await fcsAsyncPromise();
console.log("ret2 = " + ret2);

console.log('End app!');