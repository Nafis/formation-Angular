"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_async_1 = require("./tools/test_async");
async function main() {
    const ret = await (0, test_async_1.fcsAsyncPromise)(0);
    console.log("ret=", ret);
}
console.log("Start app (ts)!");
main();
//# sourceMappingURL=main.js.map