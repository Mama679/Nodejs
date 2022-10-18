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
        console.log();
        let i = 1;
        Object.keys(this.listado).forEach(key =>{
            console.log(`${(i + ".").green} ${this.listado[key].desc} :: ${(this.listado[key].completadoEn) === null ? 'Pendiente'.red:'Completado'.green}`);
            i++;
        });

        /*this.listado.forEach((tarea,i) => {
            const idx = `${i+1}`.green;
            const {desc,completadoEn} = tarea;
            const estado = (completadoEn) ? 'Completado'.green : 'Pendiente'.red;

            console.log(`${idx} ${desc} :: ${estado}`);
        });*/
    }

    listadoEstado(completados = true){
        console.log();
        let i = 0;
        Object.keys(this.listado).forEach(key =>{
            const estado = this.listado[key].completadoEn; 
            
            if(completados)
            {
                if(estado)
                {
                    i = i + 1;
                    console.log(`${(i + ".").green} ${this.listado[key].desc} :: ${'Completado'.green}`);
                } 
                
            }
            else
            {
                if(!estado)
                {
                    i = i + 1;
                    console.log(`${(i + ".").green} ${this.listado[key].desc} :: ${'Pendiente'.red}`);
                }
            }
            
            
        });
    }

    borrarTarea(id = ''){
        
        if(this.listado[id])
        {
            delete this.listado[id];
        }
    }
    

}

module.exports = Tareas; 