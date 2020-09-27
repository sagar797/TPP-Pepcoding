let cmd = process.argv[2];
let viewfile = require("./view.js")
// let treefyfile = require("./treefy")
// let untreefyfile = require("./untreefy")

switch(cmd){
    case "view":
        viewfile.view(process.argv[3],process.argv[4])
        break;
    // case "untreefy":
        // untreefyfile.untreefy(process.argv[3],process.argv[4])
        // break;
    // case "treefy":
        // treefyfile.treefy(process.argv[3],process.argv[4])
        // break;
    default:
        console.log("wrong command");
}