// //declaracion de variables
// let equipofavorito;

// //inicializacion de la variable
// equipofavorito="Real Madrid"

// //declaracion e inicializacion de variables 
// let cantidadTitulos=15;

// //declaracion e inicializacion de constantes
// const PI=3.1416;


// //operaciones matematicas
// let edad=56;
// let edad2=23;


// let sumaEdades = edad + edad2; //79
// let restaedades = edad - edad2; //33
// let multiplicacion = edad2 * 2; //46
// let division = edad / 2; //28

// //concatenacion 
// let nombre= "Pepe";
// let apellido= "Gomez";
// const ESPACIO= " ";
// let nombreCompleto = nombre +" "+ apellido; //PepeGomez

// let textoNumero = nombre + edad //Pepe 56 es un String

// //console.log
// console.log("Bienvenidos a la consola!");
// console.log("Mi equipo favorito es:"+equipofavorito);
// console.log("La suma de edades es: "+sumaEdades);
// console.log("El nombre completo del ususario:"+nombreCompleto)



// //prompt
// let usuario= prompt("Ingresa tu usuario");
// console.log("Usuario Ingresado: "+usuario);
// alert("Usuario ingresado "+usuario)

//ejercicio
const ANIOACTUAL=2022;
let anioNacimiento=(prompt ("Ingresa tu anio de nacimiento"));//convierte a numero

//el prompt guarda todo como un string
let edadUsu=ANIOACTUAL - anioNacimiento
alert("Tenes "+edadUsu+" anios")