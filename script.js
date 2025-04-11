let contador = 0;

const contadorElemento = document.getElementById("contador");
const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
  contador++;
  contadorElemento.textContent = contador;
});