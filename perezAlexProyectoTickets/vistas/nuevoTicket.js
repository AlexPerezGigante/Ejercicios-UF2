import { lsGetDades, lsSetDades, setTiquets } from "../bd/tiquets"
import { panel } from "./panel"

let html = ''

html += `
<main class="container mt-5">
    <div class="d-flex">
      <h1>Comentarios</h1><button class="btn btn-link ms-auto botonVolver" > < Volver</button>
    </div>
    
    <h2 class="my-4">Código ticket: <span id="codigo">123456</span></h2>
    <div class="">
      <form action="" class="form card p-3 shadow formTicket">
      <div class="d-flex col-12 ">
          <div class="col-4">
              <label for="aula" class="form-label">Aula:</label> 
              <input type="text" class="form-control w-100 aula">
          </div>
          <div class="col-4 mx-1">
              <label for="grupo" class="form-label">Grupo:</label> 
              <input type="text" class="form-control w-100 grupo">
          </div>
          <div class="col-4">
              <label for="ordenador" class="form-label">Ordenador:</label> 
              <input type="text" class="form-control w-100 ordenador">
          </div>
      </div>
      

      <label for="descripcion" class="form-label">Descripción:</label> 
      <input type="text" class="form-control descripcion">
      <button type="submit" class="btn btn-success ms-auto botonAgregarComentario">Añadir ticket</button>
      </form>
    </div>
    
  </main>
`

export const nuevoTicket = {
    template: html
    ,
    script:()=>{

        const eventoBody = document.querySelector('body')
        const funcion = (e) => {

        if(e.target.classList.contains('botonVolver')){
            event.preventDefault()
            quitarEvento()
            document.querySelector('main').innerHTML = panel.template
            panel.script()
        }
        //Capturamos el formulario en una variable
  const formulario = document.querySelector(".formTicket")
  //Detectamos su evento submit (enviar)
  formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log('form')
    //Comprobamos si el formulario no valida 
    if (!formulario.checkValidity()) {
      //Detenemos el evento enviar (submit)
      event.preventDefault()
      event.stopPropagation()
      //Y añadimos la clase 'was-validate' para que se muestren los mensajes
    formulario.classList.add('was-validated')
    }else{
      
      const inputFecha = document.querySelector('.inputFecha')
      let fecha = new Date()
      console.log(fecha)
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

    const alumno = bdElemento[0].nombre + ' ' + bdElemento[0].apellidos

    

      const inputDescripcion = document.querySelector('.descripcion')
      const descripcion = inputDescripcion.value
      inputDescripcion.value = ''

      const inputAula = document.querySelector('.aula')
      const aula = inputAula.value.toUpperCase()
      inputAula.value = ''

      const inputGrupo = document.querySelector('.descripcion')
      const grupo = inputGrupo.value.toUpperCase()
      inputGrupo.value = ''

      const inputOrdenador = document.querySelector('.ordenador')
      const ordenador = inputOrdenador.value.toUpperCase()
      inputOrdenador.value = ''

    //   const objComentario = {
    //       "codigo": id,
    //       "autor": autor,
    //       "fecha": fecha,
    //       "comentario": comentario
    //   }

    //   const array = lsGetDades()
    //   array.push(objComentario)
    //   setComentarios(array)
    //   lsSetDades(array)

    //   pintaComentarios()
      
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
    }
}