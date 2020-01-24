let aprovados = ['carol', 'bia', 'matheus']
console.log(aprovados[0])
console.log(aprovados[3])

aprovados[3] = 'luiza'
aprovados.push('joao')
console.log(aprovados.length)

aprovados[10] = 'eanes'
console.log(aprovados)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['maria', 'barbara', 'gustavo']
aprovados.splice(1, 2)
console.log(aprovados)