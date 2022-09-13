// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];
let totalTaxa = 0;
let totalRecebimento = 0;
transacoes.forEach((item, index) => {
  const taxa = transacoes[index].descricao;
  const valor = transacoes[index].valor.slice(3);

  if (taxa.startsWith("Taxa") === true) {
    totalTaxa += +valor;
  } else if (taxa.startsWith("Recebimento") === true) {
    totalRecebimento += +valor;
  }
});
console.log(
  `O total das taxas é de R$ ${totalTaxa},00 e o total de Recebimentos foi de R$ ${totalRecebimento},00`
);

// Retorne uma array com a lista abaixo

const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
const newTransportes = transportes.split(";");
console.log(newTransportes);

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

const arrayHTML = html.split("span").join("a");
console.log(arrayHTML);

// Retorne o último caracter da frase
const frase = "Melhor do ano!";

console.log(frase.charAt(frase.length - 1));

// Retorne o total de taxas
const transacoesBanco = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];
let contador = 0;
transacoesBanco.forEach((item, index) => {
  const newTransacoes = transacoesBanco[index].trim().toLowerCase();
  if (newTransacoes.startsWith("taxa") === true) {
    contador += 1;
  }
});

console.log(`Existem ${contador} palavras Taxa no Array acima.`);
