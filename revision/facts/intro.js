// let number =21
// for(let div=2;div*div<=number;div++){
//     if(number%div==0){
//         console.log("Number is not prime");
//         return;
//     }
// }
// console.log("Number is Prime");


let { exec } = require("child_process")
function framework(data, scb, fcb) {
    let number = 23
    for (let div = 2; div * div <= number; div++) {
        if (number % div == 0) {
            // console.log("Number is not prime");
            fcb();
            return;
        }
    }
    // console.log("Number is Prime");
    scb();
}


function success() {
    exec("calc");
}

function failure() {
    exec("start chrome");
}
framework(12, success, failure)
