let name = 'Porky Pig'

// Get string length - property
console.log(name.length)

// Convert to upper case - method
console.log(name.toUpperCase())

// Convert to lower case - method
console.log(name.toLowerCase())

// Includes Method
let password = 'abc123password098'
console.log(password.includes('password')) // returns true for above password

// Trim Method - trims whitespace at start and end of the string
name = ' Betty Boop '
console.log(name.trim())

// Challenge - password checker
// Criteria: longer than 8 characters and does not contain word password

let isPasswordValid = function (password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isPasswordValid('abcde'))
console.log(isPasswordValid('MontyPython'))
console.log(isPasswordValid('gerup2singpassword345'))