let isAccountLocked = false
let userRole = 'admin'

if (isAccountLocked) {
    console.log('Is account locked')
} else if (userRole === 'admin') {
    console.log('Welcome Admin')
} else {
    console.log('Welcome')
}

// let temp = 22

// if (temp <= 32) {
//     console.log('It is freezing outside!')
// } else if (temp >= 110) {
//     console.log('It is hot outside!')
// } else {
//     console.log('Go for it. It is pretty nice.')
// }

let temp = 29

if (temp <= 10) {
    console.log("It is freezing outside.")
} else if (temp >= 25) {
    console.log("It is hot outside")
} else {
    console.log("It is good temperature!")
}