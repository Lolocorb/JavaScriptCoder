// //Funciones de orden superior
// //funcion que retorna funcion
// function mayorQue(n){
//     return(m)=>m>=n
// }

// let mayorDeEdad=mayorQue(18);

// let edad=parseInt(prompt("Ingresa tu edad"));
// console.log(mayorDeEdad(edad));

// //funcion que recibe por parametro otra funcion

// const preciosProductos=[99.99,76.05,87.21,43,59]

// let total=0
// function sumarTotal(precio){
//     total+=precio;//total=total+precio
// }

// function realizar(operacion,lista){
//     for(const elemento of lista){
//         operacion(elemento);
//     }
// }
// realizar(sumarTotal,preciosProductos);
// console.log("LA suma de todos los productos de tu carro es: $"+total)

//parametros con arrows=>
// const listaDeBandas=["Twenty one pilots","Duki","Eladio Carreon","Quimera","Mac Miller"]

// function porCadaUno(arr, fn){
//     for(const elemento of arr){
//         fn (elemento)
//     }
// }

// const aMayusculas=[];
// porCadaUno(listaDeBandas,(banda)=>aMayusculas.push(banda.toUpperCase()))
// console.log(aMayusculas)

//Metodoso de busqueda y transformacion

const libros=[
         {
             isbn:"2345123",
             titulo:"Harry Potter",
             genero:"Aventuras",
             precio:230.90
         },
         {
            isbn:"9099777",
             titulo:"Elige tu propia aventura",
             genero:"Aventuras",
             precio:199.00
         },
         {
            isbn:"12121212",
             titulo:"JS para principiantes",
             genero:"Educacion",
             precio:290.00
         },
         {
             isbn:"3333333",
             titulo:"Diccionario de Frances-Español",
             genero:"Diccionario",
             precio:99.90
         },
     ];
    
//forEach
//imprimo el titulo de cada libro
 libros.forEach((libro)=>console.log(libro.titulo))

//find
//busco si existe un libro con un titulo especifico
let encontrado=libros.find((libro)=>libro.titulo=="JS para principiantes");
console.log(encontrado);

encontrado=libros.find((libro)=>libro.titulo=="Diccionario de Frances-Español");
console.log(encontrado);
if(encontrado!= undefined){
    console.log("El libro se encuentra en stock");
}else{
    console.log("No se encuentra en stock!");
}

//filter
//filtro los libros con precio menor a 200
const baratos=libros.filter((libro=>libro.precio<200));
console.log(baratos);

//some
const existe=libros.some((libro)=>libro.genero=="Diccionario");
console.log("Hay diccionario "+existe)

//map 
const librosConIva=libros.map((libro)=>{
    return{
        isbn:libro.isbn,
        titulo:libro.titulo,
        genero:libro.genero,
        precio:libro.precio *1.21
    }
});

console.table(librosConIva)

//Date

let ahora=new Date();
console.log(ahora);

//mas presentable
console.log(ahora.toLocaleDateString());

//solo la hora
console.log (ahora.toLocaleTimeString ())