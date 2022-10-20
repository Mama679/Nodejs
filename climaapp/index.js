const {leerInput} = require('./helper/inquierer');

const main = async()=>{
    const texto = await leerInput("Hola Mundo");
    console.log(texto);
}

main();