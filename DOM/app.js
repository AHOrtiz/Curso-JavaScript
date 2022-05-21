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
//var itemList = document.querySelector('#items');
// console.log(itemList.previousSibling);

//*previousElementSibling: elemento anterior del que guarda la variable itemList
// console.log(itemList.previousElementSibling);

//*nextSibling
// console.log(itemList.nextSibling);

//*nextElementsSibling
// console.log(itemList.nextElementSibling);

//*createElement
//!tagName
// var nuevoDiv = document.createElement('div');
// nuevoDiv.className='hoola';
// nuevoDiv.id='div-hola';
// nuevoDiv.setAttribute('title','Hola mundo');

//*createTextNode
// var nuevoNodoText = document.createTextNode('Hola Mundo');
// nuevoDiv.appendChild(nuevoNodoText)
// console.log(nuevoDiv);

// var contenedor = document.querySelector('header .container');
// console.log(contenedor);

// var h1 = document.querySelector('h1');
// console.log(h1);
// contenedor.insertBefore(nuevoDiv,h1)

//*Agregar un elemento a la lista

var form  = document.getElementById('formAgregar');
var lista = document.getElementById('items');
var filtro = document.getElementById('filtro');

//*Evento submit del formulario
form.addEventListener('submit', agregarItem);
//*Evento click de la lista
lista.addEventListener('click', eliminarItem);
//*Evento del teclado en el campo de filtro
filtro.addEventListener('keyup', filtrarItems)

//*Función para agregar un Item a la lista
function agregarItem(e){
//     //*Cancelar evento si es cancelable
    e.preventDefault();
    var newItem = document.getElementById("item").value;

    var li = document.createElement('li');
    li.className ='list-group-item';
    li.appendChild(document.createTextNode(newItem));

    var botonDel = document.createElement('button');
    botonDel.className ='btn btn-danger btn-sm float-right eliminar';
    botonDel.appendChild(document.createTextNode('X'));

    li.appendChild(botonDel)
   
    lista.appendChild(li);
}

//*Funcion para eliminar un item de la lista

function eliminarItem(e){
   if(e.target.classList.contains('eliminar')){
       if(confirm('¿Seguro que deseas eliminar el elemento?')){
           
           var elemento = e.target.parentElement;
           lista.removeChild(elemento)       
       }
     
   }
}
//*Funcion para filtrar elementos de la lista
function filtrarItems(e){
    var texto = e.target.value.toLowerCase();
    var items  = lista.getElementsByTagName('li');
  Array.from(items).forEach(function(item){
      var itemNombre = item.firstChild.textContent;
      if(itemNombre.toLocaleLowerCase().indexOf(texto) != -1){
          //*Va a mantener el elemento mostrado
          item.style.display ='block';
      }else{
          item.style.display ='none';
      }
  });
}