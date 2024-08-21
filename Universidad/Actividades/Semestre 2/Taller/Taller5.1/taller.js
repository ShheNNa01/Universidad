// alert ("Ejercicios con objetos"),

// alert ("1.	Cree el siguiente objeto {“v1”:”tomate”,”v2”:”Cebolla”,”v3”: “Ajo”} y muestre en el navegador solo los valores.")
 let obj = { "v1": "tomate", "v2": "Cebolla", "v3": "Ajo"}
 document.write(obj.v1 + "<br>" + obj.v2 + "<br>" + obj.v3 + "<br>")
 


// alert("2.	Cree el siguiente objeto {“v1”:”tomate”,”v2”:”Cebolla”,”v3”: “Ajo”} y muestre en el navegador solo las referencias o llaves.")
let obj1 = { "v1": "tomate", "v2": "Cebolla", "v3": "Ajo"}
let llaves = Object.keys(obj1)
document.write(llaves)


// alert ("3.	Cree el siguiente objeto {“v1”:”tomate”,”v2”:”Cebolla”,”v3”: “Ajo”} y muestre en el navegador llaves y valores.")
let obj2 = { "v1": "tomate", "v2": "Cebolla", "v3": "Ajo"}
for (let clave in obj2) {
    document.write("Llave " + clave + ": { Valor:" + obj2[clave] + "}<br>")
    
}


// alert ("4.	Cree el siguiente objeto {“v1”:”tomate”,”v2”:”Cebolla”,”v3”: “Ajo”} agregue 2 verduras más y muestre los valores en el navegador.")
let obj3 = { "v1": "tomate", "v2": "Cebolla", "v3": "Ajo"}
obj3.v4 = prompt("ingrese una nueva verdura")
obj3.v5 = prompt("ingrese una nueva verdura")
document.write(obj3.v1 + "<br>" + obj3.v2 + "<br>" + obj3.v3 + "<br>" + obj3.v4 + "<br>" + obj3.v5 + "<br>")



// 5.	del siguiente objeto { nombre, precio, cantidad} lléne sus valores dinámicamente con mínimo 3 productos y muestre sus datos en el navegador.

let productos = [];

for (var i = 1; i <= 3; i++) {
  let nombre = prompt("Ingrese el nombre del producto " + i + ":");
  let precio = Number(prompt("Ingrese el precio del producto " + i + ":"));
  let cantidad = Number(prompt("Ingrese la cantidad del producto " + i + ":"));

  let producto = { nombre: nombre, precio: precio, cantidad: cantidad };
  productos.push(producto);
}

for (let j = 0; j < productos.length; j++) {
  document.write("Producto: " + productos[j].nombre + ", Precio: $" + productos[j].precio + ", Cantidad: " + productos[j].cantidad + "<br>");
}

// 6.	del siguiente objeto { nombre, precio, cantidad} llene sus valores dinámicamente con mínimo 3 productos y muestre sus datos en el navegador.
//PUNTO REPETIDO


// alert ("7.	del siguiente objeto { producto, precio, cantidad} llene sus valores dinámicamente con mínimo 2 productos y muestre el subtotal a pagar de los 3 productos y el total de la compra con el iva aumentado.")

let productos1 = []; 
let iva = 0.19
for (var i = 1; i <= 3; i++) {
      var nombre = prompt("Ingrese el nombre del producto " + i + ":");
      var precio = Number(prompt("Ingrese el precio del producto " + i + ":"));
      var cantidad = Number(prompt("Ingrese la cantidad del producto " + i + ":"));
    
      var producto1 = { nombre: nombre, precio: precio, cantidad: cantidad };
      productos1.push(producto1);
    }
    
    
    
    for (var j = 0; j < productos1.length; j++) {
      document.write("Producto: " + productos1[j].nombre + ", Precio: $" + productos1[j].precio + ", Cantidad: " + productos1[j].cantidad + "<br>");
    }
    
    let subtotal = 0;

    for (let j = 0; j < productos1.length; j++) {
        subtotal += productos1[j].precio * productos1[j].cantidad
        
    }

    let totalConIVA = subtotal * iva + (subtotal)
    document.write("El Subtotal a pagar es por valor de : $" + subtotal + "<br>")
    document.write("Total con IVA: $" + totalConIVA + "<br>")