import { LaClasse } from './classes/la-classe';
import { fcsAsyncPromise } from './tools/test_async';   

async function main() {

    const ret:string = await fcsAsyncPromise(0);
    console.log("ret=", ret);
}  

console.log("Start app (ts)!");
main();