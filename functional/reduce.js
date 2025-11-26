const numbers = [1,2,3,4,5,6]



const sum = (total,el) => total + el

const total = numbers.reduce(sum)

console.log(total)

// usando todos os parametros da função para calcular a media
const mediaNumbers = (total, el, i, array) => {
     if(i === array.length -1){
        return (total + el) / array.length
     } else {
        return (total + el)
     }
}

const media = numbers.reduce(mediaNumbers)

console.log(media)
