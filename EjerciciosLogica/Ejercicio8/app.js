function palabra() {
    let palabra = document.getElementById("inputPalabra").value;
    let tamanoPalabra = palabra.length;
    let contador = 0
    var letra;


    for (let index = 0; index < tamanoPalabra; index++) {

        letra = palabra.charAt(index);

        switch (letra) {
            case "a":
                contador++
                break;
            case "e":
                contador++
                break;
            case "i":
                contador++
                break;
            case "o":
                contador++
                break;
            case "u":
                contador++
                break;
            default:
                break;
            
        }
        


    }
    console.log("El  numero de vocales es:",contador)

}
palabra();