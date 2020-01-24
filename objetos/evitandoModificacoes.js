// permite modificar e deletar atributos mas excluir nao
const produto = Object.preventExtensions({
    nome: 'qualquer', preco: 1.99, tag: 'escolar'
})
console.log('extensivel:', Object.isExtensible(produto))

produto.nome = 'borracha'
produto.descricao = 'para uso escolar'
delete produto.tag
console.log(produto)

//permite modificar atributos mas excluir e adicionar nao
const pessoa = { nome: 'carol', idade: 20 }
Object.seal(pessoa)
console.log('selado:', Object.isSealed(pessoa))
delete pessoa.idade
pessoa.cabelo = 'enrolado'
console.log(pessoa)

//Object.freez = selado + valores constantes
