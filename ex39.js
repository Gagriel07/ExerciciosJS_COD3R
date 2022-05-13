const trocarValor = (vetor1 = [], vetor2 = []) => {
  if (vetor1.length === vetor2.length) {
    console.log(`Vetor1 antigo: [${vetor1.join(', ')}]`);
    console.log(`Vetor2 antigo: [${vetor2.join(', ')}]`);
    console.log("------------------------------------------------------------");
    for (let i = 0; i < vetor1.length; i++) {
      let contador = 0;

      vetor1.push(vetor2[contador]);
      vetor2.push(vetor1[contador]);
      vetor1.shift();
      vetor2.shift();

    }

    console.log(`Vetor1 novo: [${vetor1.join(', ')}]`);
    console.log(`Vetor2 novo: [${vetor2.join(', ')}]`);
  } else {
    console.log("------------------------------------------------------------");
    console.log("Arrays de tamanhos diferentes!");
  }
};

trocarValor([1, 2, 3], [4, 5, 6]);
trocarValor([1, 2, 3, 8], [4, 5, 6]);
