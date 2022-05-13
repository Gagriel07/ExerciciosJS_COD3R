let associacao = (mes = 0) => {
    console.log('Anuidade = R$1000')
    if (mes === 1) {
        console.log('Mês de referência Janeiro')
        console.log(`Valor do boleto = R$1000`)
    } else if (mes === 2) {
        console.log('Mês de referência Fevereira')
        console.log(`Valor do boleto = R$${1000 * (1 + 0.05)}`)
    } else if (mes === 3) {
        console.log('Mês de referência Março')
        console.log(`Valor do boleto = R$${1000 * (1 + 0.10)}`)
    } else if (mes === 4) {
        console.log('Mês de referência Abril')
        console.log(`Valor do boleto = R$${1000 * (1 + 0.15)}`)
    } else if (mes === 5) {
        console.log('Mês de referência Maio')
        console.log(`Valor do boleto = R$${1000 * (1 + 0.20)}`)
    } else if (mes === 6) {
        console.log('Mês de referência Junho')
        console.log(`Valor do boleto = R$${1000 * (1 + 0.25)}`)
    } else if (mes === 7) {
        console.log('Mês de referência Julho')
        console.log(`Valor do boleto = R$${1000 * (1 + 0.30)}`)
    } else if (mes === 8) {
        console.log('Mês de referência Agosto')
        console.log(`Valor do boleto = R$${1000 * (1 + 0.35)}`)
    } else if (mes === 9) {
        console.log('Mês de referência Setembro')
        console.log(`Valor do boleto = R$${1000 * (1 + 0.40)}`)
    } else if (mes === 10) {
        console.log('Mês de referência Outubro')
        console.log(`Valor do boleto = R$${1000 * (1 + 0.45)}`)
    } else if (mes === 11) {
        console.log('Mês de referência Novembro')
        console.log(`Valor do boleto = R$${1000 * (1 + 0.50)}`)
    } else if (mes === 12) {
        console.log('Mês de referência Dezembro')
        console.log(`Valor do boleto = R$${1000 * (1 + 0.55)}`)
    }
}

associacao(12)