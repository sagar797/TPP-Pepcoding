let arr = [4, 14, 17, 23, 48, 66]

/*
function fn(el)
{
    if(el%2===0)
    {
        return true;
    }
    else{
        return false;
    }
}


function mymap(arr,fn){
    let val2=[];
    for(let i=0;i<arr.length;i++){
        let b=fn(arr[i]);
        if(b===true)
        val2.push(arr[i]);
    }
    return val2;
}

let res = mymap(arr,fn);
console.log(res);
*/


Array.prototype.mymap=function(cb){
    let narr=[];
    for(let i=0;i<this.length;i++){
        narr.push(cb(this[i]));
    }
    return narr;
}

function small(elem){
    if(elem%2==0){
        return elem+1;
    }else{
        return elem-1;
    }
}

let tarr=arr.mymap(small);
console.log(tarr);
