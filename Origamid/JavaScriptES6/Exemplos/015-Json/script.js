const resp = fetch("./dados.json")
  .then((res) => res.json())
  .then((resJson) => {
    return resJson;
  });

console.log(resp);

const configuracoes = {
  player: "Google",
  tempo: 25.5,
  aula: "2.1 JavaScript",
};

localStorage.config = JSON.stringify(configuracoes);

console.log(JSON.parse(localStorage.config));
