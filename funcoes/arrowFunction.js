let dobro = function (a){
    return a * 2
}

dobro = (a) => {
    return a * 2
}

dobro = (a) => a * 2 // return implicito

let ola = function (){
    return "ola"
}

ola = () => "ola"
ola = _ => "ola" // tem param 
console.log(ola())