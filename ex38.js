const imprimirNumeros = (inicio = 0, fim = 100) => {
  if (inicio < fim) {
    for (; inicio < fim; inicio++) {
      if (inicio % 2 !== 0) {
        console.log(inicio);
      }
    }
    console.log('--------------------------------------------------')
  } else {
    for (; fim < inicio; inicio--) {
      if (inicio % 2 !== 0) {
        console.log(inicio);
      }
    }
    console.log('--------------------------------------------------')
  }
};

imprimirNumeros();
imprimirNumeros(100, 0);
