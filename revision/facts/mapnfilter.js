let arr = [4, 14, 17, 23, 48, 66]
function prime(number) {
    for (let div = 2; div * div <= number; div++) {
        if (number % div == 0) {
            return;
        }
    }
    return number
}

function check(x) {
    if (x % 2 == 0) {
        return x + 1;
    } else {
        return x - 1;
    }
}

//map
let map1 = arr.map(check);

//even+1
//odd-1
//filter

let res = map1.filter(prime)

//filterprimenumbers
console.log(res)