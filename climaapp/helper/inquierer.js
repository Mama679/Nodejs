const inquirer = require('inquirer');
require('colors');

const preguntas = [{
    type:'list',
    name:'Opcion',
    message:'¿Que desea hacer?',
    choices:[
        {
            value: '1',
            name:`${'1.'.green} Crear Lista`
        },
        {
            value:'2',
            name: `${'2.'.green} Listar Tareas`
        },
        {
            value:'3',
            name: `${'3.'.green} Listar Tareas Completadas`
        },
        {
            value:'4',
            name: `${'4.'.green} Listar Tareas Pendientes`
        },
        {
            value:'5',
            name: `${'5.'.green} Completar Tarea(s)`
        },
        {
            value:'6',
            name: `${'6.'.green} Borrar Tarea(s)`
        },
        {
            value:'0',
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

const listatoTareasBorrar = async(tareas = []) =>{
   /* {
        value: '1',
        name:`${'1.'.green} Crear Lista`
    },*/

    const opciones = tareas.map( (tarea, i) => {
        const idx = `${i + 1}.`.green;
        return {
          value: tarea.id,
          name: `${idx} ${tarea.desc}`
        }
    });

    opciones.unshift({
        value:'0',
        name: '0.'.green +' Cancelar'
    })
    
    const elecciones = [{
        type:'list',
        name:'id',
        message:'Borrar',
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
    listatoTareasBorrar,
    confirmar,
    listadoTareasCheck
}