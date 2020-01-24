Array.prototype.map2 = function(callback) {
    const novoArray = []
    for (let i = 0; i < this.length; i++){
        novoArray[i] = callback(this[i], i, this)
    }
    return novoArray
}

const carrinho = [
    '{ "nome": "borracha", "preco": 3.45 }',
    '{ "nome": "caderno", "preco": 13.90 }',
    '{ "nome": "kit de lapis", "preco": 41.22 }',
    '{ "nome": "caneta", "preco": 7.50 }'
]

// retornar um array apenas com os preços 

const paraObjeto = json => JSON.parse(json)
const pegaPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(pegaPreco)
console.log(resultado)


