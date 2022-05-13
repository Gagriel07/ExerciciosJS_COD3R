const revenda = (veiculo = '') => {
    switch (veiculo.toUpperCase()) {
        case 'HATCH':
            console.log('Compra efetuada com sucesso');
            break;
        case 'SEDANS': case 'MOTOCICLETAS': case 'CAMINHONETES':
            console.log('Tem certeza que não prefere este medelo?');
            break;
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui')
            break;
    }
}

revenda('HATCH')
revenda('SEDANS')
revenda('FERRARI')