function soma() {
    let soma = 0
    for (i in arguments) {      //arguments - array interno de js
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1,2,3))
console.log(soma(1, 2, "teste"))
console.log(soma("a", "b", "c"))