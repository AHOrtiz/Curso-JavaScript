 //*Variables privadas
 var opcions = ['Piedra','Papel','tijera'];
 var Piedra  = 0;
 var Papel   = 1;
 var tijera  = 2;
 //*Metodos
 function obtenerOpcion(){
    let random = Math.floor(Math.random(0) * 3)
    return opcions[random];
 }
 function verificarOpciones(user_1, user_2){
    let seleccionUsuario1 = opcions.indexOf(user_1);
    let seleccionUsuario2 = opcions.indexOf(user_2);

    if(seleccionUsuario1==0){
        if (seleccionUsuario2==0) {
            console.log("Empate");
        }else if(seleccionUsuario2==1){
            console.log("Gana usuario 2")
        }else if(seleccionUsuario2==2){
            console.log("Gana usuario 1")
        }
    }else if(seleccionUsuario1 == 1){
        if (seleccionUsuario2==0) {
            console.log("Gana usuario 1");
        }else if(seleccionUsuario2==1){
            console.log("Empate")
        }else if(seleccionUsuario2==2){
            console.log("Gana usuario 1")
        }
    }else if(seleccionUsuario1 == 2){
        if (seleccionUsuario2==0) {
            console.log("Gana usuario 2");
        }else if(seleccionUsuario2==1){
            console.log("Gana usuario 1")
        }else if(seleccionUsuario2==2){
            console.log("Empate")
        }
    }

 }

 function startProgram(){
    //*!invocar metodo en una variable
    let usuario1 = obtenerOpcion();
    let usuario2 = obtenerOpcion();

    verificarOpciones(usuario1,usuario2);
   console.log(`Jugador 1 : ${usuario1} Jugador 2 : ${usuario2}`  )
 }

 startProgram()
