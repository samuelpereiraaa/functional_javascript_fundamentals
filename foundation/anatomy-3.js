// function expression
const increment = function(n) {
    return n + 1
}
// Arrow Function is always anonymus

const increment2 = (n) => {
    return n + 1
}

const increment3 = n => {
    return n + 1
}

const increment4 = n => n + 1


console.log(increment(1))
console.log(increment2(5))
console.log(increment3(25))
console.log(increment4(50))

const division = (a, b) => a / b
console.log(division(4, 2))