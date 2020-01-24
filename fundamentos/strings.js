const escola = "cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // tabela ascii
console.log(escola.indexOf("d"))

console.log(escola.substring(1)) // começando pelo indice 1 ate o fim
console.log(escola.substring(0, 3)) // começando pelo indice 0 ate o 3 sem inclui-lo

console.log("escola ".concat(escola).concat("!"))
console.log("escola " + escola + "!")
console.log(escola.replace(3, "e"))

console.log("carol,regina,valença".split(","))

