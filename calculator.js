function sum(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function mul(a,b){
    return a*b
}
function div(a,b){
    return a/b
}


function calculator(a,b,operation){

    return operation(a,b)
}

console.log(calculator(90,5,sum))

console.log(calculator(90,5,sub))
console.log(calculator(90,5,mul))
console.log(calculator(90,5,div))