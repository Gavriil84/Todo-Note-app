let myBook =  {
    title: '1984', 
    author: 'George Orwell',
    pageCount: 326
}

let otherBook =  {
    title: 'A Peoples History', 
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function(book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`

    }
}

let bookSummary = getSummary(myBook)
let otherBooksummary = getSummary(otherBook)

console.log(bookSummary.summary)

// Challenge

// Create function - take fahrenheit in - return object with all three

const convert = function(fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) * 5 / 9,
        kelvin: (fahrenheit + 459.67) * 5 / 9
    }
}

let temp = convert(68)
console.log(temp)
