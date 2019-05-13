// Function - Input (argument), Code, Output (return value)
let greetUser = function () {
    console.log('Welcome User')
}

//greetUser() // Call the function

// Square a number function
let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
console.log(value)

// convert farhrenheit to celsius
let convertFahrenheitToCelsius = function (temp) {
    let convertedTemp = (temp - 32) * 5/9
    return convertedTemp
}

let tempInCelsius = convertFahrenheitToCelsius(68)
console.log(tempInCelsius)