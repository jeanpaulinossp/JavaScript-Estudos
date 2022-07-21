// function 1 - Retorna nome funcionário que tem maior salário da empresa
// function 2 - Retorna o nome do funcionário que tem o menor salário da empresa
// function 3 - Função que retorna a média salarial da empresa
// function 4 - Função recebe o maior salário de determinado setor
// function 5 - Função recebe o menor salário de determinado setor
// function 6 - Função que retorna a média salarial de determinado setor

let fs = require ("fs");
let funcionarios = null;

fs.readFile ("funcionarios.json", "utf-8", function (err, data) {
    if (err) {
        console.log (err);
    } else {
        funcionarios = JSON.parse(data).funcionarios;
        console.log ("Maior salário da empresa: " + JSON.stringify (maiorSalario()));
        console.log ("Maior salário setor COMERCIAL: " + JSON.stringify (maiorSalario ("Comercial")));
        console.log("Maior salário setor PRODUÇÃO: " + JSON.stringify (maiorSalario ("Produção")));
        console.log ("Maior salário setor ADMINISTRATIVO: " + JSON.stringify (maiorSalario ("Administrativo")));
        console.log ("---------------------------------------------------------------------------------------")
        console.log ("Menor salário da empresa: " + JSON.stringify (menorSalario()));
        console.log ("Menor salário setor COMERCIAL: " + JSON.stringify (menorSalario ("Comercial")));
        console.log("Menor salário setor PRODUÇÃO: " + JSON.stringify (menorSalario ("Produção")));
        console.log ("Menor salário setor ADMINISTRATIVO: " + JSON.stringify (menorSalario ("Administrativo")));
        console.log ("---------------------------------------------------------------------------------------")
        console.log ("Media salarial da empresa: " + media());
        console.log ("Media salário setor COMERCIAL: " + JSON.stringify (media ("Comercial")));
        console.log("Media salário setor PRODUÇÃO: " + JSON.stringify (media ("Produção")));
        console.log ("Media salário setor ADMINISTRATIVO: " + JSON.stringify (media ("Administrativo")));

    }
});

function maiorSalario (setor) {
    let funcMaiorSalario = null;
    for (let i = 1; i < funcionarios.length; i++) {
        if (setor && (funcionarios[i].setor !== setor )) {
            continue;
        }

        if (funcMaiorSalario === null) {
            funcMaiorSalario = funcionarios[i];
            continue;
        }

        if (funcionarios[i].salario > funcMaiorSalario.salario) {
            funcMaiorSalario = funcionarios[i];
        }
    }
    return funcMaiorSalario;
}

function menorSalario (setor) {
    let funcMenorSalario = null;
    for (let i = 0; i < funcionarios.length; i++) {
        if (setor && (funcionarios[i].setor !== setor )) {
            continue;
        }

        if (funcMenorSalario === null) {
            funcMenorSalario = funcionarios[i];
            continue;
        }

        if (funcionarios[i].salario < funcMenorSalario.salario) {
            funcMenorSalario = funcionarios[i];
        }
    }
    return funcMenorSalario;
}


function media () {
    let total = 0;
    for (let i = 0; i < funcionarios.length; i++) {
        total += funcionarios[i].salario;
    }
    let media = total / funcionarios.length;
    return media;
}

function media (setor) {
    let total = 0;
    let quantidade = 0;
    for (var i = 0; i < funcionarios.length; i++) {
        if (setor && (funcionarios[i].setor !== setor)) {
            continue;
        }
        quantidade++;
        total += funcionarios[i].salario;
    }
    let media = total / quantidade;
    return media;
}

