let evenOdd = (array = []) => {
    let even = 0
    let odd = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            even++
        } else {
            odd++
        }
    }

    console.log(`Even Numbers: ${even}`)
    console.log(`Odd Numbers: ${odd}`)
}

let addNumberArray = (array = []) => {
    let valor = 0
    for (let i = 0; i < 50; i++) {
        valor = Math.floor(Math.random() * (50 - 1) + 1)
        array.push(valor);
    }
    return array;
}

let array2 = addNumberArray([])
evenOdd(array2);
console.log('--------------------------------------')
console.log(array2)