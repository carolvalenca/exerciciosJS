// minha solucao
function meuForEach(f, array){
    for (let i = 0; i < array.length; i++){
        f(array[i], i, array)
    }
}

const meuarray = ['alice', 'bruno', 'carol']

const funcao = function(nome, indice, arr) {
    console.log(nome + ' foi aprovado!')
}

meuForEach(funcao, meuarray)

// solucao do curso
Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }    
}

const aprovados = ['alice', 'luis', 'vanessa', 'apolo']

aprovados.forEach2(function(nome, indice) {        //ler documentaçao
    console.log(`${indice + 1}) ${nome}`)
})