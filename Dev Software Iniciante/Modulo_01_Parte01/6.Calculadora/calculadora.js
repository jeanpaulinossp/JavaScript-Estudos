let operacao = prompt ("Digite a operação desejada.");
let resultado;

if (operacao == "soma") {
    valor1 = prompt ("Digite o primeiro valor.");
    valor2 = prompt ("Digite o segundo valor.");
    resultado = (parseInt (valor1)) + (parseInt (valor2));
}

else if (operacao == "subtracao") {
    valor1 = prompt ("Digite o primeiro valor.");
    valor2 = prompt ("Digite o segundo valor.");
    resultado = (parseInt (valor1)) - (parseInt (valor2));
}
else if (operacao == "multiplicacao") {
    valor1 = prompt ("Digite o primeiro valor.");
    valor2 = prompt ("Digite o segundo valor.");
    resultado = (parseInt (valor1)) * (parseInt (valor2));
}
else if (operacao == "divisao") {
    valor1 = prompt ("Digite o primeiro valor.");
    valor2 = prompt ("Digite o segundo valor.");
    resultado = (parseInt (valor1)) / (parseInt (valor2));
}
else if (operacao == "resto") {
    valor1 = prompt ("Digite o primeiro valor.");
    valor2 = prompt ("Digite o segundo valor.");
    resultado = (parseInt (valor1)) % (parseInt (valor2));
}
else if (operacao == "porcentagem") {
    valor1 = prompt ("Digite o valor desejado.")
    porcentagem = prompt ("Qual a porcentagem desejada?");
    resultado = (parseInt (valor1)) * (parseInt (porcentagem)) / 100;
}else {
    console.log ("Não reconhecemos essa operação.");
}

console.log (resultado);