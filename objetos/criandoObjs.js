//notaçao literal
const obj1 = {}
console.log(obj1)

//Object em js
const obj2 = new Object
console.log(obj2)

//funçoes construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesc = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto("Caneta", 2.99, 0.15)
const p2 = new Produto("Notebook", 3000, 0.25)
console.log(p1.getPrecoComDesc(), p2.getPrecoComDesc())

//funçao factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario("natalia", 5000, 2)
console.log(f1.getSalario())

//Object.create
const pessoa = Object.create(null)
pessoa.nome = 'Ana'
console.log(pessoa)