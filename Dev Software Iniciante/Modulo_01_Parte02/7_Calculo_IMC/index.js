function calcularIMC () {
    let altura = parseFloat(document.getElementById ("altura").value);
    let peso = parseFloat(document.getElementById ("peso").value);
    let imc = peso / (altura * altura);
    let imcResultado = "";
        if (imc < 18.5) {
            imcResultado = "abaixo do normal";
        } else if ((imc >= 18.5) && (imc < 25)) {
            imcResultado = "normal";
        } else if ((imc >= 25) && (imc <30)) {
            imcResultado = "sobrepeso";
        } else if ((imc >= 30) && (imc < 40)) {
            imcResultado = "obesidade";
        } else {
            imcResultado = "obesidade grave"
        }


    document.getElementById ("resultado").innerHTML = "Seu IMC é: " + imc;
    document.getElementById ("descricaoResultado").innerHTML = "Sua classificação no IMC é: " + imcResultado;
    
}
function limpar () {
    document.getElementById ("altura").value = 0;
    document.getElementById ("peso").value = 0;
    document.getElementById ("resultado").innerHTML = "";
    document.getElementById ("descricaoResultado").innerHTML = "";
}