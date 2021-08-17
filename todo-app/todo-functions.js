// Check eisting saved data
const getSavedTodos = function() {
    const todosJSON = localStorage.getItem('todos')

    if(todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// Save todos to localStorage
const saveTodos = function(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove a todo from the list
const removeTodo = function(id) {
    const todoIndex = todos.findIndex(function(todo) {
        return todo.id === id
    })

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Render application todos based on filters
const renderTodos = function (todos, filters) {
    let filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    filteredTodos = filteredTodos.filter(function(todo) {
        if (filters.hideCompleted) {
            return !todo.completed
        } else {
            return true
        }
    })
    const incompletedTodos = filteredTodos.filter(function(todo) {
        return !todo.completed
    })
    
    document.querySelector('#todos').innerHTML = ''    

    document.querySelector('#todos').appendChild(generateSummaryDOM(incompletedTodos))

    filteredTodos.forEach(function (todo) {
        const p = generateTodoDOM(todo)
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

// Generate the DOM elements for an individual note
const generateTodoDOM = function(todo) {
    const todoEl = document.createElement('div')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')
    const checkbox = document.createElement('input')

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    todoEl.appendChild(checkbox)

    //Setup the todo text
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)

    //Setup the remove button
    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', function(e) {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    
    return todoEl

}
// Get the DOM elements for list summary
const generateSummaryDOM = function(incompletedTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompletedTodos.length} todos left!`
    return summary
}