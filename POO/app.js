// *! -------------------------------------MANEJO DE CLASES EN JAVASCRIPT---------------------------------------------------------
// *? SE OCUPA LA PALABRA RESERVADA CLASS,NO SE PUEDE CREAR LAS PROPIEDADES EN LA CLASE COMO EN LOS OBJETOS, SE DEBEN DECLARAR EN EL CONTRUCTOR Y CREAR UN CONSTRUCTOR
//*Colocar la palabra new para instanciar  a la clase

class Persona {
    // *inicializar los valores iniciales de las propiedades o atributos de la clase
    constructor(nombre,edad, profesiones = []){
        this.nombre   = nombre;
        this.edad     = edad;
        this.profesiones = profesiones;
    } 
    getBiografia(){
        let biografia =`${this.nombre}, tiene ${this.edad} . Trabajo : `;
        this.profesiones.forEach((profesion) =>{
            biografia += `${profesion}`
        })
        return biografia
    }
}

class Empleado extends Persona{
    constructor(nombre, edad , profesiones = [] , sueldo,puesto){
            super(nombre,edad,profesiones);
            this.sueldo  = sueldo;
            this.puesto  = puesto;
    }
    getBiografia(){
        return  super.getBiografia() +` Puesto: ${this.puesto},Salario: ${this.sueldo}`
    }
    set Sueldo(monto){
        this._sueldo = monto;
    }
    get Sueldo(){
        return this._sueldo;
    }
}


const persona1 = new Empleado ('Allison', 20 ,['Arquitecta', 'doctora'],1500, 'Gerente');
const persona2 = new  Empleado ('Carlos',30 , ['Ingeniero','Instructor'], 1000 ,'RRHH') ;
const persona3 = new Persona ('Ana',25, ['Administradora'],100 ,'Administrador');

persona1.sueldo =2000;

console.log(persona1.getBiografia());
console.log(persona2.getBiografia());
console.log(persona3.getBiografia());

// const datos ={
//     //ubicacion : 'Lima'
//     get ubicacion(){
//         return this._ubicacion
//     },
//     set ubicacion(valor){
//         this._ubicacion = valor;
//     }
// }

// datos.ubicacion = 'Buenos Aires';
// console.log(datos.ubicacion);
// console.log(datos)