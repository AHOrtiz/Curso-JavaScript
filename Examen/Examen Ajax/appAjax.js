let div = document.getElementById('mostrar-pokemons');
let detallePokemon = document.getElementById('DetallePokemon');

//*Metodos
function GetPokemons() {
    //*Se crea el objeto XMLhttpRequest
    const request = new XMLHttpRequest();
    //*Se coloca un evento para ir viendo los cambios de estado por los que pasa 
        //*? 0 -> UNSENT
        //*? 1 -> OPENED
        //*? 2 -> HEADERS_RECEIVED
        //*? 3 -> LOADING
        //*? 4 -> DONE
    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4) {
            const datos = JSON.parse(e.target.responseText);
            datos.results.forEach(element => {

                div.innerHTML += `<div class="container-pokemon"><p class="nombrePokemon">${element.name}</p></div>`
                div.onclick = (item) => {
                    let namePokemon = item.target.childNodes[0].data;
                    getPokemon(namePokemon);
            
                }
            });

        }

    })
    request.open('GET',' https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
    request.send();
}
function getPokemon(name){
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4) {
            const datos = JSON.parse(e.target.responseText);
            console.log(datos)
            let nombre        = datos.name;
            let imagenPokemon = datos.sprites.front_default;
            let habilidad     = datos.abilities[0].ability.name;
            detallePokemon.innerHTML = `
                <img style="width:12%" src="${imagenPokemon}"> 
                <div>                
                    <p>Nombre : ${nombre}</p> 
                    <p>Habilidad: ${habilidad}</p>                
                </div>
                
            `
       
        }

    })
    request.open('GET',`https://pokeapi.co/api/v2/pokemon/${name}`);
    request.send();
}
//Esto se va llamar cuando se inicie la pagina

GetPokemons()




