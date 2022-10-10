const Tarea = require("./tarea");

class Tareas{
    listado = {};

    constructor(){
        this.listado = {};
    }

    getListadoArr(){
        const _listado = [];
        Object.keys(this.listado).forEach(key => {
            console.log(key);
        });

        return _listado;
    }
    
    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this.listado[tarea.id] = tarea;
    }
}

module.exports = Tareas;