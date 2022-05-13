let planoDeSaude = (idade = 0) => {
    if(idade < 10) {
        console.log(`Valor total a ser pago = R$180`)
    } else if (idade < 30) {
        console.log(`Valor total a ser pago = R$150`)
    } else if (idade < 60) {
        console.log(`Valor total a ser pago = R$195`)
    } else if (idade >= 60) {
        console.log(`Valor total a ser pago = R$230`)
    } else {
        console.log('Valor Invalido')
    }
}

planoDeSaude(5)
planoDeSaude(20)
planoDeSaude(50)
planoDeSaude(60)