// let nombre = 'Allison';
// let apellido = 'Ortiz';
//  console.log(nombre);
//*Funciones de cadenas ES6

// let nombreCompleto =`${nombre} ${apellido}`;
// console.log(nombreCompleto);
// console.log(`${nombre} `.repeat(5));
//*Busca en el nombre completo si  hay letras  iguales a las  que se estan pasando 
//! si coincide manda un true y si no coincide manda un false
// console.log(nombreCompleto.includes('lli'));

//*Busca si coincide el inicio del nombre completo con lo que se esta pasando.
// console.log(nombreCompleto.startsWith('Al'))
//*Busca al final del nombre completo si es similar
// console.log(nombreCompleto.endsWith('iz'));


//*?FUNCIONES DE FLECHA
const years =[2000,2005,2008,2012];
//*ES5
var edad5 = years.map(function(el){
    return 2019-el;
});
console.log(edad5);

//*ES6 
var edad6 = years.map(el => 2019 - el);
console.log("Funcion de flecha ES6",edad6)

//*! Funcion de flecha con 2 argumentos
edad6 = years.map((el,index)=>`Edad ${index + 1} : ${2019-el}`)
console.log(edad6);
edad6= years.map(
    (el,index)=>{
        // *Cuando se tiene mas de una linea en la funcion se debe colocar el return
        const yearActual = new Date().getFullYear();
        const edad = yearActual-el;
        return `Edad ${index + 1}: ${edad}`
        
    }
)
console.log("ln 43",edad6);

// function cuadrado(num){
//     return num * num;
// }
// console.log(cuadrado(5));
//?La funcion de flecha no lleva la palabra reservada function
const cuadrado = (num)=>{
    return num * num
}
//*!Funcion de flecha en una sola linea
const cuadrado1 = (num)=> num * num



console.log(cuadrado(4));

const personas =[
    {
        nombre : 'Allison',
        edad   : 20
    },
    {
        nombre : 'Melody',
        edad   : 1
    },
    {
        nombre : 'Carlos',
        edad   : 30
    },
    {
        nombre :'Pepe',
        edad   :35
    }

];
// const menores30 =personas.filter(function(persona){
//     return persona.edad < 30;
// })
// const menores30 = personas.filter((persona)=>{
//     return persona.edad < 30;
// })
// const menores30 = personas.filter((persona)=> persona.edad < 30);

// console.log(menores30)

//?------------------------------------------DESTRUCTURACION---------------------------------------
//*ES5
// var datos  = ['Allison',25];
// var nombre = datos[0];
// var edad   = datos[1];

//*ES6/

// var [nombre, edad]=['Allison',25]
// console.log(nombre);
// console.log(edad);

// const persona={
//     Nombre : 'Carlos',
//     Edad   : 30
// }

// const {Nombre, Edad}= persona
// console.log(Nombre);
// console.log(Edad);

// const {Nombre:n , Edad:e}= persona
// console.log(n)
// console.log(e)

// const calcMayoriaEdad = (year)=>{
//     const edad= new Date().getFullYear() - year
//     //*Si es mayor a 18 ? -> entonces da true : -> sino false
//     //*?OPERADOR TERNARIO */
//     const mayoria = edad >= 18 ? true : false
//     return [edad, mayoria]
// } 
// const [edad2 , mayoria]=calcMayoriaEdad(2010);
// console.log(edad2)
// console.log(`Es mayor de edad :${mayoria}`)


//*?----------------------------------------------------------MAPAS-------------------------------------------------------------------------------
//*Es algo similar a un arreglo pero se tiene valor y clave
// const datos = new Map();

// datos.set('nombre', 'Irwing');
// datos.set('edad',30);
// datos.set(1, 'melody@gmail.com');
// datos.set(2, 'prueba@gmail.com');
// datos.set('movil',99999999999);

// console.log(datos.get('nombre'));
// console.log(datos.get(2));
// console.log(datos.size);

//datos.delete(2)
// datos.forEach((value,key)=>{
//     console.log(`${key} : ${value}`)
// })

//*! -------------------------------------------------------------------------SPREAD OPERATOR---------------------------------------------------------
//*? Permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares  donde cero o mas argumentos (para llamadas de  función) , se debe colocar ... 
//*? Agrupar o juntar los valores de dos matrices

var suma = function(a,b,c,d){
    return a + b + c + d;
}

var ope1 = suma(10,20,30,40);
console.log(ope1);

var valores = [10,20,30,40];
const ope2 = suma(...valores)
console.log("ln 156",ope2)

const rrhh =['Allison','Irwing','Melody'];
const contabilidad  = ['Luz','Michelle','Arturo'];

const empresa = [...rrhh , ...contabilidad];
console.log(empresa)

