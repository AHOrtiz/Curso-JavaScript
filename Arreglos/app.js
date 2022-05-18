
var nombre =['Allison', 'Melody','Irwing','Mich'];
var vegetales = new Array ('Toamte', 'Lechuga','Zanahoria');

console.log(nombre[2]);
console.log(nombre[1]);
console.log(vegetales[2]);

nombre[1] ='Luz';
console.log(nombre[1]);

vegetales[2] = 'Nabo';
console.log(vegetales[2]);

console.log(nombre.length);

var frutas =['pera','manzana','uva','sandia'];
console.log(frutas);

// frutas.forEach(function(elemento, indice,array){
//      console.log(elemento,indice);
// })
// frutas.push('naranja');
// console.log(frutas);
// frutas.unshift('Fresas');
// console.log(frutas);
// frutas.pop();
// console.log(frutas);
// frutas.shift();
// console.log(frutas);

// var pos =frutas.indexOf('uva');
// console.log(pos);

// frutas.splice(1,1);
// console.log(frutas);

// var persona = ['Allison','Herrera',25,'99999999',1.75];
// console.log(persona);

//Objetos literales

// var persona ={
//     nombre   : 'Allison',
//     apellido : 'Herrera',
//     gustos   : ['Futbol','Peliculas','Inglés'],
//     trabajo  : 'Instructor',
//     esCasado : true
// };

// console.log(persona.nombre);
// console.log(persona['trabajo']);

// persona.esCasado = false;
// console.log(persona.esCasado);

/* Objetos con la sintaxis Object*/
//  var persona2 = new Object();
//  persona2.nombre= 'Allison';
//  persona2.apellido = 'Herrera';
//  persona2['trabajo'] = 'webDeveloper';

//  console.log(persona2);

//OBJETOS Y METODOS

var persona ={
    //PROPIEDADES
    nombre   : 'Allison',
    apellido : 'Herrera',
    gustos   : ['Futbol','Peliculas','Inglés'],
    trabajo  : 'Instructor',
    esCasado : true,

    //METODOS
    calcularEdad :function(yearNacimiento){
        return 2022 - yearNacimiento
    }
};

console.log(persona);
var edad = persona.calcularEdad(1985);
console.log(edad);