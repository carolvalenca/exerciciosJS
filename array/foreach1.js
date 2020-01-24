const aprovados = ['alice', 'luis', 'vanessa', 'apolo']

aprovados.forEach(function(nome, indice) {        //ler documentaçao
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)