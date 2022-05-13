const verificar = (valor1 = '', valor2 = '') => {
    if(valor1.toLocaleLowerCase().includes(valor2) || valor2.toLocaleLowerCase().includes(valor1)) {
        return true
    } else {
        return false
    }
}

console.log(verificar('Teste de Produto', 'teste'))
console.log(verificar('Testando', 'teste'))