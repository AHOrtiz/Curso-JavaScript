var mostrarNumeros= document.getElementById("MostrarNumeros");

let multiplo4,multiplo5, multiplo9

for (let index = 1; index <=500; index++) {
    mostrarNumeros.innerHTML+=`<p>${index}</p>`
   console.log(index)
    multiplo4=index%4;
    multiplo5=index%5;
    multiplo9 = index%9;
    if(multiplo5==0){
        mostrarNumeros.innerHTML+=`<hr>`  
    }
    if(multiplo4==0 ){
        mostrarNumeros.innerHTML+=`<p style="margin-left:20px; margin-top:-35px"> Multiplo de 4 </p>`   
           
        console.log("Multiplo de 4")      
    }else if( multiplo9==0){
        mostrarNumeros.innerHTML+=`<p style="margin-left:20px; margin-top:-35px"> Multiplo de 9 </p>` 
    }


}
