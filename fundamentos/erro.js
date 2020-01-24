
function tratarErroELancar(erro){
    throw new Error("deu erro carai")
    throw 10
    throw true
    throw "aaaaa"
    throw { nome: erro.name, msg: erro.msg}

}

function printarNomeGritado(obj){
    try {
        console.log(obj.name.toUpperCase() + "!!!")
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log("final")
    }
}

const obj = { nome: "carol" }
console.log(printarNomeGritado(obj))



