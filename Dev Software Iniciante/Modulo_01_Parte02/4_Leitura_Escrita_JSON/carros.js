let fs = require ("fs");
let nomeArquivo = "estoque.json";
let carros = ["Gol", "Palio", "Uno", "Celta"];
let concessionaria = {
    nome: "Concessionaria XYZ",
    carros
}

fs.writeFile (nomeArquivo, JSON.stringify(concessionaria), function (err) {
    if (err) {
        console.log (err);
    } else {
        fs.readFile (nomeArquivo, "utf-8", function (err, data) {
            if (err) {
                console.log (err);
            } else {
                let obj = JSON.parse (data);
                obj.carros.push ("HRV");
                console.log (obj);
                fs.writeFile (nomeArquivo, JSON.stringify(obj), function (err) {
                    if (err) {
                        console.log (err);
                    }
                })
            }
        })
    }
});