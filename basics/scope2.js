// Global
  // Local
    // Local
  // Local

// Variable shadowing
let name = 'Piggy'

if (true) {
    let name = 'Porky'
    if (true) {
        console.log(name) // Value will be Porky as local scope is used
    }
}

if (true) {
    console.log(name) // Value will be Piggy as global scope is used
}

// Leaked global issue
// If no varible is declared and one is assigned it is created using global scope
if (true) {

    if (true) {
        name = 'Piglet' // assigned and not declared so becomes a global
        console.log(name) // Value will be Piglet
    }
}

if (true) {
    console.log(name) // Value will be Piglet
}