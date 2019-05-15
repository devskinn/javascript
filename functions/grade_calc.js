// course challenge
// inputs: student score, total possible score
// output: 15/20 --> You got a C (75%)!
// A 90-100 : B 80-89 : C 70-79 : D 60-69 : F 50-59

let studentScore = 15
let totalPossibleScore = 20

let calcScore = function (actualScore, totalPossible) {
    return (studentScore / totalPossibleScore) * 100
}

let getGrade = function (gradePercent) {
    let grade = undefined
    if (gradePercent >= 90) {
        grade = 'A'
    } else if (gradePercent >= 80 && gradePercent <= 89) {
        grade = 'B'
    } else if (gradePercent >= 70 && gradePercent <= 79) {
        grade = 'C'
    } else if (gradePercent >= 60 && gradePercent <= 69) {
        grade = 'D'
    } else {
        grade = 'F'
    }

    return grade
}

let studentPercent = calcScore(studentScore, totalPossibleScore)
let studentGrade = getGrade (studentPercent)

console.log(`You got a ${studentGrade} (${studentPercent}%)!`)

// Differences between above and tutor solution:
// calculation and if statements were all in one function
// only checked for >= e.g. (gradePercent >= 80), the top of range numbers not required
// the function returned the final output string
// BOTH versions return the correct output