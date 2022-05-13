let maiorMenor = (altura1 = 0, taxa1 = 0, altura2 = 0, taxa2 = 0) => {
    let menor, maior
    
    if (altura1 > altura2) {
        console.log('A menor altura é ' + altura2.toFixed(2) + 'm')
        if(taxa2 > taxa1) {
            let ano = 0;
            while (altura1 > altura2) {
                altura1 = altura1 + (12 * (taxa1 / 100))
                altura2 = altura2 + (12 * (taxa2 / 100))
                ano++
            }
            console.log(`Em ${ano} ano(s) a crinça menor vai ultrapassar a maior`)
            console.log(`Altura final da das crianças`)
            console.log(`Criança 1: ${altura1.toFixed(2)}m`)
            console.log(`Altura final da das crianças`)
            console.log(`Criança 2: ${altura2.toFixed(2)}m`)
        }
    } else if (altura2 > altura1) {
        console.log(`A menor altura é ${altura1.toFixed(2)}m`)
        if(taxa1 > taxa2) {
            let ano = 0;
            while (altura2 > altura1) {
                altura1 = altura1 + (12 * (taxa1 / 100))
                altura2 = altura2 + (12 * (taxa2 / 100))
                ano++
            }
            console.log(`Em ${ano} ano(s) a crinça menor vai ultrapassar a maior`)
            console.log(`Altura final da das crianças`)
            console.log(`Criança 1: ${altura1.toFixed(2)}m`)
            console.log(`Altura final da das crianças`)
            console.log(`Criança 2: ${altura2.toFixed(2)}m`)
        }
    } else if (altura1 === altura2) {
        console.log('As duas alturas são iguais')
        if(taxa2 > taxa1) {
            let ano = 0;
            do {
                altura1 = altura1 + (12 * (taxa1 / 100))
                altura2 = altura2 + (12 * (taxa2 / 100))
                ano++
            } while (altura1 > altura2)
            console.log(`Em ${ano} ano(s) a crinça 2 vai ultrapassar a outra`)
            console.log(`Altura final da das crianças`)
            console.log(`Criança 1: ${altura1.toFixed(2)}m`)
            console.log(`Altura final da das crianças`)
            console.log(`Criança 2: ${altura2.toFixed(2)}m`)
        } else if (taxa1 > taxa2) {
            let ano = 0;
            do {
                altura1 = altura1 + (12 * (taxa1 / 100))
                altura2 = altura2 + (12 * (taxa2 / 100))
                ano++
            } while (altura2 > altura1)
            console.log(`Em ${ano} ano(s) a crinça 1 vai ultrapassar a outra`)
            console.log(`Altura final da das crianças`)
            console.log(`Criança 1: ${altura1.toFixed(2)}m`)
            console.log(`Altura final da das crianças`)
            console.log(`Criança 2: ${altura2.toFixed(2)}m`)
        } else {
            console.log('As duas crianças sempre vão ter o mesmo tamanho')
        }
    } else {
        console.log('Valor Invalido')
    }
}

maiorMenor(1.67, 1, 1.50, 4)
console.log('--------------------------------------------')
maiorMenor(1.50, 4, 1.67, 1)
console.log('--------------------------------------------')
maiorMenor(1.50, 4, 1.50, 1)
console.log('--------------------------------------------')
maiorMenor(1.60, 1, 1.50, 1.2)