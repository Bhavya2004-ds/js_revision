// function purchasecake(callback){
//     setTimeout(   ()=>{
//         console.log("cake purchased")
    
//     },2000)
//     callback()
    
// }
// function curtaindec(callback){
//     setTimeout(   ()=>{
//         console.log("curtain down")
    
//     },2000)
//     callback()
    
// }function balloons(callback){
//     setTimeout(   ()=>{
//         console.log("balloons released")
    
//     },2000)
//     callback()
    
// }
// function cakecutting(){
//     setTimeout(   ()=>{
//         console.log("cake cutting")
    
//     },2000)
    
// }
 


//callbackhell

// console.log("Happy Birthday:1")
// console.log("Happy Birthday:2")
// console.log("Happy Birthday:3")
// purchasecake()
// console.log("Happy Birthday:4")
// console.log("Happy Birthday:5")
// curtaindec()
// console.log("Happy Birthday:6")
// balloons()
// console.log("Happy Birthday:7")
// console.log("Happy Birthday:8")
// cakecutting()
// console.log("Happy Birthday:9")
// console.log("Happy Birthday:10")


// purchasecake(()=>{
//     curtaindec(()=>{
//         balloons(()=>{
//             cakecutting()
//         })
//     })
// })


function purchasecake(){
    return new Promise((resolve,reject)=>{
        setTimeout(   ()=>{
            console.log("cake purchased")
            resolve()
        },2000)
    })}

    
function curtaindec(){
    return new Promise((resolve,reject)=>{
        setTimeout(   ()=>{
            console.log("curtain down")
            resolve()
        },2000)
    })}

    function balloons(){
        return new Promise((resolve,reject)=>{
            setTimeout(   ()=>{
                console.log("balloons released")
            resolve()
            },2000)
        })}
        function cakecutting(){
            return new Promise((resolve,reject)=>{

                setTimeout(   ()=>{
                    console.log("cake cutting")
                    reject()
                
                },2000)
                
        
                
            })}
    
       
    



purchasecake()
.then(()=>curtaindec())
.then(()=>balloons())
.then(()=>cakecutting())
.catch((e)=>console.log(e))
.finally(()=>console.log("Happily ended!!"))
