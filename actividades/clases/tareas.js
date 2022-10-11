require('colors');
const Tarea = require("./tarea");

class Tareas{
    listado = {};
    
    constructor(){
        this.listado = {};
    }

    getListadoArr(){
        const _listado = [];
        Object.keys(this.listado).forEach(key => {
           // console.log(key);
           const tarea = this.listado[key];
           _listado.push(tarea);
        });

        return _listado;
    }
    
    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this.listado[tarea.id] = tarea;
    }

    cargarTareas(tareas = [])
    {
        tareas.forEach(tarea =>{
            this.listado[tarea.id] = tarea;
        });
    }

    listadoCompleto(){
        let i = 1;
        Object.keys(this.listado).forEach(key =>{
            console.log(`${i.green} ${this.listado[key].desc} :: ${this.listado[key].completadoEm}`);
            i++;
        });
    }

}

module.exports = Tareas;