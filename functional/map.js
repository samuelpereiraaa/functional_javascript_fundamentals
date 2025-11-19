const numbers = [1,2,3,4,5,6]

const numbers2 = numbers.map( el => {
    return el * 2 })

console.log(numbers)
console.log(numbers2)
// usando o map para dobrar os valores da array


const students = [
    { name: 'Jake', score: 6.4},
    { name: 'Susan', score: 8.6},
    { name: 'Emma', score: 9.4},
    { name: 'Peter', score: 9.1},    
]

const getScore = ( el =>{
    return el.score
})

const result = students
    .map(getScore)
    .map(Math.ceil)
//exibindo os scores arrendodados

console.log(result)