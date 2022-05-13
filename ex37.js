const pa = (n = 0, a1 = 0, r = 0) => {
    console.log('--------------------------------------------------------------------------')
    let acumulador = 0
    for(let i = 0; i < n; i++) {
        let termo = a1 + ((i + 1) - 1) * r
        console.log(`Termo ${i + 1} = ${termo}`)
        acumulador += termo
    }

    console.log(`A soma de todos elementos da PA é ${acumulador}`)
    console.log('--------------------------------------------------------------------------')
}

const pg = (n = 0, a1 = 0, r = 0) => {
    console.log('--------------------------------------------------------------------------')
    let acumulador = 0
    for(let i = 0; i < n; i++) {
        let termo = a1 * Math.pow(r, i)
        console.log(`Termo ${i + 1} = ${termo}`)
        acumulador += termo
    }

    console.log(`A soma de todos elementos da PG é ${acumulador}`)
    console.log('--------------------------------------------------------------------------')
}

pa(5, 1, 1)
pg(20, 2, 2)