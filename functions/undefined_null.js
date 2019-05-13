// Following will return 'undefined'
// let name
// console.log(name)

// Undefined for variables
let name
name = 'Piggy'
if (name === undefined) {
    console.log('Name is required')
} else {
    console.log(name)
}

// Undefined for function arguments
let square = function (num) {  // expecting an input value
    console.log(num)           // will return undefined
}

square() // called with argument missing

let square2 = function (num) {
    console.log(num)  // no return value specified
}

let result = square2(3)
console.log(result) // will be undefined as return value not provided

// Using null to clear a variables assigned value
let age = 27
age = null
console.log(age) // will print null
