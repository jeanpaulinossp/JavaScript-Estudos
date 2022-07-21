let n1 = document.getElementById ('n1');
let n2 = document.getElementById ('n2');
let r = document.getElementById ('r')



function calcular () {
    let resultado = n1.valueAsNumber + n2.valueAsNumber;
    r.textContent = isNaN (resultado) ? '' : resultado;
}

document.addEventListener ('input', calcular);



