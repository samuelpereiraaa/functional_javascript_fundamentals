const number = [1,2,3,4,5,6]

const greaterThanZero = el => el >= 0
const greaterThanTen = el => el >= 10
const even = el => el % 2 === 0



console.log(number.filter(greaterThanZero))
console.log(number.filter(greaterThanTen))
console.log(number.filter(even))


const students = [
    {name: 'sammy', score: 6.4},
    {name: 'jake',  score: 8.6},
    {name: 'susan', score: 9.4},
    {name: 'megan', score: 9.1},
]

const greatStudent = el => el.score >= 9.0

console.log(students.filter(greatStudent))
console.log(students)