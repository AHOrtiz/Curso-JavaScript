//*! ------------------------------------------ARREGLOS EN ES6-----------------------------------------

const  ceviche =['pescado', 'mariscos', 'cebolla']

// //**?Quitar ultimo elemento del arreglo declarado */
// ceviche.pop()
// //*?Agregar elemento al final de arreglo
// ceviche.push('Limon')
// //*? Agregar un elemento al inicio del arreglo
// ceviche.unshift('papas');
// //*?Quitar primer elemento del arreglo 
// ceviche.shift();

// console.log(ceviche.length);

// ceviche[0] ='papas';
//*?Indice del elemento que se desea quitar o agregar y cuantas posiciones mas apartir de esa
ceviche.splice(1 ,0,'Limon');
console.log(ceviche);

ceviche.forEach(function(item , index){
    console.log(index);
    console.log(item);
});

console.log(ceviche)

for(let i =0; i < ceviche.length; i++){
    console.log(`Indice ${i}: ${ceviche[i]}`);
}