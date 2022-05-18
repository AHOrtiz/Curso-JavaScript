//*QuerySelector

// var submit = document.querySelector('input[type="submit"]');
// submit.value="Enviar";

// var item = document.querySelector('.list-group-item');
// item.style.color='red';

//*querySelectorAll

// var items = document.querySelectorAll('.list-group-item');
// items[2].style.color='red';

// var titulos = document.querySelectorAll('.title');
// console.log(titulos);
// titulos[0].textContent='Prueba'

// var impar =document.querySelectorAll('li:nth-child(odd)');
// var par= document.querySelectorAll('li:nth-child(even)');

// for(var i=0; i<impar.length; i++){
    
//     impar[i].style.backgroundColor ='#ccc';
//     par[i].style.backgroundColor='#f4f4'
// }


//* PARENT-NODE
// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// var main =itemList.parentNode;
// main.style.backgroundColor='#f4f4f4';

//*PARENT-ELEMENTS
// var itemList = document.querySelector('#items');
// console.log(itemList.parentElement);
// var main =itemList.parentElement;
// main.style.backgroundColor='#f4f4f4';
// console.log(main.parentElement.parentElement);

//*childNodes
// console.log(itemList.childNodes);
//*children
// console.log(itemList.children);
//*firstChild: Primer elemento hijo / firstElementChild
//*? muestra el primer nodo 
// console.log(itemList.firstChild);
//*? muestra el primer elemento de la lista y se pueden hacer cambios. 
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent ='Prueba';

//*LastChild: Ultimo elemento hijo

//*? muestra el ultimo  nodo 
// console.log(itemList.lastChild);
//*? muestra el  ultimo  elemento de la lista y se pueden hacer cambios. 
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent ='Soy el ultimo';

//*PreviousSibling: siguiente 
var itemList = document.querySelector('#items');
// console.log(itemList.previousSibling);

//*previousElementSibling: elemento anterior del que guarda la variable itemList
// console.log(itemList.previousElementSibling);

//*nextSibling
// console.log(itemList.nextSibling);

//*nextElementsSibling
// console.log(itemList.nextElementSibling);

//*createElement
//!tagName
var nuevoDiv = document.createElement('div');
nuevoDiv.className='hoola';
nuevoDiv.id='div-hola';
nuevoDiv.setAttribute('title','Hola mundo');

//*createTextNode
var nuevoNodoText = document.createTextNode('Hola Mundo');
nuevoDiv.appendChild(nuevoNodoText)
console.log(nuevoDiv);

var contenedor = document.querySelector('header .container');
console.log(contenedor);

var h1 = document.querySelector('h1');
console.log(h1);
contenedor.insertBefore(nuevoDiv,h1)