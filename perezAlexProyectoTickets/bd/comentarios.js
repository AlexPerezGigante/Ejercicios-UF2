let comentarios = [
    {
        "codigo": 123459,
        "autor": "Carlos1987",
        "fecha": "28/02/2024",
        "comentario": "Hola, tengo un problema con mi computadora. Desde esta mañana, no puedo iniciar sesión en mi cuenta. ¿Alguien más está experimentando esto?"
      },
      {
        "codigo": 123459,
        "autor": "TechSupport123",
        "fecha": "29/02/2024",
        "comentario": "Hola Carlos1987, ¿podrías proporcionar más detalles sobre el problema? ¿Recibes algún mensaje de error en particular al intentar iniciar sesión?"
      },
      {
        "codigo": 123460,
        "autor": "AnaTech",
        "fecha": "29/02/2024",
        "comentario": "He experimentado un problema similar en el pasado. ¿Has intentado reiniciar tu computadora en modo seguro para ver si puedes acceder a tu cuenta?"
      },
      {
        "codigo": 123460,
        "autor": "SolutionsExpert",
        "fecha": "01/03/2024",
        "comentario": "Carlos1987, otro paso que podrías intentar es restaurar tu sistema a un punto anterior en el tiempo antes de que comenzara este problema. ¿Has realizado alguna actualización reciente en tu sistema?"
      }
]

export function setComentarios(array){
    comentarios=array
 }
 
 export function getComentarios(){
    return comentarios
 }
 
