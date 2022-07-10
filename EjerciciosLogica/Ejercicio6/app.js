
var ArregloNumeros= [];


function numerosRandom(limite){
    for (let index = 0; index < limite; index++) {
        saveNumber()
        
    }
    console.log(ArregloNumeros)
}

numerosRandom(200);

function saveNumber(){
    let numeroRandom= Math.floor(Math.random()*99)+1;
    let exist = ArregloNumeros.find((x)=> x == numeroRandom )

    if(exist){
        saveNumber();
    }else{
        ArregloNumeros.push(numeroRandom)
    }
}