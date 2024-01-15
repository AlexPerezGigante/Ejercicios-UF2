
import { panel } from "./vistas/panel.js";
import { registro } from "./vistas/registre.js";
import { login } from "./vistas/login.js";
import { header } from "./vistas/header.js";
import { usuaris } from "./bd/usuaris.js";

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
  document.getElementById("botonLogin").className = " btn btn-secondary ms-2";
  document.getElementById("botonRegistro").className = "d-none";
  document.getElementById("botonPanel").className = "btn btn-secondary ms-2";
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
document.getElementById("botonPanel").className = "d-none";
function cargarPanel(){
  event.preventDefault();
  document.querySelector('main').innerHTML = panel.template
  panel.script()
  document.getElementById("botonLogin").className = " btn btn-secondary ms-2";
  document.getElementById("botonRegistro").className = "btn btn-secondary ms-2";
  document.getElementById("botonPanel").className = "d-none";
}

function lsSetDades(dades){
	const tetris_Dades = JSON.stringify(dades)
	localStorage.setItem('tetris_Dades', tetris_Dades)
	return(true)
}