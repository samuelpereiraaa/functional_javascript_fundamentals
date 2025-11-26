const students = [
    { name: 'Jake', score: 6.4},
    { name: 'Susan', score: 8.6},
    { name: 'Emma', score: 9.4},
    { name: 'Peter', score: 9.1},    
]

const greatStudent = el => el.score >= 9
const getScore = el => el.score  
const mediaNumbers = (total, el, i, array) => {
    if(i === array.length -1){
        return (total + el) / array.length
    } else {
        return total + el
    }
}

console.log(
    students
    .filter(greatStudent)
    .map(getScore)
    .reduce(mediaNumbers)
)