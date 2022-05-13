const bissesto = (ano = 0) => {
    if (ano < 0) {
        console.log('Is it a funny?')
        console.log('Number Invalid!')
    } else {
        const option1 = ano % 4 === 0 && ano % 100 !== 0; 
        const option2 = ano % 4 === 0 && ano % 100 === 0 && ano % 400 === 0;

        if (option1 || option2) {
            console.log(`The year ${ano} is leap year`)
        } else {
            console.log(`The year ${ano} is not a leap year`)
        }
    }
}

bissesto(2004)