import { setTiquets ,getTiquets, lsSetDades, lsGetDades  } from "../bd/tiquets.js"
import { comentarios } from "./comentarios.js"
import { nuevoTicket } from "./nuevoTicket.js"

let html=''

html+= `
    <div class="container mt-5 ">
        <h1>Administración de incidencias</h1>
        <button class="btn btn-success float-end botonCrear" title="añadir ticket">Añadir Ticket</button>
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

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Editar ticket</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
      </div>
  </div>
</div>
    </div>
    `
export const panel = {
    template: html
    ,
    script: (rol) =>{

        lsSetDades(getTiquets())
        pintaTiquetsPendientes()
        pintaTiquetsResueltos()
        const eventoBody = document.querySelector('body')
        
        

        function pintaTiquetsPendientes(){
            let html = ''
            const tiquets = lsGetDades()
            tiquets.forEach((element) => {
                if(rol=='administrador'){
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
                        <td><button data-incidenciaid=${element.codigo} class="btn btn-warning botonEditar"  title="Añadir comentario"><i data-incidenciaid=${element.codigo} class="bi  bi-pencil botonEditar" ></i>
                        </button>
                        </td>
                        <td><button data-incidenciaid=${element.codigo} class="btn btn-info botonComentario" title="Ver comentarios"><i data-incidenciaid=${element.codigo} class="bi bi-chat-left-text botonComentario"></i>
                        </button></td>
                        <td><button data-incidenciaid=${element.codigo} class="btn btn-danger botonBorrar" title="Eliminar ticket"><i data-incidenciaid=${element.codigo} class="bi bi-trash3 botonBorrar"></i>
                        </i>
                        </button></td>
                        </tr>
                        `
                    }
                }else{
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
                        <td><button data-incidenciaid=${element.codigo} class="btn btn-info botonComentario" title="Ver comentarios"><i data-incidenciaid=${element.codigo} class="bi bi-chat-left-text botonComentario"></i>
                        </button></td>
                        </tr>
                        `
                    }
                }
                
            }),

            document.querySelector('#tiquetsPendientes').innerHTML = html
        }

        function pintaTiquetsResueltos(){
            let html = ''
            const tiquets = lsGetDades()
            tiquets.forEach((element) => {
                if(rol=='administrador'){
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
                        
                        <td><button data-incidenciaid=${element.codigo} class="btn btn-info botonComentario" title="Ver comentarios"><i data-incidenciaid=${element.codigo} class="bi bi-chat-left-text botonComentario"></i>
                        </button></td>
                        <td><button data-incidenciaid=${element.codigo} class="btn btn-danger botonBorrar" title="Eliminar ticket"><i data-incidenciaid=${element.codigo} class="bi bi-trash3 botonBorrar"></i>
                        </i>
                        </button></td>
                        </tr>
                        `
                    }
                }else{
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
                        
                        <td><button data-incidenciaid=${element.codigo} class="btn btn-info botonComentario" title="Ver comentarios"><i data-incidenciaid=${element.codigo} class="bi bi-chat-left-text botonComentario"></i>
                        </button></td>
                        </tr>
                        `
                    }
                }
               
            });

            document.querySelector('#tiquetsResueltos').innerHTML = html
        }

        const funcion = (e) =>{
            // borrar tarea
            
            const tiquets = lsGetDades()
            if(e.target.classList.contains('botonBorrar')){
                // console.log('borrar tarea', e.target.classList)
                // const divTarea = e.target.dataset.incidenciaid
                // console.log('divTarea', divTarea)
                // capturamos el id de la tarea en la que hemos hecho click
                const idTarea = e.target.dataset.incidenciaid
        
                const bdElementoBorrado = tiquets.filter((item)=>item.codigo != idTarea)
                console.log(bdElementoBorrado)
                lsSetDades(bdElementoBorrado)
                setTiquets(bdElementoBorrado)
                pintaTiquetsPendientes()
                pintaTiquetsResueltos()
                
            }
            if(e.target.classList.contains('botonCrear')){
                quitarEvento()
                document.querySelector('main').innerHTML = nuevoTicket.template
                nuevoTicket.script(rol)

            }
            if(e.target.classList.contains('botonEditar')){
                const idTarea = e.target.dataset.incidenciaid

                const elemento = tiquets.filter((item)=>item.codigo == idTarea)

                let fecha = elemento[0].fechaCreado
                fecha= fecha.split('/')
                fecha= fecha[2] + '-' + fecha[1] + '-' + fecha[0] + 'T00:00:00'
                
                
                const html = `
                <form action="" class="form card p-3 shadow formEditarTicket" novalidate>
                    <p>Código incidencia: <span id="codigo">${elemento[0].codigo}</span></p>
                    <label for="fecha" class="form-label">Fecha:</label> 
                    <input required type="datetime-local" class="form-control fecha" value='${fecha}'>
                    <div  class="invalid-feedback">
                            Este campo no puede estar vacío!
                        </div>
                    <div class="d-flex">
                        <div>
                            <label for="aula" class="form-label">Aula:</label> 
                            <input required type="text" class="form-control w-75  aula" value='${elemento[0].aula}'>
                            <div  class="invalid-feedback">
                            Este campo no puede estar vacío!
                        </div>
                        </div>
                        <div>
                            <label for="grupo" class="form-label">Grupo:</label> 
                            <input required type="text" class="form-control w-75  grupo" value='${elemento[0].grupo}'>
                            <div  class="invalid-feedback">
                            Este campo no puede estar vacío!
                        </div>
                        </div>
                        <div>
                            <label for="ordenador" class="form-label">Ordenador:</label> 
                            <input required type="text" class="form-control w-75 ordenador" value='${elemento[0].ordenador}'>
                            <div class="invalid-feedback">
                            Este campo no puede estar vacío!
                        </div>
                        </div>
                    </div>
                    
            
                    <label for="descripcion" class="form-label">Descripción:</label> 
                    <input required type="text" class="form-control descripcion" value='${elemento[0].descripcion}'>
                    <div class="invalid-feedback">
                            Este campo no puede estar vacío!
                        </div>
                    <label for="alumno" class="form-label">Alumno:</label> 
                    <input required type="text" class="form-control alumno" value='${elemento[0].alumno}'>
                    <div class="invalid-feedback">
                            Este campo no puede estar vacío!
                        </div>
                    
                </div>
                <div class="modal-footer">
            
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="submit" class="btn btn-primary botonGuardar" >Guardar cambios</button>
                </div>
                </form>
                `

                document.querySelector('.modal-body').innerHTML = html

                const modal = new bootstrap.Modal('#exampleModal');
                modal.show();

                const formulario = document.querySelector(".formEditarTicket")
                //Detectamos su evento submit (enviar)
                formulario.addEventListener("submit", (event) => {
                    event.preventDefault()
                    //Comprobamos si el formulario no valida 
                    if (!formulario.checkValidity()) {
                    //Detenemos el evento enviar (submit)
                    event.preventDefault()
                    event.stopPropagation()
                    //Y añadimos la clase 'was-validate' para que se muestren los mensajes
                    formulario.classList.add('was-validated')
                    }else{
                    let date = document.querySelector('.fecha').value
                    date = date + ''
                    date = date.split('T')
                    date = date[0].split('-')
                    date = date[2] + '/' + date[1] + '/' + date[0]
                    
                    const id = elemento[0].codigo

                    const aula = document.querySelector('.aula').value
                    const grupo = document.querySelector('.grupo').value
                    const ordenador = document.querySelector('.ordenador').value
                    const descripcion = document.querySelector('.descripcion').value
                    const alumno = document.querySelector('.alumno').value

                    const obj = {
                        
                            codigo: id,
                            fechaCreado: date,
                            fechaResuelto: '',
                            aula: aula.toUpperCase(),
                            grupo: grupo.toUpperCase(),
                            ordenador: ordenador.toUpperCase(),
                            descripcion: descripcion,
                            alumno: alumno,
                            estado: 'pendiente'  
                    }
                    const bdElementoBorrado = tiquets.filter((item)=>item.codigo != id)

                    bdElementoBorrado.push(obj)

                    lsSetDades(bdElementoBorrado)
                    setTiquets(bdElementoBorrado)
                    pintaTiquetsPendientes()
                    pintaTiquetsResueltos()




                    modal.hide()
                    
                }})
                // editarTickets.script(elemento[0])
                
        
        
                // pintarTareasPendientes(bdElementoBorrado)
                // datosBd=bdElementoBorrado
        
            }
            if(e.target.classList.contains('botonComentario')){
                const idTarea = e.target.dataset.incidenciaid
                // const bdElementoEditado = datosBd.filter((item)=>item.id == idTarea)
                quitarEvento()
                document.querySelector('main').innerHTML = comentarios.template
               
                comentarios.script(idTarea, rol)
               
        
                // pintarTareasPendientes(bdElementoBorrado)
                // datosBd=bdElementoBorrado
        
            }
            if(e.target.classList.contains('botonResolver')){
                const idTarea = e.target.dataset.incidenciaid
                 console.log('tareaId', idTarea)
                
                 let fecha = new Date()
                 let mes = ''
                 let dia = ''
                 if(fecha.getMonth()>=10){
                   mes = fecha.getMonth()
                 }else{
                   mes = '0' + fecha.getMonth()
                 }
                 if(fecha.getDay()>=10){
                   dia = fecha.getDay()
                 }else{
                   dia = '0' + fecha.getDay()
                 }
                 fecha=  dia + '/' + mes + '/' + fecha.getFullYear()

                tiquets.forEach(element => {
                    if(element.codigo==idTarea){
                        element.estado='resuelto'
                        element.fechaResuelto = fecha
                    }
                });
                
                lsSetDades(tiquets)
                setTiquets(tiquets)
                pintaTiquetsPendientes()
                pintaTiquetsResueltos()
            }
        }
        document.querySelector('#botonLogin').addEventListener('click', quitarEvento)
        document.querySelector('#botonRegistro').addEventListener('click', quitarEvento)
        document.querySelector('#botonCerrarSesion').addEventListener('click', quitarEvento)

        quitarEvento()
        ponerEvento()

        

        function quitarEvento(){
            eventoBody.removeEventListener('click', funcion)
        }
        function ponerEvento(){
            eventoBody.addEventListener('click', funcion)
        }
        
    }
}