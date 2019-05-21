const notes = ['Note 1', 'Note 2', 'Note 3']
console.log(notes)
// length property - get number of items in the array
// console.log(notes.length)
// getting array values
// console.log(notes[1]) // index starts at zero
// console.log(notes[6]) // element does not exist so undefined returned
// console.log(notes[notes.length - 1]) // get last item in the array

// Push and Pop methods - works with items at end of the array
// notes.pop() // removes last item
// console.log(notes)
// notes.push('Note 4') // adds item to end of array
// console.log(notes)

// Shift and Unshift methods - works with items at start of the array
// notes.shift() // removes first item
// console.log(notes)
// notes.unshift('Note 0') // adds item at start of array
// console.log(notes)

// Splice method - good for adding and removing items
notes.splice(1, 1) // starts at 2nd item and removes one item
console.log(notes)
notes.splice(1, 0, 'New Note 2') // adds new item at 2nd location and shifts others to right
console.log(notes)
notes.splice(1, 1, 'Newer Note 2') // replaces 2nd item in the array
console.log(notes)
notes[2] = 'New Note 3' // best method to use when replacing items
console.log(notes)
