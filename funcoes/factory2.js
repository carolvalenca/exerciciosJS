

function criarProduto(nomeP, precoP){
    return {
        nome: nomeP,
        preco: precoP
    }
}

function criarPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome
    }
}

console.log(criarProduto('blusa preta', 20))
console.log(criarPessoa('ana', 'luiza'))