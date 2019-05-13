// Lexical Scope (aka Static Scope)
// GLOBAL Scope - Defined outside of all code blocks
// LOCAL Scope - Defined inside a code block

// In a scope you can access variables defined in that scope, or in any parent/ancestor scope

// Global scope (varOne)
  // Local scope (varTwo)
    // Local scope (varFour)
  // Local scope (varThree)

  let varOne = 'varOne'

  if (true) {
      console.log(varOne)   // will print
      let varTwo = 'varTwo'
      console.log(varTwo)   // will print

      if (true) {
          let varFour = 'varFour'
      }
    }

  console.log(varTwo)       // will not print

  if (true) {
      let varThree = 'varThree'
  }