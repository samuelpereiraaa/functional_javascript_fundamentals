// Anonymous function
// IIFE - Imediately Invoked Function Expression
(function (a, b, c) {
    let y = 10
    console.log(`result: ${a + b + c}`)
    console.log(y)
})(1, 2, 3);

(function () {
    let y = 102
    console.log(y)
})();


( () => {
    let y = 110
    console.log(y)
})();


(() => console.log('Hi'))();