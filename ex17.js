const aumento = (plano = '', salario = 0) => {
    switch (plano.toUpperCase()) {
        case 'A':
            console.log(`Salário anterior = ${salario}`);
            console.log(`Novo Salário = ${salario + (salario * 0.10)}`);
            console.log('Aumento de 10% em relação ao salario anterior');
            break;
        case 'B':
            console.log(`Salário anterior = ${salario}`);
            console.log(`Novo Salário = ${salario + (salario * 0.15)}`);
            console.log('Aumento de 15% em relação ao salario anterior');
            break;
        case 'C':
            console.log(`Salário anterior = ${salario}`);
            console.log(`Novo Salário = ${salario + (salario * 0.20)}`);
            console.log('Aumento de 20% em relação ao salario anterior');
            break;
        default:
            console.log('Plano Inválido')
    }
}

aumento('A', 1000)
aumento('B', 1000)
aumento('C', 1000)
aumento('D', 1000)