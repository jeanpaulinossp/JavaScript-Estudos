const doc = fetch("./doc.txt");
const conteudo = document.querySelector(".conteudo");

doc
  .then((res) => {
    return res.text();
  })
  .then((body) => {
    conteudo.innerText = body;
  });

const url = fetch("https://viacep.com.br/ws/37950000/json");
const cep = document.querySelector(".cep");
//

url
  .then((res) => {
    return res.json();
  })
  .then((body) => {
    cep.innerText = body.localidade;
  });

const estilo = fetch("./style.css");
const style = document.createElement("style");
const head = document.querySelector("head");
//

estilo
  .then((res) => {
    return res.text();
  })
  .then((body) => {
    style.innerHTML = body;
    head.appendChild(style);
  });
