let usuaris = [
    {
        nombre: "Joe",
        apellidos:'Harrison',
        email: "joe@email.com",
        password: "123456",
        rol:"administrador"
    },
    {
        nombre: "Mike",
        apellidos:'Thomas',
        email: "mike@email.com",
        password: "654321",
        rol: "profesor"
    },
    {
        nombre: "Usuario",
        apellidos:'3',
        email: "usuario3@email.com",
        password: "987654",
        rol: "alumno"
    },
    {
        nombre: "administrador",
        apellidos:"fpllefia",
        email:"administrador@fpllefia.com",
        password:"admin",
        rol:"administrador"
    }
]

export function setUsuaris(array){
    usuaris=array
 }
 
 export function getUsuaris(){
    return usuaris
 }
 
 // Esta función agrega a localStorage un objeto.
 export function lsSetDades(dades){
     const usuaris = JSON.stringify(dades)
     localStorage.setItem('usuaris_Dades', usuaris)
     return(true)
 }
 
 // Esta función lee el localStorage devuelve un onbjeto JSON
 export function lsGetDades(){
     const textoLocal = localStorage.getItem('usuaris_Dades')
     const dades = JSON.parse(textoLocal)
     return(dades)
 }