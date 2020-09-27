let fs=require("fs");
let path=require("path");
module.exports.view = function(){
    //console.log("View fn hs been called");
    let src=arguments[0];
    let mode=arguments[1];

    if(mode=="-t"){
        viewAstree("",src);


    }
    else if(mode=="-f"){
        viewAsFlatfiles(src);
    }
    else{
        console.log("wrong prameters");
    }



};
function viewAstree(indent,src){
    //console.log("view as tree is working");
    let ans=fs.lstatSync(src).isDirectory();
    if(ans==false){
        console.log(indent+path.basename(src)+"*");
    }
    else{
        console.log(indent +path.basename(src));
        let childrens=fs.readdirSync(src);
        for(let i=0;i<childrens.length;i++){
            let cChpath=path.join(src,childrens[i]);
            
            viewAstree(indent +"\t", cChpath);
        }
        

    }    


}
function viewAsFlatfiles(src){
    //console.log("view as flatfile is working");

    let ans=fs.lstatSync(src).isDirectory();
    if(ans==false){
        console.log(src+"*");
    }
    else{
        console.log(src);
        let childrens=fs.readdirSync(src);
        for(let i=0;i<childrens.length;i++){
            let cChpath=path.join(src,childrens[i]);
            
            viewAsFlatfiles(cChpath);
        }
        

        
}
}