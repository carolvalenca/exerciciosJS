const nome = 'carol'
const concat = 'olá ' + nome + '!'
const template = `
    olá
    ${nome}!`
console.log(concat, template)

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`ei... ${up('cuidado')}!`)