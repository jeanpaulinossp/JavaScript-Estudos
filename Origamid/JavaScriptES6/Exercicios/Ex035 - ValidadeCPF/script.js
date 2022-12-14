import ValidarCpf from "./validarCPF.js";

const cpf = document.querySelector("#cpf");
const validarCpf = new ValidarCpf(cpf).iniciar();

// const validadorCPF = new ValidaCpf();

// console.log(validadorCPF.validar('111 111 111 222'))

console.log(validarCpf);
