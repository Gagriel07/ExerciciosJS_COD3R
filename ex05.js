const transformar = (num = 0) => {
    return `R$${num.toFixed(2)}`.replace('.', ',')
}

let soma = 0.1 + 0.3
console.log(transformar(soma))