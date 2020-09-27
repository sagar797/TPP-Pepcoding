// let cmd = process.argv[2];
// console.log(process.argv)
// switch(cmd){
//     case "view":
//         console.log("view command called plox");
//         break;
//         case "untreefy":
//         console.log("untreefy command called plox");
//         break;
//         case "treefy":
//         console.log("treefy command called plox");
//         break;
//         case "monitor":
//         console.log("monitor command called plox");
//         break;
//         case "help":
//         console.log("help command called plox");
//         break;
//         default:
//             console.log("wrong command");
// }







let cmd = process.argv[2];
let viewfile = require("./view")
let helpfile = require("./help")
let monitorfile = require("./monitor")
let treefyfile = require("./treefy")
let untreefyfile = require("./untreefy")

switch(cmd){
    case "view":
        viewfile.view(process.argv[3],process.argv[4])
        break
    case "untreefy":
        untreefyfile.untreefy(process.argv[3],process.argv[4])
        break
    case "treefy":
        treefyfile.treefy(process.argv[3],process.argv[4])
        break
    case "monitor":
        monitorfile.monitor()
        break
    case "help":
        helpfile.help()
        break
    default:
        console.log("wrong command");
}




