import { setComentarios, getComentarios, lsSetDades, lsGetDades } from "../bd/comentarios"
import { panel } from "./panel"


let html = ''

html += `
<main class="container mt-5">
    <div class="d-flex">
      <h1>Comentarios</h1><button class="btn btn-link ms-auto botonVolver" > < Volver</button>
    </div>
    
    <h2 class="my-4">Código ticket: <span id="codigo">123456</span></h2>
    <div class="">
      <form action="" class="form card p-3 shadow">
        <label for="comentario" class="form-label">Comentario: </label>
        <textarea class="form-control inputComentario" col="3"></textarea>
        <label for="fecha" class="form-label me-2 mt-3">Fecha: </label>
        <div class="d-flex align-items-center">
          <input type="datetime-local" class="form-control w-25 inputFecha">
          <button class="btn btn-success ms-auto botonAgregar">Añadir comentario</button>
        </div>
      </form>

      <div class="mt-4" id="comentarios">
        
        
      </div>
    </div>
    
  </main>
`

export const comentarios = {
    template: html
    ,
    script:(id)=>{
        lsSetDades(getComentarios())
        
        pintaComentarios()

        function pintaComentarios(){
            let html = ''
            
            const comentarios = lsGetDades()

            comentarios.forEach(element => {
                if(element.codigo == id){
                    html += `
                    <div class="card p-3">
                    <h5 class="text-end">Autor: <span>${element.autor}</span><span class="ms-4">${element.fecha}</span></h5>
                    <p>${element.comentario}</p>
                    </div>
                    `
                }
                
            });

            document.querySelector('#codigo').innerHTML = id
            document.querySelector('#comentarios').innerHTML = html

        }

        

        document.querySelector('body').addEventListener('click', (e) =>{
            
            if(e.target.classList.contains('botonVolver')){
                event.preventDefault()
                document.querySelector('main').innerHTML = panel.template
                panel.script()
            }
            if(e.target.classList.contains('botonAgregar')){
                event.preventDefault()
                let fecha = document.querySelector('.inputFecha').value
                fecha = fecha + ''
                fecha = fecha.split('T')
                fecha = fecha[0].split('-')
                fecha = fecha[2] + '/' + fecha[1] + '/' + fecha[0]

                let correo = document.querySelector('#correo').innerText

                const usuarios = lsGetUsuarios()
                
                function lsGetUsuarios(){
                  const textoLocal = localStorage.getItem('usuaris_Dades')
                  const dades = JSON.parse(textoLocal)
                  return(dades)
              }
              
              const bdElemento = usuarios.filter((item)=>item.email == correo)

              const autor = bdElemento[0].nombre

              

                const comentario = document.querySelector('.inputComentario').value

                const objComentario = {
                    "codigo": id,
                    "autor": autor,
                    "fecha": fecha,
                    "comentario": comentario
                }

                const array = lsGetDades()
                array.push(objComentario)
                setComentarios(array)
                lsSetDades(array)

                pintaComentarios()
                
                
            }
        })
    }
}
