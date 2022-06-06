import "./styles.css";
let cantidadMenores: number = 0;
let cantidadMayores: number = 0;
let cantidadPersona: number = 0;
function aleatorio(minimo: number, maximo: number): number {// debe ser una accion, por ejemplo generarNumeroAleatorio
  return Math.floor(Math.random() * (maximo - minimo - 1)) + minimo;
}

function cargarArreglo(numeroArreglo: number[], dimensionArreglo: number) {
  let indice: number;
  for (indice = 0; indice < dimensionArreglo; indice++) {
    numeroArreglo[indice] = aleatorio(18, 40);
  }
}

function mostrarArreglo(numeroArreglo: number[], dimensionArreglo: number) {
  let indice: number;
  let linea: string = "";
  for (indice = 0; indice < dimensionArreglo; indice++) {
    linea += ` ${numeroArreglo[indice]}`;
  }
  console.log(linea);
}

function contarMenorA21anios(numeroArreglo: number[], dimensionArreglo: number) {
  let indice: number;

  for (indice = 0; indice < dimensionArreglo; indice++) {
    if (numeroArreglo[indice] < 21) {
      cantidadMenores = cantidadMenores + 1;
      cantidadPersona = cantidadPersona + 1;
    } else {
      cantidadMayores = cantidadMayores + 1;
      cantidadPersona = cantidadPersona + 1;
    }
  }
}

let dimArreglo: number = 270;
let numArreglo: number[] = new Array(dimArreglo);
cargarArreglo(numArreglo, dimArreglo);
mostrarArreglo(numArreglo, dimArreglo);
contarMenorA21anios(numArreglo, dimArreglo);
console.log(
  `La cantidad de personas menores de 21 años son: ${cantidadMenores}`
);
console.log(
  `La cantidad de personas mayores de 21 años son: ${cantidadMayores}`
);
console.log(`La cantidad de personas en el boliche es: ${cantidadPersona}`);
//esta muy bien tu ejercicio
