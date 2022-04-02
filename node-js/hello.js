console.log("Hello Shivani ")
//const x = 5
var x = 5
console.log(x)
x = "Sairaj"
console.log(x)


//abc =
function add(x, y, displayResult) {
    console.log(x)
    console.log(y)
    console.log(displayResult)
    // {{price*qty}}
    let result = x + y
    displayResult(result)
    //return x+y
}
let result = add(2, 3, function (res) {
    console.log("Inside ABC. Result =" + res)
})
console.log("Result = " + result)