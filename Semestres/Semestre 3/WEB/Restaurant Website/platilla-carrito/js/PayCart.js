
//El LocalStorage esta guardando toda la informacion del array consultado a la base de datos, si al momento de ir al carrito lleva toda la data, por favor borrar desde aplication a "carrito" para quitarle el cache
//a localStorage.
let total =0;
let deliverys = 10000;
let discounts=3500;
let subtotal=document.getElementById("subtotal");
let delivery=document.getElementById("delivery-charge")
let discount=document.getElementById("disc-prom");


document.addEventListener('DOMContentLoaded', () => {
    // Obtener los productos del carrito desde el LocalStorage
    const cartItems = JSON.parse(localStorage.getItem('carrito')) || [];
    const cartTableBody = document.querySelector('.item tbody');

    

    // Agreagmos filas a la tabla y modificamos el resumen de pago
    cartItems.forEach((item, index) => {
        total += Number (item.precio);
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${index + 1}</td>
            <td><img src="${item.imagen}" width="70px" alt="${item.nombre}"></td>
            <td>${item.nombre}</td>
            <td>$${item.precio}</td>
            <td>
                <button onclick="deleteCart(${index});" type="button" class="btn-delete btn-danger">✖</button>
            </td>
        `;

        cartTableBody.appendChild(row);
    });

    //Se generan los calculos en la tabla
    subtotal.innerHTML=`$${total}`
    delivery.innerHTML=`$${deliverys}`
    discount.innerHTML=`$${discounts}`
    //Entregamos el total en la tabla calculada.
    document.getElementById("Tot").innerHTML=`$${total+deliverys-discounts}`
});

// Función para eliminar un producto del carrito
function deleteCart(index) {
    const cartItems = JSON.parse(localStorage.getItem('carrito')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(cartItems));

    // Recargar la página para actualizar la vista del carrito
    location.reload();
}