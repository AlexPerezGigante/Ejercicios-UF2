import { tiquets } from "../bd/tiquets.js"
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
        <tbody>
        `
        tiquets.forEach(element => {
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
                <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
                <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                </button>
                </td>
                <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
                </button></td>
                <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
                </i>
                </button></td>
                </tr>
                `
            }
        }),
        html+=`
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
        <tbody>`

        tiquets.forEach(element => {
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
                
                <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
                </button></td>
                <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
                </i>
                </button></td>
                </tr>
                `
            }
        });
        html+=`
            

        </tbody>
        </table>
    </div>
    `
export const panel = {
    template: html
    ,
    script: () =>{
        console.log('Inyectamos vista panel')
    }
}