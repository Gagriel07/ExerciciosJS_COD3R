const transformar = (num = 0) => {
    return `R$${num.toFixed(2)}`.replace('.', ',')
}
const cardapio = (codigo = 0, quantidade = 0) => {
    switch(codigo) {
        case 100:
            console.log(`Foram comprados um total de Cachorro Quente(s) = ${quantidade}`)
            console.log('Sendo a cada unidade tem o valor de R$3,00')
            console.log(`Valor total da compra = ${transformar(3 * quantidade)}`)
            break
        case 200:
            console.log(`Foram comprados um total de Hambúrguer(s) Simples = ${quantidade}`)
            console.log('Sendo a cada unidade tem o valor de R$4,00')
            console.log(`Valor total da compra = ${transformar(4 * quantidade)}`)
            break
        case 300:
            console.log(`Foram comprados um total de Cheeseburguer(s) = ${quantidade}`)
            console.log('Sendo a cada unidade tem o valor de R$5,50')
            console.log(`Valor total da compra = ${transformar(5.50 * quantidade)}`)
            break
        case 400:
            console.log(`Foram comprados um total de Bauru(s) = ${quantidade}`)
            console.log('Sendo a cada unidade tem o valor de R$7,50')
            console.log(`Valor total da compra = ${transformar(7.5 * quantidade)}`)
            break
        case 500:
            console.log(`Foram comprados um total de Refrigerante(s) = ${quantidade}`)
            console.log('Sendo a cada unidade tem o valor de R$3,50')
            console.log(`Valor total da compra = ${transformar(3.50 * quantidade)}`)
            break
        case 600:
            console.log(`Foram comprados um total de Suco(s) = ${quantidade}`)
            console.log('Sendo a cada unidade tem o valor de R$2,80')
            console.log(`Valor total da compra = ${transformar(2.8 * quantidade)}`)
            break
    }
}

cardapio(100, 2)
cardapio(200, 2)
cardapio(300, 2)
cardapio(400, 2)
cardapio(500, 2)
cardapio(600, 2)