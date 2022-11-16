// Mude a cor da tela para azul e depois para vermelho a cada 2s.

const body = document.querySelector("body");

setInterval(() => {
  body.classList.remove("vermelho");
  body.classList.add("azul");
}, 2000);

setInterval(() => {
  body.classList.remove("azul");
  body.classList.add("vermelho");
}, 4000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const tempo = document.querySelector(".tempo");

iniciar.addEventListener("click", iniciarTempo);
pausar.addEventListener("click", pausarTempo);
pausar.addEventListener("dblclick", resetarTempo);

let contador = 0;
let timer;

function iniciarTempo() {
  timer = setInterval(() => {
    tempo.innerText = contador++;
  }, 1000);
  iniciar.setAttribute("disabled", "");
}

function pausarTempo() {
  clearInterval(timer);
  iniciar.removeAttribute("disabled", "");
}

function resetarTempo() {
  tempo.innerText = 0;
  contador = 0;
}
