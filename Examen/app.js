let div = document.getElementById('mostrarPeliculas');

let peliculas = [
        {
            "title": "Jurassic World Dominion",
            "image": "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1652116222/amc-cdn/production/2/movies/56400/56352/PosterDynamic/138318.jpg"
        },
        {
            "title": "The Bad Guys",
            "image": "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1651666309/amc-cdn/production/2/movies/66300/66252/Poster/Primary_BoxCover_800_1200.jpg"
        },
        {
            "title": "Sonic The Hedgehog 2",
            "image": "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1649765471/amc-cdn/production/2/movies/64800/64840/Poster/Primary_BoxCover_800_1200.jpg"
        },
        {
            "title": "The Lost City",
            "image": "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1651320836/amc-cdn/production/2/movies/66000/66020/Poster/Primary_BoxCover_800_1200.jpg"
        }
       
    ]
    
  function mostrarMovie (){
    setTimeout(() => {
        LlamarPeli()
    }, 5000);
 }
  function LlamarPeli(){
 
    peliculas.forEach(peli => {
        console.log("soy forecah",peli)
        div.innerHTML += `<div class="contenedor-pelis">
         <p class='title-peli' >${peli.title} </p> 
         <img  class= "img-peli" style="" src="${peli.image}">
         </div> `
    });
 }

 mostrarMovie()