const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('Crear', 'Crea una archivo de una tabla de multiplicar', opts)
    .help()
    .argv;


module.exports = {
    argv
}