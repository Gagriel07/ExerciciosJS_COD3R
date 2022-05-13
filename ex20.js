const cedula = (valor = 0) => {
  let nota100 = 0;
  let nota50 = 0;
  let nota10 = 0;
  let nota5 = 0;
  let nota1 = 0;
  let valorIncial = valor;

  while (valor > 0) {
    if (valor >= 100) {
      nota100++;
      valor -= 100;
    } else if (valor >= 50) {
      nota50++;
      valor -= 50;
    } else if (valor >= 10) {
      nota10++;
      valor -= 10;
    } else if (valor >= 5) {
      nota5++;
      valor -= 5;
    } else if (valor >= 1) {
      nota1++;
      valor -= 1;
    }
  }

  console.log(`Valor inserido = ${valorIncial}`)

  if (nota100 != 0) {
      console.log(`${nota100} nota(s) de R$ 100`)
  }
  if (nota50 != 0) {
      console.log(`${nota50} nota(s) de R$ 50`)
  }
  if (nota10 != 0) {
      console.log(`${nota10} nota(s) de R$ 10`)
  }
  if (nota5 != 0) {
      console.log(`${nota5} nota(s) de R$ 5`)
  }
  if (nota1 != 0) {
      console.log(`${nota1} nota(s) de R$ 1`)
  }
};

cedula(7);
