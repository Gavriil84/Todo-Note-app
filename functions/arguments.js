// Multiple arguments
let add = function(a, b, c) {
    return a + b +c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    //return 'Name: ' + name + ' - Score: ' + score
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// Challenge

let getTip = function(total, tipPercent = .5) {
    return total * tipPercent
}

let tip = getTip(200)
console.log(tip)



