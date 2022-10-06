const inquirer = require('inquirer');
require('colors');

const preguntas = [{
    type:'list',
    name:'Opcion',
    message:'¿Que desea hacer?',
    choices:[
        {
            value: '1',
            name:'1. Crear Lista'
        },
        {
            value:'2',
            name: '2. Listar Tareas'
        },
        {
            value:'3',
            name: '3. Listar Tareas Completadas'
        },
        {
            value:'4',
            name: '4. Listar Tareas Pendientes'
        },
        {
            value:'5',
            name: '5. Completar Tare(s)'
        },
        {
            value:'6',
            name: '6. Borrar Tarea(s)'
        },
        {
            value:'0',
            name: '0. Salir'
        }
        
    ]
}];

const pausaPre =[{
    type:'input',
    name:'continuar',
    message: `Presione ${'ENTER'.green} para Continuar`
}];

const inquirerMenu = async() => {
    console.clear();
    console.log('===================================='.green);
    console.log('   Selecciona una Opción'.green);
    console.log('====================================\n'.green);

    const {Opcion} = await inquirer.prompt(preguntas);
    return Opcion;
}

const pausa = async() => {
    console.log('\n');
     await inquirer.prompt(pausaPre);
}

module.exports = {
    inquirerMenu,
    pausa
}