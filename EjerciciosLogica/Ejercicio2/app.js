function myFunction(){
    let calificacion = document.getElementById("inputCalificacion").value;
    document.getElementById("demo").innerHTML= calificacion
    let intCalificacion = parseInt(calificacion);
    // Number(calificacion)
    // parseInt(calificacion)
    switch (true) {
        case intCalificacion>=0 && intCalificacion<3:
            alert("muy deficiente");
            break;
        case  intCalificacion>=3 && intCalificacion<5:
            alert ("Insuficiente");
            break;
        case intCalificacion>=5 && intCalificacion<6:
            alert ("Suficiente");
            break;
        case intCalificacion>=6 && intCalificacion<7:
            alert ("Bien");
            break;
        case intCalificacion>=7 && intCalificacion<9:
                alert ("Notable");
            break;
        case intCalificacion>=9 && intCalificacion<=10:
                alert ("Sobresaliente");
            break;
        default:
            break;
    }
}