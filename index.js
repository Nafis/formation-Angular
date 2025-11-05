console.log('Start app!');

function fcsAsyncPromise(param) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (param === 0) {
                resolve('OH mY GOD! Time out');
            } else {
                reject('Error occurred');
            }
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

try{
    const ret = await fcsAsyncPromise(0);
    console.log("ret = " + ret);  
}
catch(es){
    console.log(es);
}



try{
    const ret = await fcsAsyncPromise(10);
    console.log("ret = " + ret);  
}
catch(ez){
    console.log(ez);
}

console.log('End app!');