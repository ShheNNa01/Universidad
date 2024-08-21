//variables globales
let boton = document.querySelector(".boton");
let resultado = document.querySelector(".resultado");

// Evento para el boton
boton.addEventListener("click", () => {
  //alert("Estamos melos");
  obtenerDatos();
});

//Funcion para realizar la peticion a la api
//METODO 1
// function obtenerDatos(){
//     let url = "http://localhost/apiDatos/datos.txt";
//     fetch(url,{
//         method: "GET",
//         headers:{
//             "Content-Type": "application/json"
//         }
//     }).then((d)=> d.json())
//     .then((datos) => console.log(datos))
//     .catch((error)=> console.log(error))
// }

//METODO 2 ASYNC / AWAIT
async function obtenerDatos() {
  try {
    let url = "http://localhost/apiDatos/datos.txt";
    let respuesta = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let datos = await respuesta.json();
    //console.log(datos);
    datos.forEach((dato, pos) => {
      resultado.innerHTML += `
            <div class="card" style="width: 18rem;">
            <img src="${dato.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${dato.titulo}</h5>
            <p class="card-text">${dato.descripcion}</p>
             <a href="https://www.netflix.com/us-es/" class="btn btn-primary">Go NETFLIX</a>
            </div>
            </div>
            `;
    });
  } catch (error) {
    console.log(error);
  }
}
