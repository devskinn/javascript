let temp = 55

// Logical AND Operator
// If both sides are true, code is executed
// If either side is false, code does not run
if (temp >= 60 && temp <= 90) {
    console.log('its nice outside')
}

// Logical OR Operator
// If either side is true then code is executed
if (temp < 0 || temp > 120) {
    console.log('Do not go outside')
}

let isGuestOneVegan = true
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Vegan menus all round then')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Vegan and Normal menus it is')
} else {
    console.log('Full menu for all')
}