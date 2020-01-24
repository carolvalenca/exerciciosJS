//funçao em js eh first class
//higher-order function

//criar funçao de forma literal
function fun1() { }

//armazenar em uma variavel 
const fun2 = function () { }

//armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

//armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return "oi" }
console.log(obj.falar())

//passat funçao como param
function run(fun){
    fun()
}

run(function () { console.log("executandooo") })

//uma funçao pode retornar/conter uma funçao
function soma(a, b){
   return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const aaaa = soma(2,3)
aaaa(4)



