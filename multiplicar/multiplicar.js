//requires
const fs = require('fs');

let listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        let data = '';

        if (!Number(base) && !Number(limite)) {
            reject(`${base}/ ${ limite }No es un número`);
            return
        }

        for (var i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        resolve(data);
    })

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        let data = '';
        if (!Number(base) && !Number(limite)) {
            reject(`${base}/ ${limite}No es un número`);
            return
        }

        for (var i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`archivos/tabla-${base}.txt`, data, (err) => {

            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`)
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}