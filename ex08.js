const basquete = (dados) => {
    const dadosFinal = dados.split(' ');
    const resultado = []

    let max = 0
    let max2 = 0
    let min = 0
    let min2 = 0

    for (i = 0; i < dadosFinal.length; i++) {
        if (i == 0) {
            min =  Number.parseInt(dadosFinal[i]);
            continue;
        }

        if ( Number.parseInt(dadosFinal[i]) > max) {
            max = Number.parseInt(dadosFinal[i]);
            max2++;
        } else if ( Number.parseInt(dadosFinal[i]) < min) {
            min =  Number.parseInt(dadosFinal[i]);
            min2 = i + 1;
        }
    }

    resultado.push(max2, min2);
    return resultado;
}

console.log(basquete('10 20 20 8 25 3 0 30 1'))



