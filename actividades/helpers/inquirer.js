const inquirer = require('inquirer');
require('colors');

const preguntas = [{
    type:'List',
    name:'Opcion',
    message:'¿Que desea hacer?',
    choices:['opt1','opt2','opt3']
}];

const inquirerMenu = async() => {
    console.clear();
    console.log('===================================='.green);
    console.log('   Selecciona una Opción'.green);
    console.log('====================================\n'.green);

    const opt = await inquirer.prompt(preguntas);
    return opt;
}

module.exports = {
    inquirerMenu
}