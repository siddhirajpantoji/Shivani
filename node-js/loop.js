// for( let i =0 ; i<10;i++){
//     setTimeout(function(){
//         console.log(i)
//     },1000)
// }

function callback(){
    console.log("inside Callback")
}
function abc(){
    console.log("Inside ABC")    
    setTimeout(callback, 1000);
}
console.log("Before Function")
abc()
console.log("After Function")