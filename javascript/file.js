//Ejemplos Javascript

//Tipos de datos
let nombre = "Juan"; // String
//Por su traduccion en ingles, cadena, se refiere claramente a una cadena de caracteres o u texto. se declara con comillas simples o dobles.
let edad = 30; // Number
//Se refiere a valores numericos ya sean enteros o decimales. No usan ningun simbolo para declararse.
let esEstudiante = true; // Boolean
//Se refiere a valores logicos, que solo pueden ser verdadero o falso (true o false).
let Nulo = null; // Null
//Son valores nulos y vacios por razones intencionales

//Tipos de variables
let saludo = "hi"; // Variable let común
//Variables normales que, segun su nombre, pueden cambiar el valor de su contenido en cualquier momento.
const eternamente = "siempre"; // Variable constante
//Variables cuyo valor no puede cambiar una vez asignado. 
var despedida = "bye"; // Variable var
//Se trata de un antiguo antecesor del let, variable común, hoy en dia se considera obseleta por su comportamiento confuso y poco practico.
let hobbies = ["leer", "viajar", "programar"]; // Array
//Variables que contienen mas de un solo valor (desde datos hasta otras variables, incluso otros arrays), se declaran con corchetes. Solo pueden contener un solo TIPO de valor
let direccion = { calle: "Calle Falsa", numero: 123 }; // Object
//A diferencia del array, puede guardar diferentes tipos de datos (por pares de clave y valor), se declara con llaves. Esta variable presenta mas peso para el programa que el array, por lo q se recomienda usarla solo si hace falta.

//Funciones clasicas
function sumar(a, b) {
  return a + b;
}
let resultado = sumar(5, 3);
//Una función clásica en JavaScript es un bloque de código reutilizable que se define con la palabra clave function y sirve para realizar una tarea específica.

//Funciones flecha
const multiplicar = (a, b) => a * b;
let resultadoMultiplicacion = multiplicar(4, 6);
//Las funciones flecha son una forma más concisa de escribir funciones en JavaScript. Se definen utilizando la sintaxis de flecha (=>).

//Estructuras de control
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
//La estructura if-else permite ejecutar diferentes bloques de código según una condición. Si la condición es verdadera, se ejecuta el primer bloque; si es falsa, se ejecuta el segundo bloque.

for (let i = 0; i < hobbies.length; i++) {
  console.log(hobbies[i]);
}
//El bucle for permite repetir un bloque de código un número determinado de veces. 

while (edad < 35) {
  console.log("Aún eres joven");
  edad++;
}
//El bucle while ejecuta un bloque de código mientras una condición sea verdadera.