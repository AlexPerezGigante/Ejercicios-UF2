import { comentarioBD } from '../bd/bd.js'
import { comentario } from './comentario.js'

export const comentarios = {
  template: `
  <div class="container" id="divComentarios"></div>
  `,
  script: () => {
    let html = ''
    comentarioBD.forEach(element => {
      html += comentario(element)
    })
    console.log(html)
    document.querySelector('#divComentarios').innerHTML = html
  }
}
