const transformar = (num = 0) => {
    if(Number.isInteger(num)) {
        return num;
    } else {
        return num.toFixed(2);
    }
}

const bhaskara = (ax2, bx, c) => {
    let delta = Math.pow(bx, 2) - (4 * ax2 * c)
    if (delta < 0) {
        return console.log('Delta Negativo');
    }

    const resultado = []

    let raizDeDelta = Math.sqrt(delta);
    let comSoma = (-bx + raizDeDelta) / (2 * ax2)
    resultado.push(transformar(comSoma))
    let comSubtraçao = (-bx - raizDeDelta) / (2 * ax2)
    resultado.push(transformar(comSubtraçao))

    return resultado
}

console.log(bhaskara(2, 12, -14))