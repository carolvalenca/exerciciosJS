function area (a, b){
    const area = a * b
    if (a > 20){
        console.log(`valor acima do permitido: ${area}`)
    }
    else{
        return area
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,3,58,7,9))
console.log(area(5, 5))