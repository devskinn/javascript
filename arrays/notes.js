/*const notes = ['Note 1', 'Note 2', 'Note 3']
console.log(notes)
// length property - get number of items in the array
console.log(notes.length)
// getting array values
console.log(notes[1]) // index starts at zero
console.log(notes[6]) // element does not exist so undefined returned
console.log(notes[notes.length - 1]) // get last item in the array

// Push and Pop methods - works with items at end of the array
notes.pop() // removes last item
console.log(notes)
notes.push('Note 4') // adds item to end of array
console.log(notes)

// Shift and Unshift methods - works with items at start of the array
notes.shift() // removes first item
console.log(notes)
notes.unshift('Note 0') // adds item at start of array
console.log(notes)

// Splice method - good for adding and removing items
notes.splice(1, 1) // starts at 2nd item and removes one item
console.log(notes)
notes.splice(1, 0, 'New Note 2') // adds new item at 2nd location and shifts others to right
console.log(notes)
notes.splice(1, 1, 'Newer Note 2') // replaces 2nd item in the array
console.log(notes)
notes[2] = 'New Note 3' // best method to use when replacing items
console.log(notes)

// Callback Function: One function calling another function. e.g. to loop through notes array
// can use 2 params - index and item
notes.forEach(function (item, index) {
    console.log(index + ': ' + item)
})

// alternate to above is to use a for loop (gives more flexibility)
for (let count = 0; count < notes.length; count++) {
    console.log(notes[count])
}
// same in reverse
for (let count = notes.length - 1; count >= 0; count--) {
    console.log(notes[count])
}
*/

// an array of objects - still works same, pop, push etc
const notes = [{
    title: 'My road trip',
    body: 'brmm brmm brmmmmm'
}, {
    title: 'My dogs bark',
    body: 'woof woof ruff'
}, {
    title: 'My wifes voice',
    body: 'nag nag nag'
}]

const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (note, index) {
        return note.title === noteTitle
    })
    return notes[index]
}
const note = findNote(notes, 'My dogs bark')
console.log(note)
