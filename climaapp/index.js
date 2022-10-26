require('colors');
require('dotenv').config();
const { leerInput, inquirerMenu, pausa, listarLugares } = require('./helper/inquierer');
const Busquedas = require('./models/busquedad');

console.clear();
//console.log(process.env.MAPBOX_KEY);

const main = async () => {
    let opt;
    const busquedad = new Busquedas();
    do {
        opt = await inquirerMenu();
        switch (opt) {
            case 1:
                //Mostrar Mensaje
                const lugar = await leerInput("Ciudad: ");
                const lugares = await busquedad.ciudad(lugar);
                //Buscar ciudad o lugares
                const id = await listarLugares(lugares);
                if (id !== 0) {
                    const lugarsel = lugares.find(l => l.id === id);
                    //  console.log({id});
                    //Clima
                    //Mostrar información de la ciudad
                    //Mostrar resusltados
                    console.log('\nInformación de la Ciudad\n'.green);
                    console.log('Ciudad: ', lugarsel.nombre);
                    console.log('Lat: ', lugarsel.lat);
                    console.log('Lng: ', lugarsel.lng);
                    console.log('Temperatura: ',);
                    console.log('Mínima: ');
                    console.log('Maxima: ');
                }

                break
        }
        if (opt !== 0) await pausa();
    } while (opt !== 0);
}

main();