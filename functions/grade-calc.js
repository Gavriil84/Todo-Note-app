const getScore = function(score, totalScore) {
    let grade = ''
    let percent = (score / totalScore) * 100

    if(percent >= 90) {
        grade = "A"
    } else if (percent >= 80) {
        grade = "B"
    } else if (percent >= 70) {
        grade = 'C'
    } else if (percent >= 60) {
        grade = "D"
    } else {
        grade = 'E'
    }

    return `You got a ${grade} (${percent}%!)`
}

let detail = getScore(2, 20)
console.log(detail)