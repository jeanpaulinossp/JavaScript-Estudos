let operacao = process.argv[2];
let valor1 = process.argv[3];
let valor2 = process.argv[4];
let valor3 = process.argv[5];
let resultado;

if (operacao == "soma") {
    resultado = (parseInt (valor1)) + (parseInt (valor2));
}

else if (operacao == "subtracao") {
    resultado = (parseInt (valor1)) - (parseInt (valor2));
}
else if (operacao == "multiplicacao") {
    resultado = (parseInt (valor1)) * (parseInt (valor2));
}
else if (operacao == "divisao") {
    resultado = (parseInt (valor1)) / (parseInt (valor2));
}
else if (operacao == "resto") {
    resultado = (parseInt (valor1)) % (parseInt (valor2));
}
else if (operacao == "porcentagem") {
    resultado = (parseInt (valor1)) * (parseInt (valor2)) / 100;
}else {
    console.log ("Não reconhecemos essa operação.");
}

console.log (resultado);