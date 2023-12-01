export const comentario = (elementoComentario) => {
  const template = `
  <div class="mt-3 card p-3">
  <h5 class="text-end">Autor: <span>${elementoComentario.autor}</span><span class="ms-4">${elementoComentario.fecha}</span></h5>
  <p>${elementoComentario.comentario}</p>
  </div>`
  return template
}
