function power(n,exponent){
let product = 0
for(i =0 ; i < n ; i++){

    product+=n
}
console.log(product)
}
function recursivePower(n,exponent){
if(exponent == 0){
    return 1;
}else{
    return n*recursivePower(n,exponent-1)
}

}


console.log(recursivePower(2,8))