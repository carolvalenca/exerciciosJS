const putinhas = ["carou", "nathan", "samuel"]

function imprimir (nome, index){
    console.log(`${index + 1}. ${nome}`)
}

putinhas.forEach(imprimir)
putinhas.forEach(putinhas => console.log(putinhas))