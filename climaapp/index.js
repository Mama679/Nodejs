require('colors');
const {leerInput, inquirerMenu, pausa} = require('./helper/inquierer');

console.clear();

const main = async()=>{
    let opt;

    do{
        opt = await inquirerMenu();
        switch(opt){
            case 1:
                //Mostrar Mensaje
                const lugar = await leerInput("Ciudad: ");
                console.log(lugar);
                //Buscar ciudad o lugares
                //Clima
                //Mostrar información de la ciudad
                //Mostrar resusltados
                console.log('\nInformación de la Ciudad\n'.green);
                console.log('Ciudad: ',);
                console.log('Lat: ',);
                console.log('Lng: ',);
                console.log('Temperatura: ',);
                console.log('Mínima: ');
                console.log('Maxima: ');
                break
        }
        if(opt !== 0) await pausa();
    }while(opt !== 0);
}

main();