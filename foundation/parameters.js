function logParams(a, b ,c) {
    console.log(a, b , c)
}
logParams("adsds", "b", "c")

//  spread/rest
function logNums(...nums){
    console.log(nums)
}

logNums(1,2,3,4,5)

function sumAll(...nums) {
    let total = 0 
    for(let n of nums){
        total += n
    }
    return total
}

console.log(sumAll(2,2))