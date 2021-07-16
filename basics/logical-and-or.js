let temp = 20

// Logical and Operator - True if both are true. False otherwise (and => &&)
// Logical or Operator - True if at least one side is true. False otherwise (or => ||)

if (temp >= 10 && temp <= 19) {
    console.log('It is pretty nice out.')
} else if (temp <= 9 || temp >= 20) {
    console.log('Do not go outside.')
} else {
    console.log('Eh. Do what you want.')
}

let isGuestOneVigan = false
let isGuestTwoVegan = false

if (isGuestOneVigan && isGuestTwoVegan) {
    console.log('Only offer up vegan dishes.')
} else if (isGuestOneVigan || isGuestTwoVegan) {
    console.log('Make sure to offer up some vegan options.')
} else {
    console.log('Offer up anything on the menue.')
}