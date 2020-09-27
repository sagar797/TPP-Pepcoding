// let fs = require("fs");
// console.log("Started Executing file");
// console.log("Cpu is stuck till file is read");
// code stuck =>nodejs => async 
// control flow => async functions 
// function cb(err,data){
//   // console.log(data.byteLength);
//   console.log("printed file")
// }
// fs.readFile("../f2.txt",cb);



//using AsyncAwait
let fs = require("fs");
console.log("Started Executing file");
console.log("Cpu is stuck till file is read");

(async function () {
  try {
    let val = await fs.promises.readFile("../f1.txt");
    console.log(val+"")
  } catch (err) {
    console.log(err);
  }

})()


// binary => array
console.log("cpu is free now");
console.log("Now i can print something")