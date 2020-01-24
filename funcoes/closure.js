//Closure é o escopo criado quando uma funçao eh declarada 
//esse escopo permite a funçao acessar e manipular variaveis externas a ela 

//contexto lexico em açao!

const valor = 'Global'

function fora(){
    const valor = 'Local'
    function dentro(){
        return valor
    }

    return dentro
}

const funcao = fora()
console.log(funcao())