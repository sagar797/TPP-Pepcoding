let fs=require("fs");

function promisify(path){
    let creatorPromise=new Promise(function(success,failure){
        fs.readFile(path,function(err,data){
            if(err){
                failure(err);
            }else{
                success(data)
            }
        })
    })

    return creatorPromise
}

let fileWillBeReadPromise=promisify("f1.txt")

fileWillBeReadPromise.then(function(data){
    console.log(data+"")
})

fileWillBeReadPromise.catch(function(err){
    console.log(err)
})