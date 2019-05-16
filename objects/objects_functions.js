let bookOne = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let bookTwo = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    console.log(`${book.title} by ${book.author}.`)
}

// pass in the full object
getSummary(bookOne)
getSummary(bookTwo)

// return an object from a function
let returnSummary = function (book) {
    // create return object
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummaryOne = returnSummary(bookOne)
console.log(bookSummaryOne.summary)
let bookSummaryTwo = returnSummary(bookTwo)
console.log(bookSummaryTwo.pageCountSummary)

// challenge - create function that returns an object with the 3 output values below
// input - temperature in fahrenheit
// output - temperature in fahrenheit, celsius and kelvin

let convertTemperatures = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) * (5/9),
        kelvin: (fahrenheit + 459.67) * (5/9)
    }
}

let temps = convertTemperatures(74)
console.log(`${temps.fahrenheit}F is ${temps.celsius}c and ${temps.kelvin} K`)
console.log(temps) // print all object values
