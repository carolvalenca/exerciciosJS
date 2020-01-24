const obj = {
    nome: "rebeca",
    idade: 20,
    peso: 56
}

console.log(Object.keys(obj)) // retorna as chaves
console.log(Object.values(obj)) // retorna os valores
console.log(Object.entries(obj)) // retorna um array com tuplas chave valor

Object.entries(obj).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(obj, 'dataNascimento', {  // funçao que serve para criaçao de atributos de um objeto
    enumerable: true, // define se eh enumeravel (pode ser listado num print)
    writable: false, // define se pode ser sobrescrito
    value: '31/12/1999' // valor do atributo
})

obj.dataNascimento = '31/12/2000'
console.log(obj)

const destino = { a: 1 }
const o1 = { b: 2 }
const o2 = { a: 4, c: 3 }
const objeto = Object.assign(destino, o1, o2) // concatena os objetos o1 e o2 no objeto destino
console.log(objeto)

Object.freeze(objeto) // congela o objeto, fazendo com que o mesmo nao possa ser modificado
objeto.c = 123
console.log(objeto)