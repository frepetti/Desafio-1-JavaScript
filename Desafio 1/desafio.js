var numeros = [2,10,5,4,8];

// Incrementar el primer elemento en 1
var primerResultado = numeros[0] + 1;//O ++numeros[0]

// Modificar el segundo elemento por el string JavaScript
numeros[1] = "JavaScript";
var segundoResultado = numeros[1];

//Sumarle al tercer elemento el primero y multiplicar por 12
var tercerResultado = (numeros[2] + numeros[0]) * 12;

//Usar Math.random
var numeroRandom = Math.floor((Math.random() * 100) + 1);
var tercerResultadoBis = tercerResultado + numeroRandom;

//Descrementar el cuarto elemento en 1
var cuartoResultado = numeros[3] - 1;//O --numeros[3]

//Obtener el modulo entre el resultado del punto 3 y el elemento numero 5
var quintoResultado = tercerResultado % numeros[4];
var quintoResultadoBis = tercerResultadoBis % numeros[4];

console.log(
    "El primer resultado es: " + primerResultado,
    "El segundo resultado es: " + segundoResultado,
    "El tercer resultado es: " + tercerResultado,
    "El numero random es: " + numeroRandom,
    "El tercer resultado con Math.random es: " + tercerResultadoBis,
    "El cuarto resultado es: " + cuartoResultado,
    "El quinto resultado es: " + quintoResultado,
    "El quinto resultado con Math.random es: " + quintoResultadoBis,
)

////////

//Calculadora

var numeroUno = parseInt(prompt("Por favor ingrese un Numero"));
var numeroDos = parseInt(prompt("Por favor ingrese un Numero"));

var suma = numeroUno + numeroDos;
var resta = numeroUno - numeroDos;
var multi = numeroUno * numeroDos;
var div = numeroUno / numeroDos;

console.log(
    "La Suma da: " + suma,
    "La Resta da: " + resta,
    "La Multiplicacion da: " + multi,
    "La Division da: " + div,
)