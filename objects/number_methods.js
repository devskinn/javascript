let num = 103.941

// toFixed Method - sets number of decimal places
console.log(num.toFixed(2)) // prints out 103.94

// Math Methods
console.log(Math.round(num)) // prints 104
console.log(Math.floor(num)) // prints 103
console.log(Math.ceil(num))  // prints 104

// Math Random
// Get a random number between 10 and 20
let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)

// Challenge - Create function to produce random number between 1 and 5
//             Take input as a guess and return true if correct or false if not
let makeGuess = function (num) {
    let min = 1
    let max = 5
    return num === Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(makeGuess(3))
