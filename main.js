// Importamos el header
import { header } from './componentes/header.js'
// Importamos la parte estática de la página: h1, h2
import { vistaComentarios } from './componentes/vistacomentarios.js'

// Inyectamos en el header el la plantilla del menú de arriba
document.querySelector('header').innerHTML = header.template
// Ejecutamos el script del header, en éste caso en un consolelog
header.script()
// inyectamos la parte estática en main
document.querySelector('main').innerHTML = vistaComentarios.template
// ejecutamos script que indica que se ha ejecutado
vistaComentarios.script()
