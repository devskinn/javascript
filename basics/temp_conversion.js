// Fahrenheit to Celsius
// T(c) = (T(f) - 32) * 5/9
// T(c) = (68f - 32) * 5/9 = 20c
// Fahrenheit to Kelvin
// T(k) = (T(f) + 459.67) * 5/9
// T(k) = (60f + 459.67) * 5/9 = 288.71 K
let farhrenheit = 32
let celsius = (farhrenheit - 32) * 5/9
let kelvin = (farhrenheit + 459.67) * 5/9
console.log(farhrenheit + 'f = ' + celsius + 'c')
console.log(farhrenheit + 'f = ' + kelvin + 'K')