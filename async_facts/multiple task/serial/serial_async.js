// f1 => f2 => f3
let fs = require("fs");
console.log("Before ");
//  callback nesting
// callback hell 
// fs.readFile("../../f1.txt", function (err, data) {
//   console.log("F1's Data " + data.length);
//   fs.readFile("../../f2.txt", function (err, data) {
//     console.log("F2's Data" + data.length);
//     fs.readFile("../../f3.txt", function (err, data) {
//       console.log("F3's Data" + data.length)
//     })
//   })
// })


// fs.readFile("../../f1.txt", f1cb);
// function f1cb(err, data) {
//   console.log("F1's Data " + data.length);
//   fs.readFile("../../f2.txt", f2cb);
// }
// function f2cb(err, data) {
//   console.log("F2's Data" + data.length);
//   fs.readFile("../../f3.txt", f3cb)
// }
// function f3cb(err, data) {
//   console.log("F3's Data" + data.length)
// }

(async function(){
  try{
    let f1data=await fs.promises.readFile("../../f1.txt");
    console.log(f1data+"  file 1")
    let f2data=await fs.promises.readFile("..z/../f2.txt");
    console.log(f2data+"  file 2")
    let f3data=await fs.promises.readFile("../../f3.txt");
    console.log(f3data+"  file 3")
  }catch(err){
    console.log(err)
  }
})()

console.log("After");