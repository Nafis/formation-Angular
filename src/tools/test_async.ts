export function fcsAsyncPromise(param: number): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            if (param === 0) {
                resolve('OH mY GOD! Time out');
            } else {
                reject('Error occurred');
            }
        }, 3000);
    });
}
