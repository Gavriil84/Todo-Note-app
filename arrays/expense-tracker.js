const account = {
    name: 'Andrew Mead',
    expenses: [],
    income: [],

    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },

    addIncome: function(description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },

    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        this.expenses.forEach(function (item) {
            totalExpenses = totalExpenses + item.amount
        })
        this.income.forEach(function (item) {
            totalIncome = totalIncome + item.amount
        })

        let balance = totalIncome - totalExpenses

        return `${this.name} has a balance of $${balance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    }

}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())

