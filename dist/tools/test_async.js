"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fcsAsyncPromise = fcsAsyncPromise;
function fcsAsyncPromise(param) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (param === 0) {
                resolve('OH mY GOD! Time out');
            }
            else {
                reject('Error occurred');
            }
        }, 3000);
    });
}
//# sourceMappingURL=test_async.js.map