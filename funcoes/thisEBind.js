const pessoa = {
    saudacao: "bom diah",
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas funcional e OO

const outroFalar = pessoa.falar.bind(pessoa)
outroFalar()