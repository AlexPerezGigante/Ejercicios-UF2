let tiquets = [
 {
    codigo: 123459,
    fechaCreado: '18/04/2023',
    fechaResuelto: '',
    aula: 'T6',
    grupo: 'DAW1',
    ordenador: 'PC3',
    descripcion: 'Error de impresora',
    alumno: 'Ana Martínez',
    estado: 'pendiente'
 },
 {
    codigo: 123460,
    fechaCreado: '19/04/2023',
    fechaResuelto: '',
    aula: 'T8',
    grupo: 'DAW2',
    ordenador: 'PC4',
    descripcion: 'Problema de acceso a archivos',
    alumno: 'Pedro Gómez',
    estado: 'pendiente',
 },
 {
    codigo: 123461,
    fechaCreado: '20/04/2023',
    fechaResuelto: '',
    aula: 'T6',
    grupo: 'DAW1',
    ordenador: 'PC1',
    descripcion: 'Aplicación se cierra inesperadamente',
    alumno: 'Sofía Fernández',
    estado: 'pendiente'
 },
 {
    codigo: 123462,
    fechaCreado: '21/04/2023',
    fechaResuelto: '',
    aula: 'T7',
    grupo: 'DAW2',
    ordenador: 'PC2',
    descripcion: 'Problema de conexión a la red',
    alumno: 'Luis Torres',
    estado: 'pendiente'
 },
 {
    codigo: 123463,
    fechaCreado: '22/04/2023',
    fechaResuelto: '',
    aula: 'T8',
    grupo: 'DAW1',
    ordenador: 'PC3',
    descripcion: 'Archivos corruptos',
    alumno: 'Carolina Ramírez',
    estado: 'pendiente'
 },
 {
    codigo: 123457,
    fechaCreado: '16/04/2023',
    fechaResuelto: '15/05/2023',
    aula: 'T7',
    grupo: 'DAW2',
    ordenador: 'PC1',
    descripcion: 'Problema de conexión a Internet',
    alumno: 'Maria López',
    estado: 'resuelto'
 },
 {
    codigo: 123458,
    fechaCreado: '17/04/2023',
    fechaResuelto: '15/05/2023',
    aula: 'T8',
    grupo: 'DAW1',
    ordenador: 'PC2',
    descripcion: 'Pantalla en blanco',
    alumno: 'Juan Rodríguez',
    estado: 'resuelto'
 },
 {
    codigo: 123456,
    fechaCreado: '18/04/2023',
    fechaResuelto: '15/05/2023',
    aula: 'T8',
    grupo: 'DAW1',
    ordenador: 'PC3',
    descripcion: 'Error de impresora',
    alumno: 'Ana Martínez',
    estado: 'resuelto'
 },
]

export function setTiquets(array){
   tiquets=array
}

export function getTiquets(){
   return tiquets
}

// Esta función agrega a localStorage un objeto.
export function lsSetDades(dades){
	const tickets = JSON.stringify(dades)
	localStorage.setItem('tickets_Dades', tickets)
	return(true)
}

// Esta función lee el localStorage devuelve un onbjeto JSON
export function lsGetDades(){
	const textoLocal = localStorage.getItem('tickets_Dades')
	const dades = JSON.parse(textoLocal)
	return(dades)
}