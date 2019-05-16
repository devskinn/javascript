// challenge - add 3 new functions - addIncome, reset account and account summary including any calculations required
// e.g. show value after expenses have been subtracted from income, output string for this:
// 'account for <name> has <amount>. <amount> in income. <amount> in expenses'
// test flow: add income > add expense > add expense > account summary > reset account > account summary

let myAccount = {
    name: 'Porky Pig',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function (account, amount) {
    account.income = account.income + amount
}

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

let accountSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has £${balance}. £${account.income} in income. £${account.expenses} in expenses.`
}

addIncome(myAccount, 1000)
addExpense(myAccount, 50)
addExpense(myAccount, 50)
console.log(accountSummary(myAccount))
resetAccount(myAccount)
console.log(accountSummary(myAccount))

// Testing: Using values addIncome 1000, addExpense 50, addExpense 50
//          Output for first summary = Account for Porky Pig has £900. £1000 in income. £100 in expenses.
//          Output after reset = Account for Porky Pig has £0. £0 in income. £0 in expenses. 