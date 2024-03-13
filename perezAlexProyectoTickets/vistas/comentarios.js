import { panel } from "./panel"


let html = ''

html += `
<main class="container mt-5">
    <div class="d-flex">
      <h1>Comentarios</h1><button class="btn btn-link ms-auto botonVolver" > < Volver</button>
    </div>
    
    <h2 class="my-4">Código ticket: <span id="codigo">123456</span></h2>
    <div class="">
      <form action="" class="form card p-3 shadow" novalidate>
        <label for="comentario" class="form-label">Comentario: </label>
        <textarea required class="form-control inputComentario" col="3"></textarea>
        <div class="invalid-feedback">
          Este campo no puede estar vacío!
        </div>
        <div class="mt-2 d-flex align-items-center">
          <button type="submit" class="btn btn-success ms-auto botonAgregarComentario">Añadir comentario</button>
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
    script:(id, rol)=>{
        if(lsGetComentarios() == null){

        }else{
          pintaComentarios()
        }
      
        const eventoBody = document.querySelector('body')
        
        

        function pintaComentarios(){
            let html = ''
            
            const comentarios = lsGetComentarios()

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

        const funcion = (e) => {

        if(e.target.classList.contains('botonVolver')){
            event.preventDefault()
            quitarEvento()
            document.querySelector('main').innerHTML = panel.template
            panel.script(rol)
        }
        //Capturamos el formulario en una variable
        const formulario = document.querySelector("form")
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
            
            let fecha = new Date()
            let mes = ''
            let dia = ''
            if((fecha.getMonth()+1)>=10){
              mes = (fecha.getMonth()+1)
            }else{
              mes = '0' + (fecha.getMonth()+1)
            }
            if(fecha.getDate()>=10){
              dia = fecha.getDate()
            }else{
              dia = '0' + fecha.getDate()
            }
            fecha=  dia + '/' + mes + '/' + fecha.getFullYear()

            

            const usuario = lsGetLogin()
            
            function lsGetLogin(){
              const textoLocal = localStorage.getItem('usuario_log')
              const dades = JSON.parse(textoLocal)
              return(dades)
          }
          

          
            const inputComentario = document.querySelector('.inputComentario')
            const comentario = inputComentario.value
            inputComentario.value = ''

            const objComentario = {
                "codigo": id,
                "autor": usuario.nombre,
                "fecha": fecha,
                "comentario": comentario
            }
            
            let array = ''
            if(lsGetComentarios()==null){
              array = []
            }else{
              array = lsGetComentarios()
            }
            
            array.push(objComentario)
            lsSetComentarios(array)
            
            pintaComentarios()
            
          }
          
        });
           
            
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

         // Esta función agrega a localStorage un objeto.
 function lsSetComentarios(dades){
  const comentarios = JSON.stringify(dades)
  localStorage.setItem('comentarios_Dades', comentarios)
  return(true)
}

// Esta función lee el localStorage devuelve un onbjeto JSON
 function lsGetComentarios(){
  const textoLocal = localStorage.getItem('comentarios_Dades')
  const dades = JSON.parse(textoLocal)
  return(dades)
}
    }
}
