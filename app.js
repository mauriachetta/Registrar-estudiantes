const readlineSync = require ('readline-sync');

const mostrarEstudiantes = require ('./listaEstudiantes')

const registrarEstudiantes = () => {
    console.log("Iniciando registro de estudiantes");
    
    const cantEstudiantes = readlineSync.question("Ingresar la cantidad de estudiantes a registrar: ");
    
    console.log("La cantidad de estudiantes a registrar es de: " + cantEstudiantes);
    
    const estudiantes = [];

    
    for(let i = 0; i < cantEstudiantes; i++) {
        
        const nombre = readlineSync.question(`Ingresa el nombre del estudiante ${i}: `);
        
        const edad = readlineSync.question(`Ingrese la edad de ${nombre}: `);
        
        const estudiante = {
           nombre,
           edad
        }
        
        estudiantes.push(estudiante);
    }
    
    mostrarEstudiantes(estudiantes);
    
}


//Llamo a la funcion
registrarEstudiantes();
