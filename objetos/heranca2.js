const avo = { attr1: 'A' }
const pai = { attr2: 'B', __proto__: avo }
const filho = { attr3: 'C', __proto__: pai }
console.log(filho.attr1, filho.attr2, filho.attr3)

const carro = { 
    velAtual: 0,
    velMaxima: 200,
    acelerar(delta) {
        if (this.velAtual + delta <= this.velMaxima){
            this.velAtual += delta
        }
        else {
            this.velAtual = this.velMaxima
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMaxima}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMaxima: 324 // sobrecrita
}

const volvo = {
    modelo: 'v40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

ferrari.acelerar(100)
console.log(ferrari.status())

volvo.acelerar(100)
console.log(volvo.status())
