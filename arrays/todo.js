// delete 3rd item
// add new item to end
// remove first item
const todos = ['walk dog', 'go shopping', 'phone dentist', 'email boss', 'book flights']
/*
console.log(todos)
todos.splice(2, 1)
console.log(todos)
todos.push('wash car')
console.log(todos)
todos.shift()
console.log(todos)

console.log(`You have ${todos.length} ToDo items`)
todos.forEach(function (item, index) {
    console.log(`${index + 1}. ${item}`)
})
*/

// same as above using for loop
for (count = 0; count < todos.length; count++) {
    console.log(`${count + 1}. ${todos[count]}`)
}


