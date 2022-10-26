const inquirer = require('inquirer');
require('colors');

const preguntas = [{
    type:'list',
    name:'Opcion',
    message:'¿Que desea hacer?',
    choices:[
        {
            value: 1,
            name:`${'1.'.green} Buscar Ciudad`
        },
        {
            value:2,
            name: `${'2.'.green} Historial`
        },
        {
            value:0,
            name: `${'0.'.green} Salir`
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

const leerInput = async(message)=>{
    const question =[{
        type:'input',
        name:'desc',
        message,
        validate(value){
            if(value.length === 0){
                return 'Por Favor ingrese valor';
            }
            return true;
        }
    }];

    const{desc} = await inquirer.prompt(question);
    return desc;
}

const listarLugares = async(lugares = []) =>{
   /* {
        value: '1',
        name:`${'1.'.green} Crear Lista`
    },*/

    const opciones = lugares.map( (lugar, i) => {
        const idx = `${i + 1}.`.green;
        return {
          value: lugar.id,
          name: `${idx} ${lugar.nombre}`
        }
    });

    opciones.unshift({
        value:0,
        name: '0.'.green +' Cancelar'
    })
    
    const elecciones = [{
        type:'list',
        name:'id',
        message:'Seleccione',
        choices:opciones
    }];

    const {id} = await inquirer.prompt(elecciones);

    return id;
    
}

const confirmar = async (mensaje) => {
    const pregunta = [{
        type:'confirm',
        name:'ok',
        message:mensaje
    }];

    const {ok} = await inquirer.prompt(pregunta);
    return ok;
}

const listadoTareasCheck = async(tareas = []) =>{
    const opciones = tareas.map( (tarea, i) => {
        const idx = `${i + 1}.`.green;
        return {
          value: tarea.id,
          name: `${idx} ${tarea.desc}`,
          checked:(tarea.completadoEn) ? true : false
        }
    });

    
    const elecciones = [{
        type:'checkbox',
        name:'ids',
        message:'Selecciones',
        choices:opciones
    }];

    const {ids} = await inquirer.prompt(elecciones);

    return ids;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listarLugares,
    confirmar,
    listadoTareasCheck
}