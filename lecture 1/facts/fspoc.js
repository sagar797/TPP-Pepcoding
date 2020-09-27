// let fs= require("fs");
// let path = require("path");
// function displaylist(src){
//     let ans =fs.lstatSync(src).isDirectory();
//     if(ans== false){
//         console.log(src +"*");
//     }else{
//         console.log(src);
//         let children=fs.readdirSync(src);
//         for(let i=0;i<children.length;i++){
//             let chpath = path.join(src,children[i]);
//             displaylist(chpath);
//         }   
//      }

// }
// displaylist(".//src");


let fs= require("fs");
let path = require("path");
function displaytree(indent,src){
    let ans =fs.lstatSync(src).isDirectory();
    if(ans== false){
        console.log(indent +path.basename(src) +"*");
    }else{
        console.log(indent+path.basename(src));
        let children=fs.readdirSync(src);
        for(let i=0;i<children.length;i++){
            let chpath = path.join(src,children[i]);
            displaytree(indent + "\t" ,chpath);
        }   
     }

}
displaytree("",".//src");