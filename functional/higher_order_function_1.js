/*
 Functions that operate on other functions, 
 either by taking them as arguments or by returning 
 them, are called higher-order functions.
*/

function run(fn) {
    return `result is: ${fn( )}`
}

function sayHello() {
    console.log("Hi !!!")
}

run(sayHello)
run(function(){
    console.log("space")
})

const resultRandom = run(Math.random)
console.log(resultRandom)