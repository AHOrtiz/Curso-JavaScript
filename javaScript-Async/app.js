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
//*! DE Callbacks a promesas 
const  getUsuariosIDs = new Promise((response , reject)=>{
    setTimeout(() => {
        response([101,102,103,105]);
    }, 1500);
})

//const getUsuario = userID =>{
    //return new Promise((resolve, reject)=>{
        //setTimeout(id => {
            //const usuario ={
                //email:'Allis2897@mail.com',
                //nombre : 'Allison'
            //}
            //resolve(`${id} - ${usuario.email} - ${usuario.nombre}`);

        //},1500,userID);
    //})
//}

//const getPermisos = id =>{
    //return new Promise ((resolve, reject)=>{
            //setTimeout(id => {
                //const permiso =['admin','creador'];
                //resolve(permiso);
            //}, 1500,id);
    //});
//}

//getUsuariosIDs.then(IDs =>{
    //console.log(IDs);
    //return getUsuario(IDs[3]);
//})
//.then(usuario =>{
    //console.log(usuario);
    //return getPermisos(usuario.id);
//})
//.then(permisos =>{
    //console.log(permisos);
//})
//.catch(()=>{
    //console.log('Error')
//})

//*!Funcion con Async/Await

async function getUsuariosAW() {
    const IDs = await getUsuariosIDs;
    console.log(IDs);    
}

getUsuariosAW()

//*! Promesas
//* El objeto Promise es usado para computaciones asincronas. Una promesarepresenta un valor que puede estar disponible ahora, en el futuro , o nunca
//* Representa la terminacion o el fracaso eventual de una operacion asincrona

//*Ejemplo del uso de promesas
//*Ejemplo 1:
//let promesa = new Promise((resolve , reject) =>{
    //if(false){
        //resolve('La operación fue exitosa');
    //}else{
        //reject ('Hubo un error');
    //}
//});

//promesa.then(response =>{
    //console.log('Response:'+ response);

//}).catch (error =>{
    //console.log('Error:'+ error);
//})

//*Ejemplo 2

//var miPromesa = Promise.resolve('comida');
//miPromesa.then(resp => console.log(resp));

//*Ejemplo 3

//var miPromesa2 = new Promise (function(resolve,reject){
    //setTimeout(() => resolve(4),2000);
//})

//miPromesa2.then(resp =>{
    //resp += 5;
    //console.log(resp)
//})