let number=20;
for(let div=2;div*div<=number;div++){
    if(number%div==0){
        console.log("number is not prime");
        return;
    }
}
console.log("number is prime");