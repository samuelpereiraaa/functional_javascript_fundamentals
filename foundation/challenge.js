// criar uma rage function 
// range (5) => [1,2,3,4,5]
// range (6,11) => [6,7,8,9,10,11]4
// range (10,19,2) => [10,12,14,16,18]
// range (6,2) => [6,5,4,3,2,1]
// range (8, -3, 4) [8,4,0]

function range(a, b, c = 1 ) {
    let start, stop, step = c // tratar os argumentos

    if (b === undefined){ // apenas 1 argumento
        start = 1
        stop = a
        step = 1
    }
    
    else{ // 2 ou mais argumentos
        start = a
        stop = b
        step = c
        
    }

    // maneira decrescente 
    if (start > stop && step > 0){
        step = -step
    }

    // calcula o numero de elementos (length)
    const length = Math.floor((stop - start) / step) + 1;
    // criar array usando Array.from
    return Array.from({ length: length }, (_, index) => start + index * step)
}



console.log(range(5))
console.log(range(6,11))
console.log(range(10,19, 2))
console.log(range(6,2))
console.log(range(8,-3, 4))



