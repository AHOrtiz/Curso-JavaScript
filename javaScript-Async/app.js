//*?Permite establecer un temporizador que va a ayudarme a ejecutar un codigo de acuerdo a un tiempo transcurrido.


//setTimeout(()=>{
    //console.log("Esto aparece despues de tres segundos");
//}, 3000);

//*!JAVASCRIPT Asincrono

//* Permite que las funciones asincronas se ejecuten en segundo plano
//* Pasamos en llamadas con devoluciones (callbacks) que se ejectuan una vez que la funcion ha terminado su trabajo

//const segundo =() =>{
    //setTimeout(() => {        
        //console.log('Llamada a segundo');
    //}, 2000);

//}

//const primero =() =>{
    //console.log('Inicio de primero');
    //segundo();
    //console.log('Fin de primero');
//}
//primero();

//const getUsuarios =() =>{
    //setTimeout(() => {
        // const userIDs =[101,102,103,105];
         //console.log(userIDs);
         //setTimeout(id => {
                //const usuario ={
                   // email  : 'allis@gmail.com',
                    //nombre : 'Allix'
               // }
                //console.log(`${id} - ${usuario.email} - ${usuario.nombre}`);

                //setTimeout(idPermiso => {
                   // const permisos = ['admin', 'creador'];
                   // console.log(permisos);
                //}, 1500, userIDs[2]);

         //}, 1500, userIDs[2]);
    //}, 1500);
//}

//getUsuarios();

//*! Promesas
//* El objeto Promise es usado para computaciones asincronas. Una promesarepresenta un valor que puede estar disponible ahora, en el futuro , o nunca
//* Representa la terminacion o el fracaso eventual de una operacion asincrona

//*Ejemplo del uso de promesas
//*Ejemplo 1:
let promesa = new Promise((resolve , reject) =>{
    if(false){
        resolve('La operación fue exitosa');
    }else{
        reject ('Hubo un error');
    }
});

promesa.then(response =>{
    console.log('Response:'+ response);

}).catch (error =>{
    console.log('Error:'+ error);
})

//*Ejemplo 2

var miPromesa = Promise.resolve('comida');
miPromesa.then(resp => console.log(resp));

//*Ejemplo 3

var miPromesa2 = new Promise (function(resolve,reject){
    setTimeout(() => resolve(4),2000);
})

miPromesa2.then(resp =>{
    resp += 5;
    console.log(resp)
})