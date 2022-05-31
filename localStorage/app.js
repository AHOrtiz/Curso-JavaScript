//*! -------------------------------------------------------------------LOCALSTORAGE-----------------------------------------------------
//*? SESSIONSTORAGE : UNA VEZ QUE SE CIERRA LA SESION SE  ELIMINA TODA LA INFORMACION QUE SE GRABO.
//* Lleva clave valor en string
//*? LOCALSTORAGE SOLO GUARDA INFORMACION EN CADENA

// * DECLARACION DEL LOCALSTORAGE
//localStorage.setItem('nombreUsuario','Allison');
//localStorage.setItem('ubicacion','Iquitos');
//console.log(localStorage.getItem('nombreUsuario'));
//console.log(localStorage.getItem('ubicacion'))

//*alt62 mayor que 
//*alt 60 menor que

//localStorage.removeItem('nombreUsuario');
//localStorage.clear();


//*! ********************************************************NOTACIÓN JSON****************************************
//*? JavaScript Object Notation o Notación de objetos de JavaScript, es un formato ligero de intercambio de datos
//*Objeto usuario
const usuario ={
    nombre :'Allison',
    edad   :'24'
}

//*Inicializar la variable de tipo JSON
//*? stringify: Lo que hace es convertir el objeto que se va a enviar como parametro a string
const usuarioJSON = JSON.stringify(usuario);
localStorage.setItem('usuario',usuarioJSON);

const userJSON = localStorage.getItem('usuario');
const usuario2= JSON.parse(userJSON);
console.log(`${usuario2.nombre}: ${usuario.edad}`);

