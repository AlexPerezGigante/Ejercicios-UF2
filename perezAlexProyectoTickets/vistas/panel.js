import { setTiquets, getTiquets } from "../bd/tiquets.js"
let html=''

html+= `
    <div class="container mt-5 ">
        <h1>Administración de incidencias</h1>
        <h2 class="mt-5">Tickets pendientes</h2>
        <table class="table mt-4">
        <thead>
            <tr>
            <th>Código</th>
            <th>Fecha</th>
            
            <th>Aula</th>
            <th>Grupo</th>
            <th>Ordenador</th>
            <th>Descripción</th>
            <th>Alumno</th>
            <th></th>
            <th></th>
            </tr>
        </thead>
        <tbody id="tiquetsPendientes">

        </tbody>
    </table>
            
        <h2 class="mt-5">Tickets resueltos</h2>
        <table class="table mt-4">
        <thead>
            <tr>
            <th>Código</th>
            <th>Fecha</th>
            <th>Fecha resuelto</th>
            <th>Aula</th>
            <th>Grupo</th>
            <th>Ordenador</th>
            <th>Descripción</th>
            <th>Alumno</th>
            </tr>
        </thead>
        <tbody id="tiquetsResueltos">

        </tbody>
        </table>
    </div>
    `
export const panel = {
    template: html
    ,
    script: () =>{

        pintaTiquetsPendientes()
        pintaTiquetsResueltos()

        function pintaTiquetsPendientes(){
            let html = ''
            const tiquets = getTiquets()
            tiquets.forEach((element) => {
                if(element.estado=='pendiente'){
                    html +=`
                    <tr>
                    <td>${element.codigo}</td>
                    <td>${element.fechaCreado}</td>
                    <td>${element.aula}</td>
                    <td>${element.grupo}</td>
                    <td>${element.ordenador}</td>
                    <td>${element.descripcion}</td>
                    <td>${element.alumno}</td>
                    <td><button data-incidenciaid=${element.codigo} class="btn btn-success botonResolver" title="Resolver ticket">Resolver</button></td>
                    <td><button data-incidenciaid=${element.codigo} class="btn btn-warning botonEditar" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                    </button>
                    </td>
                    <td><button data-incidenciaid=${element.codigo} class="btn btn-info botonComentario" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
                    </button></td>
                    <td><button data-incidenciaid=${element.codigo} class="btn btn-danger botonBorrar" title="Eliminar ticket"><i class="bi bi-trash3"></i>
                    </i>
                    </button></td>
                    </tr>
                    `
                }
            }),

            document.querySelector('#tiquetsPendientes').innerHTML = html
        }

        function pintaTiquetsResueltos(){
            let html = ''
            const tiquets = getTiquets()
            tiquets.forEach((element) => {
                if(element.estado=='resuelto'){
                    html+=`
                    <tr>
                    <td>${element.codigo}</td>
                    <td>${element.fechaCreado}</td>
                    <td>${element.fechaResuelto}</td>
                    <td>${element.aula}</td>
                    <td>${element.grupo}</td>
                    <td>${element.ordenador}</td>
                    <td>${element.descripcion}</td>
                    <td>${element.alumno}</td>
                    
                    <td><button data-incidenciaid=${element.codigo} class="btn btn-info botonComentario" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
                    </button></td>
                    <td><button data-incidenciaid=${element.codigo} class="btn btn-danger botonBorrar" title="Eliminar ticket"><i class="bi bi-trash3"></i>
                    </i>
                    </button></td>
                    </tr>
                    `
                }
            });

            document.querySelector('#tiquetsResueltos').innerHTML = html
        }


        document.querySelector('body').addEventListener('click', (e) =>{
            // borrar tarea
            const tiquets = getTiquets()
            if(e.target.classList.contains('botonBorrar')){
                // console.log('borrar tarea', e.target.classList)
                // const divTarea = e.target.dataset.incidenciaid
                // console.log('divTarea', divTarea)
                // capturamos el id de la tarea en la que hemos hecho click
                const idTarea = e.target.dataset.incidenciaid
                 console.log('tareaId', idTarea)
        
                const bdElementoBorrado = tiquets.filter((item)=>item.codigo != idTarea)
                console.log(bdElementoBorrado)
                setTiquets(bdElementoBorrado)
                pintaTiquetsPendientes()
                pintaTiquetsResueltos()
                
            }
            if(e.target.classList.contains('botonEditar')){
                console.log('editar tarea', e.target.classList)
                const divTarea = e.target.closest('.tarea')
                const idTarea = divTarea.dataset.tareaid
                // const bdElementoEditado = datosBd.filter((item)=>item.id == idTarea)
                document.querySelector('input').value = e.target.closest('.tarea').querySelector('.textoTarea').innerHTML
                document.querySelector('.updateTarea').classList.remove('d-none')
                document.querySelector('.addTarea').classList.add('d-none')
                document.querySelector('input').dataset.tareaid = e.target.closest('.tarea').dataset.tareaid
        
        
                // pintarTareasPendientes(bdElementoBorrado)
                // datosBd=bdElementoBorrado
        
            }
            if(e.target.classList.contains('botonResolver')){
                const idTarea = e.target.dataset.incidenciaid
                 console.log('tareaId', idTarea)
        
                tiquets.forEach(element => {
                    if(element.codigo==idTarea){
                        element.estado='resuelto'
                    }
                });
                
                setTiquets(tiquets)
                pintaTiquetsPendientes()
                pintaTiquetsResueltos()
            }
        
        })


        console.log('Inyectamos vista panel')
    }
}