function palabra(){
    let palabra = document.getElementById("inputPalabra").value;   
    let tamanoPalabra =palabra.length;
    var letra;
  
    for (let index = 0; index < tamanoPalabra; index++) {
        letra=palabra.charAt(index);
        console.log(letra)
        if (letra<0) {
            console.log(palabra)
        }else{
            console.log("-");
          
        }
        
    }
}
palabra();