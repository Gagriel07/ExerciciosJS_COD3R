const util = (number = 0) => {
    switch (number) {
        case 1: case 7:
            console.log('This Date is weekend');
            break;
        case 2: case 3: case 4: case 5: case 6:
            console.log('This Date is weekday');
            break;
        default:
            console.log('ERROR')
            break;
    }
}

util(5)

