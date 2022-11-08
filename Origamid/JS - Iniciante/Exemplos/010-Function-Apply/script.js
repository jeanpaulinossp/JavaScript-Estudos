const numeros = [10, 5, 3, 22, 150, 888, 900, 52, 65, 71, 25];

console.log(Math.max(numeros));

console.log(Math.max.apply(null, numeros));

// o apply consegue fazer a varredura de uma array se passado como segundo argumento
