// Can be used instead of concatenation
// Considered to be easier to read and amend than string concatenation
// syntax is ${}
// String is enclosed in back ticks (not single quotes)

//let name = 'Piggy'
//let age = 12
//console.log(`oink, my name is ${name}! I am ${age} years old.`)

// challenge
let getTip = function (total, tipSize = .2) {
    let tipPercent = tipSize * 100
    let tip =  total * tipSize
    return `A ${tipPercent}% tip on $${total} would be $${tip}`
}

let tipMessage = getTip(40, .25)
console.log(tipMessage)
