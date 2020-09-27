let fs=require("fs");
let path=require("path");

function chechPathIsDirectory(src){
    let ans=fs.lstatSync(src).isFile();
    return ans;
}

function childrenReader(src){
    let childrens=fs.readdirSync(src);
    return childrens;
}

function viewAsFlatfiles(src){
    let isFile=chechPathIsDirectory(src);
    if(isFile==true){
        console.log(src+"*");
    }else{
        console.log(src);
        let childrens=childrenReader(src);
        for(let i=0;i<childrens.length;i++){
            let child=childrens[i];
            let childPath=path.join(src,child);
            viewAsFlatfiles(childPath);
        }
    }
}


function viewAsTree(src,indent){
    let isFile=chechPathIsDirectory(src);
    if(isFile==true){
        console.log(indent+path.basename(src)+"*");
    }else{
        console.log(indent+path.basename(src));
        let childrens=childrenReader(src);
        for(let i=0;i<childrens.length;i++){
            let child=childrens[i];
            let childPath=path.join(src,child);
            viewAsTree(childPath,indent+"\t");
        }
    }
}

viewAsTree(process.argv[2],"");
// viewAsFlatfiles(process.argv[2]);