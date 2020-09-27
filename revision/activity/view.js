module.exports.view = function(){
    //console.log("View fn hs been called");
    let src=arguments[0];
    let mode=arguments[1];

    if(mode=="-t"){
        viewAsTree(src,"");


    }
    else if(mode=="-f"){
        viewAsFlatfiles(src,path.basename(src));
    }
    else{
        console.log("wrong prameters");
    }
}

let fs=require("fs");
let path=require("path");

function chechPathIsFile(src){
    let ans=fs.lstatSync(src).isFile();
    return ans;
}

function childrenReader(src){
    let childrens=fs.readdirSync(src);
    return childrens;
}

function viewAsFlatfiles(src,toprint){
    let isFile=chechPathIsFile(src);
    if(isFile==true){
        console.log(toprint +"*");
    }else{
        console.log(toprint);
        let childrens=childrenReader(src);
        for(let i=0;i<childrens.length;i++){
            let child=childrens[i];
            let childPath=path.join(src,child);
            viewAsFlatfiles(childPath,path.join(toprint,child));
        }
    }
}


function viewAsTree(src,indent){
    let isFile=chechPathIsFile(src);
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