let fs=require("fs")
console.log("before")
console.log("after")
let fileWillBeReadPromise=fs.promises.readFile("f1.html")
// console.log(fileWillBeReadPromise)
fileWillBeReadPromise.then(function(content){
    console.log(content+"")
    // console.log(fileWillBeReadPromise)
    console.log("finish")
})

fileWillBeReadPromise.catch(function(err){ 
    console.log(err)
})

console.log("Its time to run")