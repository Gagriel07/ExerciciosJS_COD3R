const nota = (nota = 0) => {
    if (!Number.isInteger(nota)) {
        return 'Não é permitido numeros flutuantes!'
    }
    if (nota < 0 || nota > 100) {
        return 'Nota Invalida!'
    }

    if (nota < 38) {
        return 'Aluno Reprovado'
    }

    let teste = `${nota - 5}`.charAt(1)
    let notaFinal = 0
    if (Number.parseInt(teste) == 2) {
        notaFinal = nota + 3;
    } else if (Number.parseInt(teste) == 3) {
        notaFinal = nota + 2;
    } else {
        notaFinal = nota + 1;
    }

    return `Aluno aprovado com nota final de ${notaFinal}`;
}

console.log(nota(59))

