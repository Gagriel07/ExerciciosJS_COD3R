const feira = (fruta = '') => {
    switch (fruta.toUpperCase()) {
        case 'MAÇA':
            console.log('Não vendemos esta fruta aqui');
            break;
        case 'KIWI':
            console.log('Estamos com escassez de kiwis');
            break;
        case 'MELANCIA':
            console.log('Aqui está, são 3 reais o quilo');
            break;
        default:
            console.log('ERROR');
            break;
    }
}

feira('melancia')