//*!------------------------------------------------------OBJETOS------------------------------------------------------------
//*? CREAR UN OBJETOS
// 
// let miLibroA={
//     //*DENTRO DE LAS LLAVES VAN LAS PROPIEDADES DEL OBJETO:
//     titulo  : 'El libro de javaScript',
//     autor   : 'Allison',
//     paginas : 400,
//     publicado  : false
// }
// let milibroB ={
//     titulo  : ' java',
//     autor   : 'Irwing',
//     paginas : 700,
//     publicado  : true
    
// }
// console.log(miLibroA.titulo)
// console.log(`El nombre del  libro es : ${miLibroA.titulo} y fue creado por ${miLibroA.autor}, tiene ${miLibroA.paginas} paginas , esta publicado el libro ${miLibroA.publicado}`);

// //*CAMBIAR  EL VALOR DE UNA PROPIEDAD */
// miLibroA.paginas= 500;
// console.log(`El nombre del  libro es : ${miLibroA.titulo} y fue creado por ${miLibroA.autor}, tiene ${miLibroA.paginas} paginas , esta publicado el libro ${miLibroA.publicado}`)

// let getResumen = (libro) =>{
//     return{
//         resumen: `El nombre del  libro es : ${libro.titulo} y fue creado por ${libro.autor}`,
//         resumenPaginas : `El libro ${libro.titulo} tiene un total de ${libro.paginas} paginas ` 
//     }
// }
// let libroAResumen = getResumen(miLibroA);
// let libroBResumen = getResumen(milibroB);

// console.log(libroBResumen.resumenPaginas)

// let persona ={
//     nombre : ' Allison',
//     edad   :    25,
//     ciudad  : 'Puebla'
// }

// persona.edad = 20;

// console.log(persona)
// console.log(`El nombre de la persona es ${persona.nombre} ,su edad es  ${persona.edad} y vive en la ciudad de ${persona.ciudad}`)

// let persona ={
//     nombre : 'Allison',
//     edad   : 25,
//     sueldo : 5000
// }
// let cambiarSueldo=(person,monto)=>{
//     person.sueldo = person.sueldo + monto
//     console.log(person)
// }
// let otraPersona = persona;
// otraPersona.sueldo = 1500
// console.log(otraPersona);

// cambiarSueldo(persona, 500)
// console.log(persona)

//*!------------------------------------------------------------METODOS---------------------------------------------------------------
//         let persona = {
//         nombre : 'Allison',
//         edad   : 25,
//         sueldo : 5000,
//         metodoPrueba : function(){
//             //console.log('Escribiendo desde el metodo Prueba')
//             return 'Resultado desde prueba';
//         },
//         cambiarEdad : function(e){
//             this.edad = this.edad + e;
//         }
//     }
//    let result = persona.metodoPrueba();
//    console.log(result)
//    persona.cambiarEdad(3)
//    console.log(persona.edad)


//*!------------------------------------------ OBJETO STRING ----------------------------
//*? Un objeto  que representa una serie de caracteres dentro de una cadena
//*? String -> con S mayuscula es una clase dentro de javascript el cual representa una cadena de texto

// let nombre = ' Allison Herrera ';
// let clave = '1230clave0967';

// console.log(nombre.length);
// console.log(nombre.toUpperCase());
// console.log(nombre.toLowerCase());
// console.log(nombre.trim());

// console.log(clave.includes('clave'));

//*!--------------------------------------DESTRUCTURACION DE OBJETOS-----------------------
//*? Es una expresion que posibilita la extraccion de datos , tanto de arreglos como de propiedades de objetos.
const getPersonaDatos = () =>{
    const respuesta =[
    {
        codigo : 200,
        data :{
           persona:{
               nombre : 'Allison',
               direccion : {
                   ciudad: 'Puebla',
                   pais : 'mexico'
               }
               
           }
        }
    },
    {
        codigo : 300,
        data :{
           persona:{
               nombre : 'Ana',
               direccion : {
                   ciudad: 'Santiago',
                   pais : 'Chile'
               }
               
           }
        }
    },
    {
        codigo : 400,
        data :{
           persona:{
               nombre : 'Irwing',
               direccion : {
                   ciudad: 'Bogota',
                   pais : 'Colombia'
               }
               
           }
        }
    }
    ]
    return respuesta
}



let {codigo : status, data:{persona:{nombre}}}= getPersonaDatos() [0];
for (const {codigo:status,data:{persona:{nombre : nom}}} of getPersonaDatos() ){
    console.log(nom)
}
