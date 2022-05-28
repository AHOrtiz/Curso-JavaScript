//*! ------------------------------------------ARREGLOS EN ES6-----------------------------------------
//*? Arreglo de objetos
const  ceviche =[
    {
        codigo:1,
        titulo:'pescado'
    },
    {
        codigo:2,
        titulo:'mariscos',
        tipo  : 'frescos'
    },
    {
        codigo:3,
        titulo:'cebolla'
    }

];

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
// ceviche.splice(1 ,0,'Limon');
// console.log(ceviche);

// ceviche.forEach(function(item , index){
//     console.log(index);
//     console.log(item);
// });

// console.log(ceviche)

// for(let i =0; i < ceviche.length; i++){
//     console.log(`Indice ${i}: ${ceviche[i]}`);
// }
const buscarIngrediente = function(ceviche,titulo){
    const index= ceviche.findIndex(function(ing,index){
        return ing.titulo === titulo
    });
    return index;
}

const filtrarIngredientes = ceviche.filter(function(ing, index){7
    const ingredientes = ing.titulo.includes('e');
    return ingredientes;
});
// console.log(filtrarIngredientes);

// const paises =['Colombia', 'Ecuador', 'Perú', 'España', 'Mexico'];
// //*? Filtrar palabras con la letra o
// console.log(paises.filter(pais => pais.includes('o')));

// const index = ceviche.findIndex(function(ing,index){
//      console.log(ing);
//      return ing.titulo ==='mariscos';
// })
// console.log(buscarIngrediente(ceviche,'mariscos'));
// console.log(ceviche[buscarIngrediente(ceviche ,'mariscos')]);

//*! ORDENAR UN ARREGLO (SORT)
//*? El metodo sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado 
//*? La ordenacion no es necesariamente estable. El modo de ordenacion por defecto responde a la posicion del valor del string de acuerdo a su valor Unicode


    console.log(ceviche)
ceviche.sort(function(a,b){
    if(a.titulo > b.titulo){
        return 1;
    }if(a.titulo< b.titulo){
        return -1;
    }
    return 0;
});

console.log(ceviche);