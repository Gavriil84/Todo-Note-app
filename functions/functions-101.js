// function - input (argument) , code, output (return value)
let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()

let square = function(num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

// Challenge

let convertFahrenheitToCelsius = function(temp) {
    let convert = (temp - 32) * 5 / 9
    return convert
}

let temp1 = convertFahrenheitToCelsius(32)
let temp2 = convertFahrenheitToCelsius(68)
console.log(temp1)
console.log(temp2)






