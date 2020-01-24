const nums = [1,2,3,4,5]

// map = for com proposito
let resultado = nums.map(function(num) { // gera outro array, nao mexe no original
    return num * 2 // precisa ter retorno 
})

console.log(resultado)

const soma10 = num => num + 10
const triplo = num => num * 3
const paraDinheiro = num => `R$ ${parseFloat(num).toFixed(2).replace('.', ',')}` 


resultado = nums.map(soma10).map(triplo).map(paraDinheiro) // transformando de forma encadeada
console.log(resultado)