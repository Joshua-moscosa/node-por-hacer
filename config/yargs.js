const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear una tarea para hacer', {
        descripcion: descripcion
    })
    .command('actualizar', 'Actualiza una tarea existente en la lista', {
        descripcion: descripcion,
        completado: completado
    })
    .command('borrar', 'Borra un elemento de la lista de tareas por hacer', {
        descripcion: descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}