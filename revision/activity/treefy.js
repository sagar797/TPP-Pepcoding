let fs = require("fs");
let path = require("path");
function treefy(src,dest,node){
    if(node.isfile==true){
        //filecopy
        let srcPath=path.join(src,node.oldname);
        let destPath=path.join(dest,node.newname);
        fs.copyFileSync(srcPath,destPath)
    }else{
        let dirPath=path.join(dest,node.name);
        fs.mkdirSync(dirPath);
        //children
        let children=node.children;
        for(let i=0;i<children.length;i++){
            let child=children[i];
            let pPath=dirPath;
            treefy(src,pPath,child);
        }
    }
}

let src=process.argv[2];
let dest=process.argv[3];
let root=require(path.join(src,"metadata.json"));
console.log(root);
treefy(src,dest,root);