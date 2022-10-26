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
}


module.exports = Busquedas;