//Datps de bd
let peliculas =  [
    {
        "id": 1,
        "titulo" : "Spiderman",
        "descripcion" : "super heroe aracnido",
        "genero" : "accion",
        "Lanzamiento" : 2008,
        "imagen" : "https://www.shutterstock.com/shutterstock/photos/2407844867/display_1500/stock-vector-spiderman-suit-icon-logo-super-hero-sign-symbol-famous-character-isolated-spider-man-art-vector-2407844867.jpg"
    },

    {
        "id": 2,
        "titulo" : "Rapido y furioso",
        "descripcion" : "Calvo entreputado en un carro prestado",
        "genero" : "accion",
        "Lanzamiento" : 2002,
        "imagen" : "https://www.semana.com/resizer/v2/OPVPGNZRNBFD3OPQWRVR34QQXM.jpg?auth=ba8a7b683120e7989aa9cd870df058e6af502e4ce73c29955ad08ade5c48e550&smart=true&quality=75&width=1280&height=720"
    },

    {
        "id": 3,
        "titulo" : "Secretos en la montaña",
        "descripcion" : "Dos hombres siendo muy hombres",
        "genero" : "dudosa",
        "Lanzamiento" : 2023,
        "imagen" : "https://s.yimg.com/ny/api/res/1.2/MzQLNABGCaGDzm33j2t7tw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/es/lanacion.com.ar/2082225a9fc2e308035a06a09fea8f3a"

    },

];  

//Funcion para simular la consulta de los datos
function getPeliculas(pelis){
    return new Promise((resolve,reject)=>{
        //Simular un retraso al obtener la informacion
    setTimeout(() => {
        if (pelis.length > 0) {
            resolve(pelis);
        }else {
            reject("Error no se cuenta con ninguna pelicula para mostrar en la BD");
        }
    }, 2000);
});
}

// MOstrar informacion
//console.log(getPeliculas(peliculas))
//METODO 1 -> Then - Catch
// getPeliculas(peliculas)
//     .then((d)=>console.log(d))
//     .catch((error)=>console.log(error));

//Metodo 2 -> Async - await
async function mostrarPeliculas(movies){
    try {
        let respuesta = await getPeliculas(movies);
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
};

//llamar funcion
mostrarPeliculas(peliculas);