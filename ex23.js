let mediaPonderada = (id, nota1, nota2, nota3) => {
    maiorNota = 0;
    n1 = 0
    n2 = 0
    if(nota1 > nota2 && nota1 > nota3 || nota1 === nota2 && nota1 === nota3) {
        maiorNota = nota1;
        n1 = nota2;
        n2 = nota3
    } else if (nota2 > nota1 && nota2 > nota3) {
        maiorNota = nota2;
        n1 = nota1;
        n2 = nota3;
    } else if (nota3 > nota1 && nota3 > nota2) {
        maiorNota = nota3;
        n1 = nota1;
        n2 = nota2;
    } else console.log('Valor Invalido')

    let media = ((maiorNota * 4) + (n1 * 3) + (n2 * 3)) / (4 + 3 + 3);
    if (media >= 5) {
        console.log(`Codigo do aluno: ${id}`)
        console.log(`Nota1: ${nota1}`)
        console.log(`Nota2: ${nota2}`)
        console.log(`Nota3: ${nota3}`)
        console.log(`Maior Nota: ${maiorNota}`)
        console.log(`Média Ponderada: ${media}`)
        console.log(`Situação: Aprovado`)
    } else {
        console.log(`Codigo do aluno: ${id}`)
        console.log(`Nota1: ${nota1}`)
        console.log(`Nota2: ${nota2}`)
        console.log(`Nota3: ${nota3}`)
        console.log(`Maior Nota: ${maiorNota}`)
        console.log(`Média Ponderada: ${media}`)
        console.log(`Situação: Reprovado`)
    }
}

mediaPonderada(5, 8, 7, 9)
console.log('---------------------------')
mediaPonderada(5, 3, 5, 4)