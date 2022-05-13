const verifivador = (array = []) => {
    let negativos = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] < 0) {
            negativos++
        }
    }

    console.log(array)
    console.log(`Total de números negativos: ${negativos}`)
}

verifivador([0, 1, 2, -4, 44, -9])