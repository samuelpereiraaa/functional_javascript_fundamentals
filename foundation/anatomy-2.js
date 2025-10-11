// Anonymous function
(function (a, b, c) {
    return a + b + c
})

// functions expression
const sum = function (a, b){
    return a + b
}

let result = sum (3, 2)
console.log(result)

let x = sum

let result2 = x(10, 10)
console.log(result2)

let y = x
console.log(y(20, 20))