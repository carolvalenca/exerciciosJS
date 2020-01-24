let valor // nao inicializado
console.log(valor)

valor = null // ausencia de valor porem inicializada 
console.log(valor)
//console.log(valor.toString()) // erro pois nao podemos acessar o toString de algo nulo

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atrbuir undefined a variaveis
console.log(!!produto.preco)
delete produto.preco // melhor forma de apagar atributos de objetos
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
produto.preco = 0 // produto gratis 

// preferivel atribuir null a variaveis que se quer limpar o valor
