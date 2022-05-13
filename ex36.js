const mult = (vetor = [], numero = 0) => {
    let vetorMult = []
    console.log(`Vetor Inicial: ${vetor}`)
    console.log(`Número a ser multiplicado: ${numero}`)
    for(let i = 0; i < vetor.length; i++) {
        vetorMult.push(vetor[i] * numero)
    }

    return vetorMult;
}

console.log(mult([1, 2, 3, 4], 5))
console.log('----------------------------------------------------')

const mult2 = (vetor2 = [], numero = 0) => {
    let vetorMult2 = []
    console.log(`Vetor Inicial: ${vetor2}`)
    console.log(`Número a ser multiplicado: ${numero}`)
    for(let i = 0; i < vetor2.length; i++) {
        if(vetor2[i] > 5) {
            vetorMult2.push(vetor2[i] * numero)
        }
    }

    return vetorMult2;
}

console.log(mult2([7, 2, 3, 4], 5))


