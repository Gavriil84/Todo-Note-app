const todos = [{
        text: 'Order cat food',
        completed: false
    },
    {
        text: 'Clean kitchen',
        completed: true
    },
    {
        text: 'Buy food',
        completed: false
    },
    {
        text: 'Do work',
        completed: true
    },
    {
        text: 'Excercise',
        completed: false
    }]

const deleteNote = function(todos, todoText) {
    const index = todos.findIndex(function(todo, index) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })

    if (index > -1) {
        todos.splice(index, 1)
    }
}

const getThingsTodo = function(todos) {
    return todos.filter(function(todo, index) {
        return !todo.completed
    })
}

const sortTodos = function(todos) {
    todos.sort(function(a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}


sortTodos(todos)
console.log(todos)

// console.log(getThingsTodo(todos))

// deleteNote(todos, 'buy food')
// console.log(todos)