let parrafo = document.querySelector("p");
parrafo.innerHTML = "Indica un número de 1 al 10";

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function intentoDeUsuario() {
  alert("click");
}

function generarNumeroSecreto() {}

asignarTextoElemento("h1", "Juego del numero secreto");
