console.log("Shree Ganeshaya Namah")

let displayResult = function (result) {
    console.log("Insid Display result ")
    console.log("Displaying Result " + result)
}

let abc = function (naachBasanti) {
    console.log("Siddhiraj")
    naachBasanti("Sidd")
}

let result = abc(displayResult)
console.log(result)
displayResult(result)

let items = []

let singleObj = {
    "name": "Halwa",
    "qty": 2
}
items.push(singleObj)
console.log(items)
