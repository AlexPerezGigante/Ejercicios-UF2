import { usuaris } from "../bd/usuaris.js";

export const registro = {
    template://html 
    `
    <div class="container">
                <h1 class="mt-5 text-center">Registro</h1>
                <div class="m-5 mx-auto" style="max-width: 400px">
                    <form action="" class="form border shadow-sm p-3">
                        <label for="nombre" class="form-label">Nombre:</label>
                        <input id="nombre" type="text" class="form-control" />
                        <label for="apellidos" class="form-label">Apellidos:</label>
                        <input id="apellidos" type="text" class="form-control" />
                        <label for="email" class="form-label">Email:</label>
                        <input id="email" type="text" class="form-control" />
                        <label for="pass" class="form-label mt-3">Contraseña:</label>
                        <input id="pass" type="password" class="form-control" />
                        <button type="button" class="btn btn-primary w-100 mt-3" id="botonEnviarRegistro" >Enviar</button>
                    </form>
                </div>
            </div>
    `,
    script: () => {
        
        const inputEmail = document.querySelector("#email");
        // const email = inputEmail.value;
        const inputPass = document.querySelector("#pass");
        // const apellido1 = inputApellido1.value;

        const registro = {
            email: inputEmail.value ,
            password: inputPass.value
        }

       

        const botonEnviarRegistro = document.querySelector("#botonEnviarRegistro");
        botonEnviarRegistro.addEventListener("click", registrarUsuario(registro));

        // Esta función recibe un objeto, lee el localStorage, agrega un registro al objeto JSON del localStorage y lo vueve a subir al localStorage
        function registrarUsuario(usuario){
            console.log("insertar usuario: ", usuario)
            usuaris.push(usuario)
        }

        
    }
    
}