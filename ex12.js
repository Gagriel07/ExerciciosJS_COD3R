const factorial = (number = 0) => {
  let message = `!${number} = ${number}`;
  let result = number;
  for (let i = number; i != 0; i--) {
    if (i != number) {
      message += " x " + i;
      result *= i;
    }
  }

  console.log(`${message} = ${result}`);
};

factorial(3);
