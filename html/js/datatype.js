// let x = 5
// let y = 10
//  console.log(x+y)
//  x = "5"
//  y = "10"
//  console.log(x+y)
//  x= {
//      "name":"Shivani"
//  }
//  console.log(x)
//  let lastName = 5
//  let lastname = "5.6666"
//  console.log("abac "+ " akjsdhgjkas")
//  console.log(lastName + lastname)
 
// let x = 5 
// let y = "5"
// if(x===y){
//     console.log("True")
// }
// else{
//     console.log("False")
// }

var x = parseInt("5.5")
console.log(x)
var y = Number("5.5")
console.log(y)
console.log(x+y)
let name = "Shivani"
let surname = "Eranjikal\"s"
console.log('Jimmy\'s Corner')
console.log(name+surname)
let jsonObj = {
    "name":"Shivani",
    "age":10,
    "dateOfBirth":Date("1997-03-08"),
    "address":{
        "flat":"003",
        "pincode":"401107"
    },
    "calcaulateAge":function(){
        console.log(this.age)
    },
    "orderHistory":[
        {
            "timestamp":"",
            "status":""
        },
        {
            "timestamp":"",
            "status":""
        },
        {
            "timestamp":"",
            "status":""
        }
    ]
}
console.log(jsonObj)
//jsonObj.calcaulateAge()
// if( x ){
//     console.log("True Found ")
// }
// else{
//     console.log("False Found ")
// }
// console.log(typeof(x))
// console.log( x instanceof Number)