console.log("Hello Shivani ")
//const x = 5
var  x = 5
console.log(x)
x = "Sairaj"
console.log(x) 


abc = function  (res){
    console.log("Inside ABC. Result ="+res)
}
function add(x , y , displayResult){
    displayResult(x+y)
    //return x+y
}
let result = add(2,3,abc)
console.log("Result = "+result)