//synchronus
let fs=require("fs");
console.log("before");
console.log(fs.readFileSync("./name.html")+"");
console.log("after");

console.log("###########");

//Asynchronus
// let fs=require("fs");
console.log("before");
//work start
let Async=fs.readFile("name.html",function(err,Async){
    console.log(Async+"")
});
//move on
console.log("after");