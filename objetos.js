//Objetos Literales

 const miMouse = {
     marca:"logitech",
     color:"azul;",
     wireless:true,
     modelo:"g203"
 }
 console.log(miMouse);
 console.log("La marca de mi Mouse: "+miMouse.marca)

 miMouse.color = "rojo";
 console.log("Nuevo color de mi mouse: "+miMouse.color)

console.log(miMouse);

//Funcion constructora
 function Automovil(marca,modelo,anio,color){
     this.marca=marca;
     this.modelo=modelo;
     this.anio=anio;
     this.color=color;
     //agregar un metodo
     this.encender=()=>{alert("alerta: El automovil "+this. marca+"  se acaba de encender BRUM BRUM")}
 }
 const auto1=new Automovil("Ford","Ranger",2019,"Azul")
 const auto2=new Automovil("Toyota","901",2022,"Verde")
 const auto3=new Automovil("VW","3121",undefined,"Amarillo")

 //para agregar datos mas tarde
 auto3.anio=2009;

 console.log(auto1);
 console.log(auto2);
 console.log(auto3);


 //llamo al metodo encender
//  auto1.encender();

//  let tieneMarca="marca in auto2";
//  console.log("tiene una propiedad llamada marca???: "+tieneMarca);
 
//  let tienePatente="patente in auto1"
//  console.log("tiene una propiedad llamada patente???: "+tienePatente);

//  for(const prop in miMouse){
//     console.log("Propiedad: "+prop);
//     console.log("Valor: "+miMouse[prop])
//  }



//Metodos de String
// let frase="No todo lo que brilla es ORO";
// console.log("La longitud de la frase en caracterese: "+frase.length);
//toUppercase() transforma toda la cadena a mayusculas
// console.log(frase.toUpperCase());
//toLowerCase() a minusculas
// console.log(frase.toLowerCase());


//clases

class Bicicleta{
    //construcor de objetos de tipo Bici
    constructor(marca,rodado,color, condicion){
        this.marca=marca;
        this.rodado=rodado;
        this.color=color;
        this;condicion=condicion;
    }
    mostrarBicicleta(){
        alert("Marca: "+this.marca+"\nRodado: "+this.rodado+"\nColor: "+this.color+"\nCondicion: "+this.condicion);
    }
}
const bici1=new Bicicleta("Relaigh",30,"amarillo","usada");
const bici2=new Bicicleta("Olmo", 28,"Verde","nueva");

console.log(bici1);
bici1.color="azul";

bici2.mostrarBicicleta()