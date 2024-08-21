const input = document.getElementById('ingresar-tarea');

//Aca tambien podrias usar querySelector, para que traiga la primera propiedad que detecte como BUTTON By: S.R
const boton = document.getElementById('btAgregar');
const listaDeTarea = document.getElementById('Lista-de-tareas');

function agregarTarea(){
 if (input.value) {

    //Crear tarea
    let tareaNueva = document.createElement('div');
    tareaNueva.classList.add('tarea');

    //Texto ingresado por el usuario
    let texto = document.createElement('p');
    texto.innerText = input.value;
    tareaNueva.appendChild(texto);

    //Crear y agregar contenedor de iconos
    let iconos = document.createElement('div');
    iconos.classList.add('iconos');
    tareaNueva.appendChild(iconos)

    //iconos para la lista de completar y eliminar 
    let completar = document.createElement('i');
    completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
    completar.addEventListener('click', completarTarea);

    let eliminar = document.createElement('i');
    eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar')
    eliminar.addEventListener('click', eliminarTarea)

    iconos.append(completar, eliminar);

    // AGREGAR TAREA NUEVA A LA LISTA
    listaDeTarea.appendChild(tareaNueva);
 } else{
  alert('Por favor ingresa una tarea 😒');
 }

}

function completarTarea(e){
  //Target es uno delos iconos en este caso de confirmacion y para alterar su estilo (Nos basamos en e), vamos arriba de la jerarquia con partentnode para llegar hasta la tarea y luego agregamos o eliminas la clase completada.
  let tarea = e.target.parentNode.parentNode;
  //Toggle permite alternar una clase, si la tarea ya tiene la clase completada se agregar y si no se eliminara (Suplanta un condicional) By:SR
  tarea.classList.toggle('completada');
};

function eliminarTarea(e){
  let tarea = e.target.parentNode.parentNode;
  tarea.remove();
}

boton.addEventListener('click', agregarTarea);
input.addEventListener('keydown',(e) => {
  if (e.key === 'Enter') {
    agregarTarea();A
  }
})