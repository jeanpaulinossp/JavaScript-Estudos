/*Se listarmos todos os números naturais abaixo de 10 que são múltiplos de 3 ou 5, obtemos 3, 5, 6 e 9. A soma desses múltiplos é 23.

Encontre a soma de todos os múltiplos de 3 ou 5 abaixo de 1000.*/

let multiplos = [];
let resultado = 0;

for (let i = 3; i < 1000; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
        multiplos.push(i);
    }
}

for (let i = 0; i < multiplos.length; i++) {
    resultado = resultado + multiplos[i];
}

console.log ("O Resultado é: " + resultado);

