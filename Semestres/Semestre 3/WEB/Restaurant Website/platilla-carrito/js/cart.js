// let iconCart = document.querySelector(".carrito");
// let iconCount = document.querySelector(".contar-pro");
// let btnProducts = document.querySelectorAll(".btn-product");
// let contentProducts = document.querySelector(".content-pro");
// let listCart = document.querySelector(".list-cart tbody");
// let con =1;

// //Evento al navegador

// document.addEventListener("DOMContentLoaded", () => {
//     getProductData();
// });

// //Funcion para obtener la informacion producto
// let getInfoProduct = (id) =>{
//     let product = [];
//     let productPrevius = JSON.parse(localStorage.getItem("productos"));
//     if (productPrevius != null) {
//         product = Object.values(productPrevius);
//     }
//     //console.log(product[id]);
//     //LLamar fucion addProCart
//     addProCart(product[id]);
//     iconCount.textContent = con;
//     con++;
// };

// //Funcion para llevar al carrito los productos :D
// let addProCart = (product) =>{
//     let row = document.createElement("tr");
//     row.innerHTML = `
//         <td>${con}</td>
//         <td><img src="${product.imagen}" width="70px"></td>
//         <td>${product.nombre}</td>
//         <td>${product.precio}</td>
//         <td>
//             <button onclick="deleteCart(${con});" type = "button" class="btn-delete btn-danger">✖</button>
//         </td>
//     `;
//     listCart.appendChild(row);
// };

// //Funcion para eliminar un producto del carrito
// let deleteCart = ( id ) =>{
//     let btnEliminar = document.querySelectorAll(".btn-delete");
//     btnEliminar[(id-1)].parentElement.parentElement.remove();
//     console.log(btnEliminar[(id-1)]);
    
//     if ( Number (iconCount.textContent) > 0) {
//         iconCount.textContent = con--;
//     }
// };



// // Obtener datos de la base de datos y llevarlos a la tienda
// let getProductData = async () => {
//     let url = "http://localhost/backend-apiCrud/productos";
//     try {
//       let respuesta = await fetch(url, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
  
//       if (respuesta.status === 204) {
//         console.log("No data found");
//       } else {
//         let tableData = await respuesta.json();
//         console.log(tableData);
//         //Agregar al localStorage
//         localStorage.setItem("productos", JSON.stringify(tableData));
//         //agregar los datos a la tabla
//         tableData.forEach((dato, i) => {
          
//           contentProducts.innerHTML += `
//             <td></td>
//             <div class="col-md-3 py-3 py-md-0">
//                 <div class="card">
//                 <img src="${dato.imagen}" alt="">
//                     <div class="card-body">
//                         <h3>${dato.nombre}</h3>
//                         <p>${dato.descripcion}.</p>
//                         <h5>$${dato.precio}
//                             <span class="btn-product" onclick="getInfoProduct(${i})"><i class="fa-solid fa-basket-shopping"></i></span>
//                         </h5>
//                     </div>
//                 </div>
//             </div>
//           `;
//         });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

let iconCart = document.querySelector(".carrito");
let iconCount = document.querySelector(".contar-pro");
let btnProducts = document.querySelectorAll(".btn-product");
let contentProducts = document.querySelector(".content-pro");
let listCart = document.querySelector(".list-cart tbody");
let btnCart = document.querySelector(".btn-cart");
let con = 0;

// Evento al navegador
document.addEventListener("DOMContentLoaded", () => {
    getProductData();
});


//Agregar evento al icono cel carrito
iconCart.addEventListener("click", ()=>{
    if (listCart.parentElement.style.display == "none") {
        listCart.parentElement.style.display = "block";
    } else{
        listCart.parentElement.style.display = "none"
    }
});


// Función para obtener la información del producto
let getInfoProduct = (id) => {
    let products = [];
    let productPrevius = JSON.parse(localStorage.getItem("productos"));
    if (productPrevius != null) {
        products = Object.values(productPrevius);
    }
    // Llamar a la función addProCart
    addProCart(products[id]);
    alert("Producto agregado al carrito con exito")

    con++;
    iconCount.textContent = con;

     //agregar evento al boton de ver carrito para viajar
     btnCart.addEventListener("click", () => {
        StorageProduct(products[id]); //Pasando producto a la funcion
    });
};

//Funcion para guardar los productos del carrito en LocalStorage
let StorageProduct = (product)=>{
    let products = [];
    let productPrevius = JSON.parse(localStorage.getItem("carrito"));
    if (productPrevius != null) {
        products = Object.values(productPrevius);
    }
    products.push(product);
    localStorage.setItem("carrito", JSON.stringify(products));
    //Redireccionamos a la pagina del carrito
    location.href = "cart.html";
};

// Función para llevar al carrito los productos
let addProCart = (product) => {
    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${con + 1}</td>
        <td><img src="${product.imagen}" width="70px"></td>
        <td>${product.nombre}</td>
        <td>${product.precio}</td>
        <td>
            <button onclick="deleteCart(${con});" type="button" class="btn-delete btn-danger">✖</button>
        </td>
    `;
    listCart.appendChild(row);
};

// Función para eliminar un producto del carrito
let deleteCart = (id) => {
    let btnEliminar = document.querySelectorAll(".btn-delete");
    btnEliminar[id].parentElement.parentElement.remove();
    console.log(btnEliminar[id]);
    
    con--;
    iconCount.textContent = con;
};

// Obtener datos de la base de datos y llevarlos a la tienda
let getProductData = async () => {
    let url = "http://localhost/backend-apiCrud/productos";
    try {
        let respuesta = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (respuesta.status === 204) {
            console.log("No data found");
        } else {
            let tableData = await respuesta.json();
            console.log(tableData);
            // Agregar al localStorage
            localStorage.setItem("productos", JSON.stringify(tableData));
            // Agregar los datos a la tabla
            tableData.forEach((dato, i) => {
                contentProducts.innerHTML += `
                    <td></td>
                    <div class="col-md-3 py-3 py-md-0">
                        <div class="card">
                            <img src="${dato.imagen}" alt="">
                            <div class="card-body">
                                <h3>${dato.nombre}</h3>
                                <p>${dato.descripcion}.</p>
                                <h5>$${dato.precio}
                                    <span class="btn-product" onclick="getInfoProduct(${i})"><i class="fa-solid fa-basket-shopping"></i></span>
                                </h5>
                            </div>
                        </div>
                    </div>
                `;
            });
        }
    } catch (error) {
        console.log(error);
    }
};







