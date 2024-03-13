
import { panel } from "./vistas/panel.js";
import { registro } from "./vistas/registre.js";
import { login } from "./vistas/login.js";
import { header } from "./vistas/header.js";





document.querySelector('header').innerHTML = header.template
header.script()

const botonRegistro = document.querySelector("#botonRegistro");
botonRegistro.addEventListener("click", cargarRegistro);

const botonLogin = document.querySelector("#botonLogin");
botonLogin.addEventListener("click", cargarLogin);

cargarLogin()




export function cargarRegistro(){

  document.querySelector('main').innerHTML = registro.template
  registro.script()
  
  document.getElementById("botonLogin").className = " btn btn-secondary ms-2";
  document.getElementById("botonRegistro").className = "d-none";
  document.getElementById("botonPanel").className = "d-none";
  document.getElementById("botonCerrarSesion").className =  "d-none";
  
  botonLogin.addEventListener("click", cargarLogin);
  botonRegistro.removeEventListener("click", cargarRegistro);
  botonRegistro.removeEventListener("click", cargarLogin);

}


function cargarLogin(){
  document.querySelector('main').innerHTML = login.template
  
  
  botonRegistro.removeEventListener("click", cargarRegistro);
  botonRegistro.removeEventListener("click", cargarLogin);
  botonRegistro.addEventListener("click", cargarRegistro);
  document.getElementById("botonLogin").className = "d-none";
  document.getElementById("botonRegistro").className = "btn btn-secondary ms-2";
  document.getElementById("botonPanel").className = "d-none";
  document.getElementById("botonCerrarSesion").className =  "d-none";
  localStorage.removeItem("usuario_log");
  login.script()
  
}


const botonPanel = document.querySelector("#botonPanel");
botonPanel.addEventListener("click", cargarPanel);
document.getElementById("botonPanel").className = "d-none";

function cargarPanel(){
  
  document.querySelector('main').innerHTML = panel.template
  panel.script()
  document.getElementById("botonLogin").className = " btn btn-secondary ms-2";
  document.getElementById("botonRegistro").className = "btn btn-secondary ms-2";
  document.getElementById("botonPanel").className = "d-none";
  document.getElementById("botonCerrarSesion").className =  "btn btn-secondary ms-2";
}



const botonCerrarSesion = document.querySelector("#botonCerrarSesion");
botonCerrarSesion.addEventListener("click", cerrarSesion);

function cerrarSesion(){
  document.querySelector("#correo").innerHTML= ''
  alert("Sesión cerrada correctamente!")
  localStorage.removeItem("usuario_log");
  cargarLogin()
}
