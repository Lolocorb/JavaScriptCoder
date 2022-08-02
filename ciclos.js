//ciclos por conteo -FOR
//for(let i=1; i<11;i++){
//    console.log("Hola coders, ciclo "+i);
//}



//diapo17
//solicitamos un valor al ususario
//let ingresarNumero=parseInt(prompt("Ingresar Numero"))
//En cada repeticion, calculamos el numero ingresado x el numero de repeticiones
//for(let i = 1; i<= 10; i++) {
//    let resultado = ingresarNumero * i ; 
//    console.log(ingresarNumero +" X "+ i +" = "+ resultado);
//}



//diapo 18
//for(let i =1; i <=4; i ++) {
//   let ingresarNombre= prompt ("Ingresar Nombre");

//   console.log("Turno Numero "+i+" Nombre: "+ ingresarNombre);
// }


//Sentencia break
// let password;
// for(let i=1; i<=3;i++){
//     password=prompt("Ingrese la constrasenia");
//      if(password=="coder123"){
//         console.log("Bienvenido usuario");
//         break;
//      }else{
//         console.log("Clave Erronea, quedan "+ (3-i)+" intentos");
//      }
// }



//Sentencia continue
// for(let i = 1; i <= 10; i ++) {
//     if(i == 5){
//         continue;
//     }
//     console.log(i);
// }

//While, Bucle!
 let oracion="";
 let palabra=prompt("Ingresa una palabra para armar una oracion (s-salir del juego) ");

 while(palabra!="s"){
    oracion = oracion + " " + palabra;
    palabra=prompt("Ingresa otra palabra para armar la oracion (s-salir del juego)");
 }

 alert("La oracion formada es: "+oracion);