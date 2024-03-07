import { lsGetDades } from "../bd/usuaris";
import { cargarRegistro } from "../main";
import { panel } from "./panel";

export const login = {
    template: //html
    `
    <div class="container">
                <h1 class="mt-5 text-center">Inicia sesión</h1>
                <div class="m-5 mx-auto" style="max-width: 400px">
                    <form action="" class="form border shadow-sm p-3">
                        <label for="email" class="form-label">Email:</label>
                        <input id="email" type="text" class="form-control" />
                        <label for="pass" class="form-label mt-3">Contraseña:</label>
                        <input id="pass" type="password" class="form-control" />
                        <div class="form-check mt-3">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                                checked
                            />
                            <label class="form-check-label" for="flexCheckChecked">
                                Recordar sesión
                            </label>
                        </div>
                        <a class="d-block text-end" href="#">¿Has olvidado tu contraseña?</a>
                        <button type="button" class="btn btn-primary w-100 mt-3" id="botonIniciar" href="#">Iniciar sesión</button>
                    </form>
                    
                    <button class="d-block mt-5 btn btn-secondary mx-auto botonRegistro col-12 ">¿Eres nuevo? Regístrate</button>
                </div>
            </div>
    `,
    script: () => {
        console.log('Inyectamos login')
        const botonIniciar = document.querySelector("#botonIniciar");
        botonIniciar.addEventListener("click", iniciarSesion);

        const botonRegistro = document.querySelector('.botonRegistro')
        botonRegistro.addEventListener('click', llamaRegistro)
        
        function iniciarSesion () {
            console.log('iniciando sesion')
            const inputEmail = document.querySelector("#email");
            const email= inputEmail.value
            const inputPass = document.querySelector("#pass");
            const pass=inputPass.value
            let html=''
            let error=1
            lsGetDades().forEach(element => {
                if(email == element.email){
                    if(pass == element.password){
                        error=0
                    }
                }
            });
            if(error==1){
                alert("Correo o contraseña erronea!")
                
            }
            else{
                alert("Bienvenido " + email)

                    quitarEventoIniciar()
                    html+=email
                    document.querySelector("#correo").innerHTML=html
                    event.preventDefault();
                    document.querySelector('main').innerHTML = panel.template
                    panel.script()
                    document.getElementById("botonLogin").className = " btn btn-secondary ms-2";
                    document.getElementById("botonRegistro").className = "btn btn-secondary ms-2";
                    document.getElementById("botonPanel").className = "d-none";
                    document.getElementById("botonCerrarSesion").className =  "btn btn-secondary ms-2";
                  
            }
        }
        
        function llamaRegistro(){
            quitarEventoRegistro
            cargarRegistro()
        }

        function quitarEventoRegistro(){
            botonRegistro.removeEventListener('click', llamaRegistro)
        }
       
        function quitarEventoIniciar(){
            botonIniciar.removeEventListener("click", iniciarSesion)
        }
        
            
        
    }
}