const mediaAritmetica = (array = []) => {
    let soma = 0
    for(let i = 0; i < array.length; i++) {
        soma += array[i]
    }
    let resultado = soma / array.length

    console.log(`A média aritmética do vetor é: ${resultado}`)
}

mediaAritmetica([4, 6, 6, 4])