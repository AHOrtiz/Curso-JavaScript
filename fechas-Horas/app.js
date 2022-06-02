//*! Manejo de fecha y hora

//const ahora = new Date();
//const timestamp = ahora.getTime();
//console.log(timestamp.toString());

//const fechaActual =  new Date(timestamp);
//console.log(fechaActual.getFullYear());

//const fecha1 = new Date("December 17 , 1995 06:20:00");
//console.log(ahora.toString());
//console.log(fecha1.toString());

//console.log("Año:",ahora.getFullYear());
//console.log("Mes",ahora.getMonth());
//?Dia del mes
//console.log("Dia",ahora.getDate());
//*?Dia de la semana
//console.log("Dia",ahora.getDay());
//console.log("Minutos:", fecha1.getMinutes());
//console.log("Segundos", fecha1.getSeconds());

//**Ejercicio de comparación de fechas, crear dos objetos Date, uno con una fecha cualquiera y el siguiente con la fecha actual, luego comparar ambos valores visualizar cual es la fecha menor a la otra */

const fechaCualquiera = new Date('December 17 , 1995 06:20:00');
const fechaActual = new Date();

const timestamp = fechaActual.getTime();
const timestamp2 = fechaCualquiera.getTime();

console.log(timestamp);
console.log(timestamp2);

if(timestamp< timestamp2){
    console.log(fechaCualquiera.toString());    
}else if(timestamp2< timestamp){
    console.log(fechaActual.toString());
}
