require('colors');
const Tarea = require('./clases/tarea');
const Tareas = require('./clases/tareas');
const {inquirerMenu,pausa,leerInput} = require('./helpers/inquirer');
//const {mostrarMenu, pausa} = require('./helpers/mensajes');


console.clear();

const main = async() => {
    let opt = '';
    const tareas = new Tareas();
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
                console.log(tareas.getListadoArr());
                break;
        }
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