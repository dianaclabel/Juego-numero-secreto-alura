let numeroSecreto = 0;
let intentos = 0;
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
  console.log(intentos);

  if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el número en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El número secreto es menor");
    } else {
      asignarTextoElemento("p", "El número secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }

  return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
  return Math.floor(Math.random() * 10) + 1;
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del numero secreto");
  asignarTextoElemento("p", "Indica un número de 1 al 10");
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales();
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
