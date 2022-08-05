// //Arrays en JS

// const listaViaje=["pasaporte","medias","buzo","guantes","cepillo de dientes","dinero","ropa interior"];
// console.log(listaViaje);

// console.log("No debo olvidarme el "+listaViaje[4]);
// //recorriendo el array
// // for(let i=0;i<6;i++){
// //     console.log(listaViaje[i])
// // }
// //Se utliza la propriedad length para que lea automaticamente cual es la longuitud del array
// console.log("Cual es la longuitud del array? "+listaViaje.length)

// for(let i=0;i<listaViaje.length;i++){
//     console.log(listaViaje[i])
// }

// //metodo push, se pueden pushear varios de una vez
// listaViaje.push("Lentes de sol","gatitos");
// console.log(listaViaje);

// //metodo unshift
// listaViaje.unshift("Jean")
// console.log(listaViaje);

// //eliminar elementos shift(el primero) pop (el ultimo
// listaViaje.shift();
// listaViaje.pop();
// console.log(listaViaje)

// //splice elimina en cualquier posicion y cantidad
// listaViaje.splice(3,2)
// console.log(listaViaje)

// //join
// let cadenaJoin=listaViaje.join(" - ");
// console.log(cadenaJoin);

// //concat
// const listaAlmacen=["pan","cafe","azucar"];
// const listaCarniceria=["asado","carne picada"," pollo"]
// const compras=listaAlmacen.concat(listaCarniceria)
// console.log(compras);

// //slice
// const panYCafe=listaAlmacen.slice(0,3);
// console.log(panYCafe)
 
// //index0f
// const nombres=["Lorenzo","Sandro","Paula","Camilo"];
// let posicionElemento=nombres.indexOf("Sandro");
// console.log(posicionElemento);
// if(posicionElemento!=-1){
//     console.log("El elemento buscado se encuentra en la posicion "+posicionElemento)
// }else{
//     console.log("El elemento no se encuentra en la lista")
// }

// //includes
// let estaEnLaLista=nombres.includes("Camilo"); //true
// console.log(estaEnLaLista)

// let noEstaEnLista=nombres.includes("Lazaro"); //false
// console.log(noEstaEnLista)

// //reverse
// nombres.reverse()
// console.log (nombres)
//sobre escribe la lista, es destructivo(modifica el array original)


//array de objetos, esto geneera estructuras complejas de datos

// const productos=[
//     {
//         tipo:"Mate",
//         Cantidad:1,
//         precio:1000
//     },
//     {
//         tipo:"Azucarera",
//         Cantidad:1,
//         precio:800 
//     },
//     {
//         tipo:"Kit Tablita",
//         Cantidad:1,
//         precio:2000 
//     }

// ];

// //for..of para recorrer arrays de objetos
// for(const producto of productos){
//     console.log(producto.tipo);
//     console.log(producto.Cantidad);
//     console.log(producto.precio);
// }


// class Producto{
//     construtor(nombre, precio){
//         this.nombre = nombre.toUppercase();
//         this.precio = parseFloat(precio);
//         this.vendido = false;
//     }
//     sumaIva(){
//         this.precio - this.precio* 1.21;
//     }
    
// }

// //declaramos un array de productos para almacenar objetos
// const productos =[];
// productos.push(new Producto ("Mate","1000"))
// productos.push(new Producto ("Mate","1000"))
// productos.push(new Producto ("Mate","1000"))
// console.log("Lista de productos:");
// console.log(productos);
// //Iteramos el array con for...of para modificarlos a todos
// for(const producto of productos)
// producto.sumaIva();