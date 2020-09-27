let fs = require("fs");
console.log("hi")
let finaltime = Date.now() + 1000*50;
while (Date.now() < finaltime) {
    fs.readFile("f1.txt", function (err, data) {
        console.log("i m 1st")
    })
    console.log("in while loop")
    break;
}
fs.readFile("f2.txt", function (err, data) {
    console.log("i m 2nd")
})
fs.readFile("f3.txt", function (err, data) {
    console.log("i m 3rd")
})
fs.readFile("f4.txt", function (err, data) {
    console.log("i m 4th")
})
console.log("bye")