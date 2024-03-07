import { lsGetDades, lsSetDades, setUsuaris, getUsuaris } from "../bd/usuaris.js";
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
                        <input required id="email" type="text" class="form-control" />
                        <div class="invalid-feedback email">
                            Este campo no puede estar vacío!
                        </div>
                        <label  for="pass" class="form-label mt-3">Contraseña:</label>
                        <input required min-lenght=6 id="pass" type="password" class="form-control" />
                        <div class="invalid-feedback">
                            Contraseña de mínimo 6 carácteres
                        </div>
                        <button type="submit" class="btn btn-primary w-100 mt-3" id="botonEnviarRegistro" >Enviar</button>
                    </form>
                </div>
            </div>
    `,
    script: () => { 
        const formulario = document.querySelector(".formRegistro")
        formulario.addEventListener("submit", (event) => {
            const menseja = 'Este campo no puede estar vacío!'
            document.querySelector('.email').innerHTML = menseja
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
           
            const registro = {
                nombre: inputNombre.value,
                apellidos: inputApellido.value,
                email: inputEmail.value ,
                password: inputPass.value,
                rol:"alumno"
            }
            const usuaris = lsGetDades()
            
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
                setUsuaris(usuaris)
                lsSetDades(usuaris)
                alert("Usuario "+ inputEmail.value + " creado correctamente! ")
    
                document.querySelector('main').innerHTML = login.template
                login.script()
            }
            

           
          }
        })
        
       


        
        
    }
    
}