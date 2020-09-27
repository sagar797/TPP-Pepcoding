// server 
const{exec} = require("child_process");

function takerequest(data,success,failure){
    if(data%2==0){
        success();
    }else{
        failure();
    }
}

//client
function success(){
    console.log("your request was completed");
    exec("calc");
}

function failure(){
    console.log("your request was not completed");
    exec("start chrome www.facebook.com");
    }

takerequest(17,success,failure);

takerequest(18,success,failure);