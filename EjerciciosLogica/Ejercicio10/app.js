let btnAceptar = document.getElementById("btnAceptar")
btnAceptar.addEventListener("click", palindromo())

function palindromo() {
    let palabra = document.getElementById("inputPalabra").value;  
    let palabraAlReves = reverseP(palabra)
    let palabraConvert = stringToArray(palabra)  
    let result = (palabraAlReves == palabraConvert)? alert("Es palindromo") : alert("No es palindromo")
    //let value = (true == true) ? true : false
    
}


function reverseP(palabra) {
    return [...palabra].reverse().join().replaceAll(",","").replaceAll(" ","").toLowerCase() 
}
function stringToArray(palabra) {
    return [...palabra].join().replaceAll(",","").replaceAll(" ","").toLowerCase() 
}