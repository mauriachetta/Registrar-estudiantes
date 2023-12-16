const mostrarEstudiantes = (estudiantes) => {
    console.log("Lista Estudiantes");
estudiantes.forEach((estudiante) => {
    console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);

})
}

module.exports = mostrarEstudiantes;