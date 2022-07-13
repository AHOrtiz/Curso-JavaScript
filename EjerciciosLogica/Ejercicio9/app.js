function palabra() {
    let palabra = document.getElementById("inputPalabra").value;
    let tamanoPalabra = palabra.length;
    let palabraAlReves =[]
    var letra; 


    for (let index = 0; index < tamanoPalabra; index++) {

        letra = palabra.charAt(index);
       palabraAlReves.unshift(letra)
       
        


    }
  console.log(palabraAlReves.join().replaceAll(",",""))

  console.log(reverseP(palabra))

}

var  reverseP = (palabra)=>{
    return [...palabra].reverse().join().replaceAll(",","")
}

palabra();