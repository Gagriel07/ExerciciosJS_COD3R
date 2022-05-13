const triangulo = (x, y, z) => {
    const equilatero = x == y && y == z;
    const isosceles = !equilatero && (x == y || x == z || y == x || y == z);
    const escaleno = !isosceles;
    if (equilatero) {
        console.log('Todos os lados são iguais\nSendo então um triângulo Equilátero')
    } else if (isosceles) {
        console.log('Dois lados são iguais\nSendo então um triângulo Isósceles')
    } else if (escaleno) {
        console.log('Todos os lados são diferentes\nSendo então um triângulo Escaleno')
    }
}

triangulo(2, 2, 2)