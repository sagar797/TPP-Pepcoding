let fs = require("fs");
let path = require("path");
let uniqid = require("uniqid");
module.exports.untreefy = function () {
    console.log("untreefy command has been Called");
    let src = arguments[0];
    let dest = arguments[1];
    let root = {};

    untreefyFolder(src, dest, root);
    console.log(root);
    fs.writeFileSync(path.join(dest, "metadata.json"), JSON.stringify(root))
    console.log("All files have been copied")
};

function untreefyFolder(src, dest, node) {
    let ans = fs.lstatSync(src).isDirectory();
    if (ans == false) {
        let uniqueName = uniqid();
        node.isfile = true;
        node.name = path.basename(src);
        //copy file from src to dest=> and rename them
        fs.copyFileSync(src, path.join(dest, uniqueName));
    } else {
        node.isfile = false;
        node.name = path.basename(src);
        node.children = [];
        let childrens = fs.readdirSync(src);

        // console.log(childrens);
        for (let i = 0; i < childrens.length; i++) {
            let cobj = {};

            let cChPath = path.join(src, childrens[i]);
            untreefyFolder(cChPath, dest, cobj);
            node.children.push(cobj);

        }
    }
}
