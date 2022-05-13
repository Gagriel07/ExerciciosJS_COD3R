let addNumberArray = (array = []) => {
    let valor = 0
    for (let i = 0; i < 10; i++) {
        valor = Math.floor(Math.random() * (50 - 1) + 1)
        array.push(valor);
    }
    return array;
}

let array = addNumberArray([])
let min = Math.min(...array)
let max = Math.max(...array)

console.log(array)
console.log(`Menos valor: ${min}`)
console.log(`Maior valor: ${max}`)

console.log('----------------------------------------')
let min2 = array.reduce((a, b) => {
    return Math.min(a, b)
})

let max2 = array.reduce((a, b) => {
    return Math.max(a, b)
})

console.log(`Min: ${min2} Max: ${max2}`)