const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': '8293b0058fmsh68e7975f2954eb6p18a45ejsnbd574d235fdd' }
    });

    const resp = await instance.get();
    if (resp.data.Results.lengh === 0) {
        throw new Error(`No hay resultados para ${ dir }`)
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng

    }

}

module.exports = {
    getLugarLatLng
}