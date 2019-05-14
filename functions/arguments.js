// Multiple arguments
let add = function (a, b) {
    return a + b
}

let result = add(10, 1)
console.log(result)

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText()                // if nothing passed in then defaults above will be used
console.log(scoreText)
let scoreText2 = getScoreText('zKiller', 99)  // these replace defaults and are printed out
console.log(scoreText2)
let scoreText3 = getScoreText('zKiller')      // will print name and default score of zero
console.log(scoreText3)
let scoreText4 = getScoreText(undefined, 99)  // will print anonymous and score of 99
console.log(scoreText4)

// challenge
let getTip = function (total, tipPercentage = .2) {
    return total * tipPercentage
}

let tip = getTip(100, .4)
console.log(tip)