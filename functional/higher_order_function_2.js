// curring 
function taxPrice(tax) {
    return function(price){
        return price * (1 + tax)
    }
}

const finalPrice = taxPrice (0.0875) 

console.log(finalPrice (25.1))
console.log(finalPrice (21.7))
console.log(finalPrice (107.9))
