const transformar = (num = 0) => {
    return `R$${num.toFixed(2)}`.replace('.', ',')
}

const jurosSimples = (capitalInicial, taxaDeJuros, tempoDeAplicação) => {
    let juros = capitalInicial * (taxaDeJuros / 100) * tempoDeAplicação;
    let valorFinal = capitalInicial + juros;
    return `Montate final ${transformar(valorFinal)} com juros de ${transformar(juros)}`
}

const jurosCompostos = (capitalInicial, taxaDeJuros, tempoDeAplicação) => {
    let valorFinal = capitalInicial * Math.pow((1 + (taxaDeJuros / 100)), tempoDeAplicação)
    return `Montate final ${transformar(valorFinal)} com juros de ${transformar(valorFinal - capitalInicial)}`
}

console.log(jurosSimples(1000, 40, 2))
console.log(jurosCompostos(1000, 40, 2))