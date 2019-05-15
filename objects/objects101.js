// Book Object
let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(myBook) // prints out the whole object
console.log(myBook.title) // use dot notation to print the title only
console.log(`${myBook.title} by author ${myBook.author}`) // using dot notation and template strings
myBook.title = 'Animal Farm'
console.log(`${myBook.title} by author ${myBook.author}`) // change a property value

// challenge - create person object
// output a sentence giving name, age and where person lives
// increment age by one and print again

let person = {
    name: 'Fred Flintstone',
    age: 44,
    location: 'Rockville'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)
person.age = person.age + 1
console.log(`${person.name} is ${person.age} and lives in ${person.location}`)