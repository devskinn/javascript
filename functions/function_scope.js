// Global (convertFahrenheitToCelsius, tempOne, tempTwo)
  // Local (fahrenheit, celsius)
    // Local (isFreezing)

let convertFahrenheitToCelsius = function (fahrenheit) { // argument is included in the local scope
    let celsius = (fahrenheit - 32) * 5/9

    if (celsius <= 0) {
        let isFreezing = true
    }

    return celsius
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)
