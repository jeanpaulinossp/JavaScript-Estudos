const calculadora = {
    soma: function (a,b) {
        return a + b;
    },
    subtrair: function (a,b) {
        return a - b;
    },
    multiplicar: function (a,b) {
        return a * b;
    },
    dividir: function (a,b) {
        return a / b;
    }
}

console.log (calculadora.soma (10,2));
console.log (calculadora.subtrair (10,2));
console.log (calculadora.multiplicar (10,2));
console.log (calculadora.dividir (10,2));