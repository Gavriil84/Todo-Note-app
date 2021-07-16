let myAccount = {
    name: "Gabriel",
    expenses: 0,
    income: 0
}

let addExpenses = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function (account, amount) {
    account.income = account.income + amount
}

let resetAccount = function(account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function (account) {
    let balance = myAccount.income - myAccount.expenses
    let expenses = myAccount.expenses
    let income = myAccount.income

    return `Account for $${account.name} has $${balance}. $${income} in income. $${expenses} in expenses.`
}

addIncome(myAccount, 2500)
addExpenses(myAccount, 500)
addExpenses(myAccount, 200)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))


