// function hosting
// named function
// anonymous function
// expressional function
// arrow function
// anonymous arrow function
// expressional arrow function
// function constructor
// function expression
// functoin declaration
// immediately invoked functional expressions
// function expression with arguments

// function definition
// functon calling
// function declaration or prototype of the function

// prototype=> function name and its properties like how many arguments are been taken by the function

// function abc(){
//     console.log("hello peter")

// }
// abc()
// function sum(a,b){
//     let s=a+b;
//     console.log(`The sum of ${a} and ${b} is ${s}`)

// }
// sum(2,4)

// const sum=function (a,b){
//     let s=a+b;
//     console.log(`The sum of ${a} and ${b} is ${s}`)

// }
// sum(2,4)

// const sum=function (a,... nums){
//     // let s=a+b;
//     console.log(nums)
//     for(let i of nums ){
//         console.log(i)
//     }

// }
// sum(2,4,3,6,1,9)


const sum=(a,... nums)=>{
    // let s=a+b;
    console.log(nums)
    for(let i of nums ){
        console.log(i)
    }

}
sum(2,4,3,6,1,9)




