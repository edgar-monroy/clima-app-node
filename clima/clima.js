const axios = require('axios');



const getClima = async(lat, lng) => {


    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7cf6c0bd75e6887c3e15d6e2850bfad2&units`)

    return resp.data.main.temp;

}


module.exports = {
    getClima
}