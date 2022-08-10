//condicional simple
// let gustoHelado=prompt("Ingresa tu gusto de helado favorito");

// if(gustoHelado== "menta granizada"){
//     console.log("Te ganaste 1/2kg de helado");
// }else{
//     console.log("Buena eleccion "+gustoHelado+" , lamentablemente no ganaste nada gil");
// }


//Ejercicio: Preguntar al ususario el anio de su vehiculo
//Si el vehiculo tiene > de 10 anios de antiguedad le avisamos que abona 200usd de patente anual
//Sino el vehiculo abona 100usd de patente



// const ANIOACTUAL=2022;
// let aniodevehiculo=parseInt(prompt ("Ingresa el anio del vehiculo"));
// let antiguedad=ANIOACTUAL - aniodevehiculo;

// if (antiguedad <10){
//     console.log("abona 200usd de patente");
// } else{
//     console.log("abona 100usd de patente")
// }

// let puntos=0;
// let banda=prompt("Cual es la banda que estabamos escuchando en la clase");
// let cancion=prompt("Cual es la ultima cancion de esa banda");

// if((banda=="daft punk") && (cancion=="game of love")){
//     console.log("Excelente ganaste 2 puntos");
//      puntos=puntos +2;
// }else if ((banda=="daft punk")&&(cancion!="fame of love")){
//     console.log("Bien la banda, mal la cancion. sumaste 1 punto");
//     puntos=puntos + 1 ;
// }else if ((banda!= "daft punk")&&(cancion=="game of love")){
//     console.log("Bien la cancion, mal la banda. Sumaste 1 punto");
// }else{
//     console.log("Error en ambas preguntas, no sumas puntos")
// }

// //pregunta2
// let nombreMessi=prompt("Ingresa el primer nombre de Messi");

// if((nombreMessi=="Lionel")|| (nombreMessi=="lionel")||(nombreMessi=="LIONEL")){
//     console.log("Excelente ganaste 2 puntos");
//      puntos=puntos +2;
// }else{
//     console.log("Error no sumas puntos");
// }


// console.log("Fin Del Juego-Puntos: "+puntos);

//switch-case

let producto=prompt("Ingresa el producto y te dire su precio (s-para salir)");
let precio=0;

while(producto!="s"){
    switch(producto){
        case "azucar":
        case "Azucar":
        case "AZUCAR":
            console.log("EL azucar sale $200");
            precio=precio+200;
            break;
        case "yerba":
        case "Yerba":
        case "YERBA":
            console.log("La yerba sale $400")
            precio=precio+400;
            break;
        case "fideos":
        case "Fideos":
        case "FIDEOS":
            console.log("Los fideos cuestan $100")
            precio=precio+100;
            break;
        case "alimento de perros":
        case "Alimento de perros":
        case "ALIMENTO DE PERROS":
            console.log("El alimento cuesta $3000")
            precio=precio+3000;
            break;
        default:
            console.log("Ese producto no esta en stock");
            break;    

    }
    producto=prompt("Ingresa el producto y te dire su precio (s-para salir)")
}
console.log("Total a pagar $" +precio);