const axios = require('axios');
class Busquedas {
    historial = ['Bogota', 'Barranquilla', 'Madrid'];

    constructor() {
        //Todo leer desde la Base de datos si existe
    }

    get paramsMapbox(){
        return {
            'access_token':process.env.MAPBOX_KEY,
            'limit':5,
            'language':'es'
        }
        
    }

    get paramsClima(){
        return {
            'appid':process.env.OPENWEATHER_KEY,
            'units':'metric',
            'lang':'es'
        }
    }

    async ciudad(lugar = '') {
        //Petición HTTP
        try {
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params:this.paramsMapbox
            });
            const resp = await instance.get();
            //const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/Barranquilla.json?language=es&access_token=pk.eyJ1IjoibWFtYTY3OSIsImEiOiJjbDluYTVjZmswMmhrM25vOHRjeDQ2bGUwIn0.zaMibsBqcwc5rsk73daJxw');
           //console.log(resp.data.features);
           //Arrglos de lugares
           return resp.data.features.map(lugar =>({
                id:lugar.id,
                nombre:lugar.place_name,
                lng:lugar.center[0],
                lat:lugar.center[1]
           }));
        }
        catch (error) {
            return [];
        }
    }

    async obtenerClima(lat,lon){
        try{
            const solicitud = axios.create({
                baseURL:'https://api.openweathermap.org/data/2.5/weather',
                params:{...this.paramsClima,lat,lon }
            });
            const resp = await solicitud.get();
            const {weather,main} = resp.data;
            return{
                desc:weather[0].description,
                temp:main.temp,
                min:main.temp_min,
                max:main.temp_max,
                condicion:weather[0].main
            };
            /*return {
                desc:resp.data.weather[0].description,
                temp:resp.data.main.temp,
                min:resp.data.main.temp_min,
                max:resp.data.main.temp_max,
                condicion:resp.data.weather[0].main,
            };*/
        }catch(error){
           console.log(error);
        }
    }

    agregarHistorial(lugar = ''){
        //Preveenir duplicado
        this.historial.unshift(lugar);
        //Grabar en DB
    }
}


module.exports = Busquedas;