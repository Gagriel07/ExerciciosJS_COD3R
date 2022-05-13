const calc = (num1 = 0, num2 = 0, operacao = "") => {
  switch (operacao) {
    case "x":
      console.log(`${num1} x ${num2} = ${num1 * num2}`);
      break;
    case "/":
      console.log(`${num1} / ${num2} = ${num1 / num2}`);
      break;
    case "+":
      console.log(`${num1} + ${num2} = ${num1 + num2}`);
      break;
    case "-":
      console.log(`${num1} - ${num2} = ${num1 - num2}`);
      break;
    default:
      console.log("Operação Inválida!");
      break;
  }
};

calc(4, 2, 'x')
calc(4, 2, '/')
calc(4, 2, '+')
calc(4, 2, '-')
