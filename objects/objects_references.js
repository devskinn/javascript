// expense tracking example
let myAccount = {
    name: 'Porky Pig',
    expenses: 0,
    income: 0
}

// function to add an expense
let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
    console.log(account)
}

addExpense(myAccount, 2.50)
console.log(myAccount)
// 'account' in the function acts as a pointer to the object and so expenses will be the same in both

// also acts as a pointer so updating a property in one object will be reflected in the other
let spouseAccount = myAccount
// e.g. both objects income property will be set to 1000
spouseAccount.income = 1000