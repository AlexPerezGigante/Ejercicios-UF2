// Creamos objeto vistaComentarios con la plantilla del h1 y h2. Creamos script que indica que se ha hecho
import { comentarios } from './comentarios.js'
export const vistaComentarios = {
  template: `<div class="container">
  <div class="d-flex">
  <h1>Comentarios</h1><button class="btn btn-link ms-auto"> < Volver</button>
  </div>
  <h2 class="my-4">Código ticket: <span>123456</span></h2>
  <form action="" class="form card p-3 shadow">
      <label for="comentario" class="form-label">Comentario: </label>
      <textarea class="form-control" col="3"></textarea>
      <label for="fecha" class="form-label me-2 mt-3">Fecha: </label>
      <div class="d-flex align-items-center">
        <input type="datetime-local" class="form-control w-25">
        <button class="btn btn-success ms-auto">Añadir comentario</button>
      </div>
    </form>
    
    </div>`,
  script: () => {
    console.log('inyectamos h1 y h2')
    document.querySelector('#comentarios').innerHTML = comentarios.template
    comentarios.script()
  }
}
