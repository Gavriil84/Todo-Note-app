// Global scope (convertFahrenheitToCelsius, tempOne, tempTwo)
    // Local scope (fahrenheit, convert)
        // Local scope (isFreezing)



let convertFahrenheitToCelsius = function (temp) {
    let convert = (temp - 32) * 5 / 9

    if (convert <= 0) {
        let isFreezing = true
    }

    return convert
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)