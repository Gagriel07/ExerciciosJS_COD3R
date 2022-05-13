const notas = (vetor = []) => {
    console.log(`Ordem das Notas (Melhor por pior): A, B, C, D \n`)
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] >= 0 && vetor[i] <= 4.9) {
            vetor[i] = `Nota: ${vetor[i].toFixed(1)} = D`
        } else if(vetor[i] >= 5 && vetor[i] <= 6.9) {
            vetor[i] = `Nota: ${vetor[i].toFixed(1)} = C`
        } else if(vetor[i] >= 7 && vetor[i] <= 8.9) {
            vetor[i] = `Nota: ${vetor[i].toFixed(1)} = B`
        } else if(vetor[i] >= 9 && vetor[i] <= 10) {
            vetor[i] = `Nota: ${vetor[i].toFixed(1)} = A`
        } else {
            vetor[i] = `Nota: ${vetor[i].toFixed(1)} = Nota Inválida!`
        }
    }

    console.log(vetor.join(', \n'))
}

notas([3.5, 6, 11, 9, 5.6, 4.3, 7])