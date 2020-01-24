// armazenando funcoes em variaveis
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

// armazenando funçao arrow em variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implicito
const subtracao = (a, b) => a - b // usado p funçoes de apenas uma sentença 

console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2("aaaaaaaaa")