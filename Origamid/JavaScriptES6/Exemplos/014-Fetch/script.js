// => text
const doc = fetch("./doc.txt");
const conteudo = document.querySelector(".conteudo");

doc
  .then((res) => {
    return res.text();
  })
  .then((body) => {
    conteudo.innerText = body;
  });
//----------------------------------------------------------

// => json
const url = fetch("https://viacep.com.br/ws/37950000/json");
const cep = document.querySelector(".cep");

url
  .then((res) => {
    return res.json();
  })
  .then((body) => {
    cep.innerText = body.localidade;
  });
//----------------------------------------------------------

// => style
const estilo = fetch("./style.css");
const style = document.createElement("style");
const head = document.querySelector("head");

estilo
  .then((res) => {
    return res.text();
  })
  .then((body) => {
    style.innerHTML = body;
    head.appendChild(style);
  });
//----------------------------------------------------------

// => blob
const img = fetch("./img.png");
const imgDom = document.querySelector("img");

img
  .then((res) => res.blob())
  .then((body) => {
    const blobUrl = URL.createObjectURL(body);
    imgDom.src = blobUrl;
    console.log(blobUrl);
  });
//----------------------------------------------------------

// => clone
const copy = fetch("https://viacep.com.br/ws/37950000/json");

copy
  .then((res) => {
    const res2 = res.clone();
    res.text().then((text) => {
      console.log(text);
    });
    res2.json().then((json) => {
      console.log(json);
    });
    console.log(res);
  })
  .then((body) => {
    console.log(body);
  });
//----------------------------------------------------------

// => headers
const headers = fetch("https://viacep.com.br/ws/37950000/json");

headers.then((res) => {
  console.log(res);
  res.headers.forEach(console.log);
});
//----------------------------------------------------------

// => status && ok
const statusOk = fetch("./docs.txt");

statusOk.then((res) => {
  console.log(res.status); // status, url ou type
  if (res.status === 404) {
    console.log("Página não existe");
  }
});
