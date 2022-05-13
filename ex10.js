const verificar = (num = 0) => {
    if (num === 1 || num === -1 || num === 2 || num === -2) {
        console.log('Número Invalido')

    } else {
        const teste = num % 3 === 0 ? true : false
        console.log(`Is this number divisible by 3? \n${teste}`)
    }

}

verificar(3)