async function puxadDados() {
  try {
    const responseDados = await fetch("./dados.json");
    const jsonDados = await responseDados.json();
    document.body.innerText = jsonDados.aula;
  } catch (erro) {
    console.log(erro);
  }
}

puxadDados();

async function puxarDados2() {
  const responseDados = fetch("./dados.json");
  const responseClientes = fetch("./clientes.json");

  const jsonDados = await (await responseDados).json();
  const jsonClientes = await (await responseClientes).json();

  console.log(jsonDados);
  console.log(jsonClientes);
}

puxarDados2();

async function iniciarAsync() {
  await new Promise((kaka) => {
    setTimeout(() => {
      console.log("depois de 1s");
      kaka();
    }, 1000);
  });
  console.log("Acabou");
}

iniciarAsync();
console.log(iniciarAsync);
