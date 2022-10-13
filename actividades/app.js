require('colors');
const Tarea = require('./clases/tarea');
const Tareas = require('./clases/tareas');
const {guardarDb,leerDb} = require('./helpers/procesos');
const {inquirerMenu,pausa,leerInput} = require('./helpers/inquirer');
//const {mostrarMenu, pausa} = require('./helpers/mensajes');


console.clear();

const main = async() => {
    let opt = '';
    const tareas = new Tareas();
    const tareaDb = leerDb();

    if(tareaDb){
        tareas.cargarTareas(tareaDb);
    }
    
do{
        //Imprimir el Menu   
        opt = await inquirerMenu();
       // opt = await mostrarMenu();
       
        switch(opt){
            case '1':
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc);
                break;
            case '2':
                //console.log(tareas.listado);
                //console.log(tareas.getListadoArr());
                tareas.listadoCompleto();
                break;
            case '3':
                 tareas.listadoEstado();
                break;
            case '4':
                tareas.listadoEstado(false);
                break;
        }   
        guardarDb(tareas.getListadoArr());
        await pausa();
        
}while(opt !== '0')

    ////const tarea = new Tarea('Comprar Viveres');
   //// const task = new Tarea('Generar Presupuesto');
    //console.log(tarea);

    ///const tasks = new Tareas();
    //tasks.listado[tarea.id] = tarea;
   // tasks.listado[task.id] = task;

    //console.log(tasks);
    
}

main();