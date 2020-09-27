
let arr=[2,3,4,5,6,7,8,9];

let anotherarr=[2,4,6,9];

function squarer(x){
    return x*x;
}
Array.prototype.mymap = function(cb){
    let newarr=[];
    for(let i =0;i<this.length;i++){
        let ans  = cb(this[i]);
        newarr.push(ans);
    }
    return newarr;
}

let sqarr = arr.mymap(squarer);
console.log(sqarr);
let anothersqarr = anotherarr.mymap(squarer);
console.log(anothersqarr);