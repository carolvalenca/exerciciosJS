const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } } 
console.log(JSON.stringify(obj)) // nao transforma funçoes p texto pois pega apenas dados, coisas nao executaveis

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1.7, "b": "carol", "c": true, "d": [], "e": {} }'))

// jsonlint.com