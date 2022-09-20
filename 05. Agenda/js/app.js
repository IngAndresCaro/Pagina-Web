const formularioContactos = document.querySelector('#contacto');

eventListeners();


function eventListeners() {
    //Cuando el formulario de crear o editar se ejecutan
    formularioContactos.addEventListener('submit', leerFormulario);
}

function leerFormulario(e){
    e.preventDefault();

    //leer los datos de los inputs
    const nombre = document.querySelector('#nombre').value,
            empresa = document.querySelector('#nombre').value,
                telefono = document.querySelector('#nombre').value,
                    accion = document.querySelector('#accion').value;

            if (nombre === '' || empresa === '' || telefono === '') {
                //Dos parametros: Texto y Clase
                mostrarNotificacion ('Todos los Campos son obligatorios', 'error');
            } else {
                //Pasa la validación, crear llamado ajax
                const infoContacto = new FormData();
                infoContacto.append('nombre', nombre);
                infoContacto.append('empresa', empresa);
                infoContacto.append('telefono', telefono);
                infoContacto.append('accion', accion);

                    //console.log(...infoContacto);

                if (accion === 'crear'){
                    //crear un nuevo elemento
                    insertarBD(infoContacto)

                }else {
                    //editar el contacto

                }
            }
}

//Notificación en pantalla

function mostrarNotificacion(mensaje, clase){
    const notificacion = document.createElement('div');
    notificacion.classList.add(clase, 'notificacion', 'sombra');
    notificacion.textContent = mensaje;

    //formulario

    formularioContactos.insertBefore(notificacion, document.querySelector('form legend'));

    //Ocultar y mostrar la notificación
    setTimeout(()=>{
        notificacion.classList.add('visible');
        setTimeout(()=>{
            notificacion.classList.remove('visible')

            setTimeout(()=>{
                notificacion.remove();
            }, 500)
        }, 3000);
    }, 100);
}