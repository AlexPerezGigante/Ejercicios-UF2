
import { comentarios } from "./comentarios"
import { panel } from "./panel"

let html = ''

html += `
<main class="container mt-5">
    <div class="d-flex">
      <h1>Nuevo ticket</h1><button class="btn btn-link ms-auto botonVolver" > < Volver</button>
    </div>
    
    <div class="mt-3">
      <form action="" class="form card p-3 shadow formTicket" novalidate>
      <div class="d-flex col-12 ">
          <div class="col-4">
              <label for="aula" class="form-label">Aula:</label> 
              <input required id="aula" type="text" class="form-control w-100 aula">
              <div class="invalid-feedback">
              Este campo no puede estar vacío!
            </div>
          </div>
          <div class="col-4 mx-1">
              <label for="grupo" class="form-label">Grupo:</label> 
              <input required id="grupo" type="text" class="form-control w-100 grupo">
              <div class="invalid-feedback">
              Este campo no puede estar vacío!
            </div>
          </div>
          <div class="col-4">
              <label for="ordenador" class="form-label">Ordenador:</label> 
              <input required id="ordenador" type="text" class="form-control w-100 ordenador">
              <div class="invalid-feedback">
              Este campo no puede estar vacío!
            </div>
          </div>
      </div>
    
      <label for="descripcion" class="form-label">Descripción:</label> 
      <input required id="descricion" type="text" class="form-control descripcion">
      <div class="invalid-feedback">
      Este campo no puede estar vacío!
    </div>

      <button type="submit" class="btn btn-success ms-auto mt-2 botonAgregarTicket">Añadir ticket</button>
      </form>
    </div>
    
  </main>
`

export const nuevoTicket = {
    template: html
    ,
    script:(rol)=>{

        const eventoBody = document.querySelector('body')

        let i = 0
        const funcion = (e) => {

        if(e.target.classList.contains('botonVolver')){
            event.preventDefault()
            quitarEvento()
            document.querySelector('main').innerHTML = panel.template
            panel.script(rol)
        }
        //Capturamos el formulario en una variable
  const formulario = document.querySelector(".formTicket")
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
      
      let correo = document.querySelector('#correo').innerText

      const usuarios = lsGetUsuarios()
      
      function lsGetUsuarios(){
        const textoLocal = localStorage.getItem('usuaris_Dades')
        const dades = JSON.parse(textoLocal)
        return(dades)
      }
    
    const bdElemento = usuarios.filter((item)=>item.email == correo)

    const alumno = bdElemento[0].nombre + ' ' + bdElemento[0].apellidos

    

      
      if(i==0){
        const inputAula = document.querySelector('.aula')
        const aula = inputAula.value.toUpperCase()
  
        const inputDescripcion = document.querySelector('.descripcion')
        const descripcion = inputDescripcion.value
  
        const inputGrupo = document.querySelector('.grupo')
        const grupo = inputGrupo.value.toUpperCase()
  
        const inputOrdenador = document.querySelector('.ordenador')
        const ordenador = inputOrdenador.value.toUpperCase()
        let cont = ''
        if(lsGetTickets() == null){
          let cont = 1
        }else{
          const long = lsGetTickets()
          cont = long.length
        }

         
  
        const objTicket = {
          codigo: cont+1,
          fechaCreado: fecha,
          fechaResuelto: '',
          aula: aula,
          grupo: grupo,
          ordenador: ordenador,
          descripcion: descripcion,
          alumno: alumno,
          estado: 'pendiente'
       }
       let array = ''
       if(lsGetTickets() == null){
         array = []
      }else{
         array = lsGetTickets()
        console.log(array)
        
      }
      array.push(objTicket)
         
         lsSetTickets(array)
  
         quitarEvento()

         if(rol!='alumno'){
          document.querySelector('main').innerHTML = panel.template
          panel.script(rol)
         }else{
          const insert = `<h1>Ticket insertado correctamente!</h1>`
          document.querySelector('main').innerHTML= insert
         }

         
      }

      i=i+1
      
 

     
      
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

        function lsSetTickets(dades){
          const tickets = JSON.stringify(dades)
          localStorage.setItem('tickets_Dades', tickets)
          return(true)
      }
      
      // Esta función lee el localStorage devuelve un onbjeto JSON
      function lsGetTickets(){
          const textoLocal = localStorage.getItem('tickets_Dades')
          const dades = JSON.parse(textoLocal)
          return(dades)
      }
    }
}