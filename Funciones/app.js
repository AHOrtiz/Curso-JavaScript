// function bienvenido(){
//   return 'Hola Bienvenidos a la seccion. ';
// }
//  var mensaje =bienvenido();
//  console.log(mensaje);

 
//  function convertirFAHaCelsius(gradoFa){
//     var celsius=(gradoFa - 32)* 5/9
//     return celsius;
//  }

//  var tempUno = convertirFAHaCelsius(32);       
//  var temDos  = convertirFAHaCelsius(68);

//  console.log(tempUno);
//  console.log(temDos);

// function calcularEdad(yearNacimiento){
//   return 2022 - yearNacimiento;
// }
// var edad = calcularEdad(1990);
// console.log(edad);


// function añosFaltantes(año,nombre){
//     var edad =calcularEdad(año) 
//     var jubilar = 65-edad;
//     console.log(nombre + ' le faltan ' +  jubilar  + ' años para su jubilacion. ');   
    
// }
// añosFaltantes(1997,'Allison');
// var nombre;
// var prueba = function(n){
//   return 'hola' + n
// }
// nombre='Allison'
// console.log(prueba(nombre)); 

//Argumentos por default
var sumar = function (a=5,b=3,c=3){
  return a + b + c;
}
console.log(sumar());

//Plantillas de cadenas (template string)
var nombre ='Allison';
console.log(`El nombre es : ${nombre}`);


var a=5;
var b = 10;

console.log(`La suma es : ${a+b}`)



//****/****************************************************************************************************************************** */ */

// var respPositivas;
// var respNegativas;
// var nombre ='Allison';

// var calcularPorcentaje = function (nombre,respNegativas,respPositivas){
//     respNegativas= (respNegativas/100)*100;
//     respPositivas = (respPositivas/100)*100;

//     if (respPositivas>= 90){
//       console.log(`${nombre} Score : A` )
//     }else if(respPositivas>70 && respPositivas<89){
//       console.log(`${nombre} Score : B`)
//     }else if(respPositivas>45 && respPositivas<69){
//       console.log(`${nombre} Score : C`)
//     }else if(respPositivas<45){
//       console.log(`${nombre} Score : D`)
//     }
//     return respNegativas,respPositivas
// }

// console.log(calcularPorcentaje('Allison',10,65));


var calcularScore = function (nombre, pos,neg){
  var porpos = (pos/100) * 100;
  var porNeg = (neg / 100)* 100;
  var score = '';
   
  if(porpos>90){
    score ='A';
  }else if(porpos >= 70){
    score = 'B'
  }else if(porpos >=45){
    score ='C'
  }else{
    score ='D';
  }
  return `${nombre} tiene el score ${score}, Positivas: ${porpos}% , Negativas: ${porNeg} % `
}

var resultado = calcularScore('Allison',75,25);
console.log(resultado)
