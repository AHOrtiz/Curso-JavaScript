var promPablo ;
var promMaria;
var promedioMayor;

promPablo=(14+8+16)/3;
console.log(promPablo);

promMaria=(12+18+10)/3;

//promedio superior
if(promPablo>promMaria){
    console.log('Pablo tiene el promedio superior')
}else if(promMaria> promPablo){
    console.log('Maria tiene el promedio superior');
}else{
    console.log('Ambos promedios son iguales');
}
/**/ 
for(var i=1; i<=2; i++){
    if(i===1){
        if(promPablo>13){
            console.log('pablo esta aprobado');
        }else{
            console.log('Pablo esta reprobado ')
        }
    }else{
        if(promMaria>13){
            console.log('Maria esta aprobada');
        }else{
            console.log('Maria esta reprobada');
        }
    }
}



