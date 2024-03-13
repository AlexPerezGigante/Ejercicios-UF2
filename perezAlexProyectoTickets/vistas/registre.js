
import { login } from "./login.js";


export const registro = {
    template://html 
    `
    <div class="container">
                <h1 class="mt-5 text-center">Registro</h1>
                <div class="m-5 mx-auto" style="max-width: 400px">
                    <form action="" class="form border shadow-sm p-3 formRegistro" novalidate>
                        <label for="nombre" class="form-label">Nombre:</label>
                        <input required id="nombre" type="text" class="form-control" />
                        <div class="invalid-feedback">
                            Este campo no puede estar vacío!
                        </div>
                        <label  for="apellidos" class="form-label">Apellidos:</label>
                        <input required id="apellidos" type="text" class="form-control" />
                        <div class="invalid-feedback">
                            Este campo no puede estar vacío!
                        </div>
                        <label  for="email" class="form-label">Email:</label>
                        <input required id="email" type="email" class="form-control" />
                        <div class="invalid-feedback email">
                            Este campo no puede estar vacío o no es un correo!
                        </div>
                        <label  for="pass" class="form-label mt-3">Contraseña:</label>
                        <input required min-lenght=6 id="pass" type="password" class="form-control" />
                        <div class="invalid-feedback">
                            Contraseña de mínimo 6 carácteres
                        </div>
                        <label  for="rol" class="form-label mt-3">Rol:</label>
                        <select required name="rol" id="rol" class="form-control">
                            <option value="alumno">Alumno</option>
                            <option value="profesor">Profesor</option>
                            <option value="administrador">Administrador</option>
                        </select>
                        <div class="invalid-feedback">
                                Selecciona una opción
                        </div>
                        <button type="submit" class="btn btn-primary w-100 mt-3" id="botonEnviarRegistro" >Enviar</button>
                    </form>
                </div>
            </div>
    `,
    script: () => { 
        const formulario = document.querySelector(".formRegistro")
        formulario.addEventListener("submit", (event) => {
            const mensaje = 'Este campo no puede estar vacío o no es un correo!'
            document.querySelector('.email').innerHTML = mensaje
            event.preventDefault()
          //Comprobamos si el formulario no valida 
          if (!formulario.checkValidity()) {
            //Detenemos el evento enviar (submit)
            event.preventDefault()
            event.stopPropagation()
            //Y añadimos la clase 'was-validate' para que se muestren los mensajes
          formulario.classList.add('was-validated')
          }else{
            const inputNombre = document.querySelector('#nombre')
            const inputApellido = document.querySelector('#apellidos')
            const inputEmail = document.querySelector("#email");
            const inputPass = document.querySelector("#pass");
            const selectRol = document.querySelector('#rol')
           
            const registro = {
                nombre: inputNombre.value,
                apellidos: inputApellido.value,
                email: inputEmail.value ,
                password: inputPass.value,
                rol:selectRol.value
            }
            let usuaris = ''
            if(lsGetUsuarios()==null){
                usuaris = []

                usuaris.push(registro)
                    lsSetLogin(registro)
                    lsSetUsuarios(usuaris)
                    alert("Usuario "+ inputEmail.value + " creado correctamente! ")
        
                    document.querySelector('main').innerHTML = login.template
                    login.script()
            }else{
                usuaris = lsGetUsuarios()
            
                const array = usuaris.filter((e)=> e.email == registro.email)
    
                if(array.length>0){
                    formulario.classList.remove('was-validated')
                    inputEmail.value = ''
                    let menseja = 'Ya hay una cuenta asociada a este correo'
                    document.querySelector('.email').innerHTML = menseja
                    if (!formulario.checkValidity()) {
                        //Detenemos el evento enviar (submit)
                        event.preventDefault()
                        event.stopPropagation()
                        //Y añadimos la clase 'was-validate' para que se muestren los mensajes
                      formulario.classList.add('was-validated')
                    }
                    
                    
                    
    
                }else{
                    
                    usuaris.push(registro)
                    lsSetLogin(registro)
                    lsSetUsuarios(usuaris)
                    alert("Usuario "+ inputEmail.value + " creado correctamente! ")
        
                    document.querySelector('main').innerHTML = login.template
                    login.script()
                }
            }
            
            

           
          }
        })
        
       

 // Esta función agrega a localStorage un objeto.
 function lsSetUsuarios(dades){
    const usuaris = JSON.stringify(dades)
    localStorage.setItem('usuaris_Dades', usuaris)
    return(true)
}

// Esta función lee el localStorage devuelve un onbjeto JSON
function lsGetUsuarios(){
    const textoLocal = localStorage.getItem('usuaris_Dades')
    const dades = JSON.parse(textoLocal)
    return(dades)
}
 
function lsSetLogin(object){
    const usuarioLog = JSON.stringify(object)
    localStorage.setItem('usuario_log', usuarioLog)
    return(true)
}
        
    }
    
}