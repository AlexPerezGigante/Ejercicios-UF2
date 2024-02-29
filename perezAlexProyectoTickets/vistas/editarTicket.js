

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

export const editarTickets = {
    template: html,

    script:(ticket)=>{

    }
}