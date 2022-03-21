
let abc = 5
console.log(typeof (abc))

let student = {
    "name": "Shivani",
    "age": 25
}
console.log(typeof (student))
console.log(student.name)
console.log(student["age"])
class Student {

    constructor(name, age) {
        this.name = name
        this.aayu = age
    }
}

let stu1 = new Student("Sidd", 32)
console.log(typeof (stu1))
console.log(stu1.name)
stu1["aayu"] = 18
console.log(stu1.aayu)
console.log("count = %d", 5)


let arr = [
    {
        "name": "Siddhiraj",
        "age": 32
    },
    {
        "name": "Sairaj",
        "age": 30
    },
    {
        "name": "Shivani",
        "age": 25
    }
]

let elementToremove = {
    "name": "Siddhiraj",
    "age": 32
}
var indexOfElement = arr.indexOf(elementToremove)
console.log(indexOfElement)
let newArray = arr
if (indexOfElement > 0) {
    newArray = arr.splice(indexOfElement,1)
    console.log("Element removed ")
}
else{
    console.log("No change in Array ")
}
console.log(newArray)