//*!------------------------------------------------------OBJETOS------------------------------------------------------------
//*? CREAR UN OBJETOS
// 
let miLibroA={
    //*DENTRO DE LAS LLAVES VAN LAS PROPIEDADES DEL OBJETO:
    titulo  : 'El libro de javaScript',
    autor   : 'Allison',
    paginas : 400,
    publicado  : false
}
let milibroB ={
    titulo  : ' java',
    autor   : 'Irwing',
    paginas : 700,
    publicado  : true
}
console.log(miLibroA.titulo)
console.log(`El nombre del  libro es : ${miLibroA.titulo} y fue creado por ${miLibroA.autor}, tiene ${miLibroA.paginas} paginas , esta publicado el libro ${miLibroA.publicado}`);

//*CAMBIAR  EL VALOR DE UNA PROPIEDAD */
miLibroA.paginas= 500;
console.log(`El nombre del  libro es : ${miLibroA.titulo} y fue creado por ${miLibroA.autor}, tiene ${miLibroA.paginas} paginas , esta publicado el libro ${miLibroA.publicado}`)

let getResumen = (libro) =>{
    return{
        resumen: `El nombre del  libro es : ${libro.titulo} y fue creado por ${libro.autor}`,
        resumenPaginas : `${libro} tiene ${libro.paginas} paginas ` 
    }
}

// let persona ={
//     nombre : ' Allison',
//     edad   :    25,
//     ciudad  : 'Puebla'
// }

// persona.edad = 20;

// console.log(persona)
// console.log(`El nombre de la persona es ${persona.nombre} ,su edad es  ${persona.edad} y vive en la ciudad de ${persona.ciudad}`)