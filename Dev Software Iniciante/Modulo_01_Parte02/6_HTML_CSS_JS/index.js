console.log ("Hello World!")
document.write ("Texto qualquer em arquivo separado!")


//document.getElementById busca um elemento ID de outro documento
//innerHTML sobrescreve um arquivo de outra propriedade
//style chama as funções CSS
//style.display é uma função do CSS que permite modificar um elemento
//style.display = "none"; faz o elemento selecionado sumir.
//style.display = "block"; faz o elemento selecionado aparecer.
function clickBotao () {
    alert ("Hello World!");
    document.getElementById ("paragrafo1").innerHTML = "Texto alterado som sucesso!"
    //document.getElementById ("paragrafo1").style.display = "none";

    for (let i = 0; i < document.getElementsByClassName ("paragrafo").length; i++) {
        document.getElementsByClassName("paragrafo")[i].style.color = "blue";
        document.getElementsByClassName("paragrafo")[i].style.fontWeight = "bold";
        
    }
}

function clickBotao2 () {
    alert ("Hello World");
    document.getElementById ("paragrafo1").style.display = "block";

}

function ligarLampada () {
    document.getElementById ("lampada").src = "lampada_ligada.jpg";
}

function desligarLampada () {
    document.getElementById ("lampada").src = "lampada_desligada.png";
}