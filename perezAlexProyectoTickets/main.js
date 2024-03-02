
import { panel } from "./vistas/panel.js";
import { registro } from "./vistas/registre.js";
import { login } from "./vistas/login.js";
import { header } from "./vistas/header.js";
import { setUsuaris, getUsuaris, lsGetDades, lsSetDades } from "./bd/usuaris.js";




document.querySelector('header').innerHTML = header.template
header.script()
document.querySelector('main').innerHTML = panel.template
panel.script()

const botonRegistro = document.querySelector("#botonRegistro");
botonRegistro.addEventListener("click", cargarRegistro);

const botonLogin = document.querySelector("#botonLogin");
botonLogin.addEventListener("click", cargarLogin);

lsSetDades(getUsuaris())

function cargarRegistro(){
  event.preventDefault();
  document.querySelector('main').innerHTML = registro.template
  
  document.getElementById("botonLogin").className = " btn btn-secondary ms-2";
  document.getElementById("botonRegistro").className = "d-none";
  document.getElementById("botonPanel").className = "d-none";
  document.getElementById("botonCerrarSesion").className =  "d-none";
  
  const botonEnviarRegistro = document.querySelector("#botonEnviarRegistro");
  botonEnviarRegistro.addEventListener("click", registrarUsuario);
  botonLogin.addEventListener("click", cargarLogin);
  botonRegistro.removeEventListener("click", cargarRegistro);
  botonRegistro.removeEventListener("click", cargarLogin);

}

function registrarUsuario(){
  registro.script()
  cargarLogin()
}






function cargarLogin(){
  event.preventDefault();
  document.querySelector('main').innerHTML = login.template
  login.script()
  botonRegistro.removeEventListener("click", cargarRegistro);
  botonRegistro.removeEventListener("click", cargarLogin);
  botonRegistro.addEventListener("click", cargarRegistro);
  document.getElementById("botonLogin").className = "d-none";
  document.getElementById("botonRegistro").className = "btn btn-secondary ms-2";
  document.getElementById("botonPanel").className = "d-none";
  document.getElementById("botonCerrarSesion").className =  "d-none";
  
}


const botonPanel = document.querySelector("#botonPanel");
botonPanel.addEventListener("click", cargarPanel);
document.getElementById("botonPanel").className = "d-none";

function cargarPanel(){
  event.preventDefault();
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
  const mail="administrador@fpllefia.com"
  document.querySelector("#correo").innerHTML=mail
  alert("Sesión cerrada correctamente!")
  cargarLogin()
}
