function normalfunction(){
    console.log(this)
}
const Arrowfunction=()=>{
    console.log(this)
}
const obj={
    normalfxnmethod:normalfunction,
    arrowfxnmethod:Arrowfunction
}
obj.normalfxnmethod()
obj.arrowfxnmethod()

// features                     regular                           function arrow
// 1.this               depends on how the function is called  lexically inherited
//2. new                        new context                     doesn't craete new context
// 3. constructor               can be used                      caannot be used
// 4. hoisting              can be hoisted                        cannot be hoisted
                        //note:expressional can nnot be hoisted