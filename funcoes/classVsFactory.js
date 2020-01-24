class Pessoa {
    constructor(nome){
        this.nome = nome 
    }

    falar (){
        console.log(`meu nome eh ${this.nome}`)
    }
}

const pessoa = new Pessoa('carol')
pessoa.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`meu nome eh ${nome}`)
    }

}

const pessoa2 = criarPessoa('lisa')
pessoa2.falar()