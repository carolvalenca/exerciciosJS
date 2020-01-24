const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o ultimo da lista
console.log(pilotos)

pilotos.push('Verstappen') // adiciona um elemento na lista
console.log(pilotos)

pilotos.shift() // remove o primeiro da lista
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um elemento no começo da lista
console.log(pilotos)

pilotos.splice(2, 1, 'Bottas', 'Massa') // remove/adiciona elementos de acordo com os parametros
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)

const filhas = ['gaia', 'atena']
const filhos = ['apolo', 'poseidon']
const todos = filhas.concat(filhos)
console.log(todos)

console.log([].concat([1,2], [3,4], 5, [[6, 7]]))