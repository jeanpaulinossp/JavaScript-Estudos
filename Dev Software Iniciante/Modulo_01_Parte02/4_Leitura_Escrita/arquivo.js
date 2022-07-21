let fs = require ("fs");
let nomeArquivo = "meuArquivo.txt";


fs.writeFile (nomeArquivo, "Hello World!", function (err) {
    if (err !== null) {
        console.log (err);
    } else {
        fs.appendFile (nomeArquivo, "\nnova linha no texto", function (err) {
            if (err) {
                console.log (err);
            } else {
                fs.readFile (nomeArquivo, "utf-8", function (err, data) {
                    if (err) {
                        console.log (err);
                    } else {
                        console.log (data);
                    }
            });
        }
    });
    }
});