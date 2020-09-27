let newarr = [2,3,4,5];
// map takes an array and function as argumentfunction 
function mymap(arr,mapFunc) 
{  
      let mapArr = []; // empty array        // loop though array    
    for(let i=0;i<arr.length;i++) 
    { 
        const result = mapFunc(arr[i]);    
        mapArr.push(result);   
     } 
        return mapArr;
}

function square(num)
{
    return num*num;
}

function isprime(num)
{let i;
    for(i = 2;i*i<=num;i++)
    {
        if(num%i==0)
        {
            return;
        }
        
    }if(i*i>num)
    {return num;}
}
function checkarr(arr1)
{
    const mapArr1 = []; // empty array        // loop though array    
    for(let j=0;j<arr1.length;j++) 
    { 
        const result = isprime(arr1[j]);    
        mapArr1.push(result);   
     } 
     return mapArr1;
    }
let myarr = mymap(newarr,square);
let ans= checkarr(newarr);
console.log(ans);