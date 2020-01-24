const notas = [7.0, 5.8, 4.5, 9.6, 8.2, 2.3]

const notasBaixas1 = []
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// com callback
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})

console.log(notasBaixas2)


const notasBaixas3 = notas.filter(nota => nota < 7)

console.log(notasBaixas3)