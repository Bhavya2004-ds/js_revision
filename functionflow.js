function sum(){
    console.log("6")
    console.log("7")

}

function main(){
    setTimeout(()=>{
        console.log("1")
    console.log("2")
    console.log("3")
    sum()
    console.log("4")
    console.log("5")

    },5000)
    
}

console.log("a")
console.log("b")
console.log("c")
main();
console.log("d")
console.log("e")
