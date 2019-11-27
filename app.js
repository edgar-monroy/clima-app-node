const lugar = require('./Lugar/Lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener clima',
        demand: true
    }

}).argv;
//argv.direccion

//lugar.getLugarLatLng(argv.direccion)
//  .then(console.log);



const getInfo = async(direccion) => {


    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El Clima de ${coords.direccion} es de ${temp}.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion }`
    }






}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);