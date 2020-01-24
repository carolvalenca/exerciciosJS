//funcao factory eh uma funcao que retorna/cria objetos

//factory simples 
function criarPessoa(){
    return {
        nome: 'carol',
        sobrenome: 'valença'
    }
}

console.log(criarPessoa())