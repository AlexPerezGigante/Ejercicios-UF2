
import { panel } from "./vistas/panel.js";
import { registro } from "./vistas/registre.js";
import { login } from "./vistas/login.js";
import { header } from "./vistas/header.js";

document.querySelector('header').innerHTML = header.template
header.script()
document.querySelector('main').innerHTML = panel.template
panel.script()

const botonRegistro = document.querySelector("#botonRegistro");
botonRegistro.addEventListener("click", cargarRegistro);

function cargarRegistro(){
  event.preventDefault();
  document.querySelector('main').innerHTML = registro.template
  registro.script()
}

const botonLogin = document.querySelector("#botonLogin");
botonLogin.addEventListener("click", cargarLogin);

function cargarLogin(){
  event.preventDefault();
  document.querySelector('main').innerHTML = login.template
  login.script()
  document.getElementById("botonLogin").className = "d-none";
  document.getElementById("botonRegistro").className = "btn btn-secondary ms-2";
  document.getElementById("botonPanel").className = "btn btn-secondary ms-2";
}
const botonPanel = document.querySelector("#botonPanel");
botonPanel.addEventListener("click", cargarPanel);

function cargarPanel(){
  event.preventDefault();
  document.querySelector('main').innerHTML = panel.template
  panel.script()
}

