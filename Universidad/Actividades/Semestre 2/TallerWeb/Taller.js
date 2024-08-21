// alert("Ejercicios con estructuras repetitivas.")

// alert("1.	Hacer un programa que calcule la suma de los N primeros números naturales, dónde N es el número límite ingresado.")


// var Num = parseInt(prompt("Por favor ingrese la cantidad de numeros que desea registrar"));
// var sum =0;
// var sumatoria;

// if (Num > 0){

//     for (let i=0; i < Num; i++) {
//         var Num2 = parseInt(prompt("Por favor ingrese el numero " + (i+1)));
//         sum = Num2 + sum;
        
//     }

//     alert("La suma de los numeros ingresados es: " + sum);

// } else {

//     alert("Por favor ingresa un numero superior a CERO (0)");
// }

// for (i=0; i<Num; i++) {
//     sumatoria = sumatoria + Num2;
// }


// alert("2.	Hacer un programa que pida el nombre de un estudiante y N notas, calcular el promedio de las notas y determinar si el estudiante aprueba o reprueba; (Aprueba con un promedio de 3).") 


// let estudiante = prompt("Por favor ingresa tu nombre completo");
// var nota = parseInt(prompt("Por favor ingresa la cantidad de notas del semestre"));
// var sum=0;
// var prom=0;

// if (nota > 0) {

//     for (i = 0; i < nota; i++) {
//         var nnotas = parseInt(prompt("Por favor ingrese la notra" + (i+1)));
//         sum = nnotas + sum;
        
//     }
    
//     prom = sum / nota;

// if (prom >= 3) {

//     alert("Estudiante" + estudiante + "Has aprobado la clase, felicitaciones 👌 tu nota es de: " + prom)
    
// } else {

//     alert("Estudiante" + estudiante + "No lo tomes a mal, pero debes de mejorar lastimosamente, deberas de repetir esta materia 🤦‍♂️, tu promedio fue de: " + prom)
// }

// } else {
//     alert("Debe ingresar al menos una nota.");
// }


// alert("3.Ingrese varios números enteros y muestre la cantidad de números ingresados y la suma de los mismos. Realice esta acción hasta que el usuario ingrese la palabra FIN.")

// var num=0;
// var sum=0;
// let ingreso;

// while (true) {

//     ingreso = prompt("Ingrese un número entero o FIN para finalizar");

//     if (ingreso.toUpperCase() == "FIN") {
//         break;

//     } else {
//         num++;
//         sum += parseInt(ingreso);
//     }

// }

// alert("La cantidad de números ingresados es: " + num + " y la suma de los mismos es: " + sum);


// alert("4.	realice una tabla de multiplicar con cualquier número ingresado hasta el 30.")

// var num=0;
// var total=0;
// var ingreso;
// while (true) {

//     ingreso = parseInt(prompt("Por favor ingrese un numero entre el 1 y 30"))
    
//     if (ingreso > 30 || ingreso < 1) {
//         alert("El numero ingresado no esta dentro del rango")
//     } else {
//         multi = parseInt(prompt("Por favor ingrese el numero por el cual desea se multiplique"))
//         total = ingreso * multi;
//         alert("La multiplicacion del numero: "+ ingreso + " por " + " el numero: " + multi + " Nos genera un total de: " + total)

//     }
    
//     break;
// }


// alert("5.	Cree la tabla de multiplicar de cualquier número ingresado de manera descendente.")

// var num=0;
// var total=0;
// var ingreso;

// while (true) {

//     ingreso = parseInt(prompt("Por favor ingrese cualquier numero, este se multiplicara hasta maximo por 9"))

//     if (ingreso) {
//         for (let i = 9; i >= 1; i--) {
//             total = ingreso * i;
//             alert("La multiplicacion del numero: "+ ingreso + " por " + " el numero: " + i)
//             alert("Nos genera un total de: " + total)
//         }
//     } else {
//         alert("Por favor ingrese un numero")
        
//         }
//     break;
// }

// alert("6.	Cree un ciclo que cuente del 1 al 30 en intervalos el número ingresado.")

// var intervalos = parseInt(prompt("Por favor ingresa el intervalo que deseas para la cuenta de numeros del 1 al 30"))
// i = 0;
// x = 30;
// while (i <= x) {
//     alert(i)
//     i = i + intervalos;
// }

// alert("7.	Cree un ciclo que cuente del 1 al 30 en intervalos el número ingresado, de manera regresiva.")

// var intervalos = parseInt(prompt("Por favor ingresa el intervalo que deseas para la cuenta regresiva desde el numero 30 al 1"))

// i = 0;
// x = 30;
// while (i <= x) {
//     alert(x)
//     x = x - intervalos;
//     i++;

//     if (x == 0) {
//         alert("FIN DEL PROGRAMA")
//     }
// }



// alert("Ejercicios con estructuras repetitivas anidadas.")

// alert("8.	Digite un número (altura) y a partir de él cree una escalera de asteriscos o el carácter que desee; con esa altura. Deberá quedar así, si ponemos una altura de 5.")
// // /*
// //  * 
// //  **
// //  ***
// //  *****
// //  ******
// // */

// var altura = prompt("Ingrese la altura de la piramide");
// let asteriscos='';

// for (let i = 1; i <= altura; i++) {
//     for (let j = 0; j < i; j++) {
//         asteriscos += '*';
//     } 

//     asteriscos += '\n';
// }

// alert(asteriscos);


// alert("9.	Digite un número (altura) y a partir de él cree una escalera invertida de asteriscos o el carácter que desee; con esa altura. Deberá quedar así, si ponemos una altura de 5.")
// /*
//  *****
//  ****
//  ***
//  **
//  *
// */

// let altura = parseInt(prompt("Por favor ingresa la altura de la piramide"));
// let asteriscos = '';

// for (let i = altura; i >= 1; i--) {
//     for (let j = 0; j < i; j++) {
//         asteriscos += '*';
//     } 
//     asteriscos += '\n';
// }

// alert(asteriscos);



// // alert("10.	 Cree un programa que permite registrar el número de compras que se venden cada día. pedir al usuario cuantos productos va a comprar y registrar el precio unitario, calcular el valor total de cada compra y al finalizar el día calcular cuántas facturas se hicieron y el total general.")
// // /*Cliente #1
// No. Productos: 3
// valor  p1 : 4,500
// valor p2: 2,000
// valor p3: 3,500
// total compra: 10.000
// Cliente #2
// No. Productos: 2
// valor  p1 : 1,500
// valor p2: 2,000
// total compra: 3.500
// Total Ventas del dia: 2
// Total General del dia: 13.500*/

// // let totalFacturas = 0;
// // let totalGeneral = 0;

// // while (true) {

//     let numProductos = parseInt(prompt("Ingrese el número de productos que va a comprar (o ingrese 0 para terminar el día):"));
    
//     if (numProductos === 0) {
//         break;
//     }

//     let totalCompra = 0;

//     for (let i = 1; i <= numProductos; i++) {
//         let precioUnitario = parseFloat(prompt("Ingrese el precio unitario del producto " + i + ":"));
//         totalCompra += precioUnitario;
//     }

//     totalFacturas++;
//     totalGeneral += totalCompra;

//     alert("Cliente #" + totalFacturas + "\n" +
//           "No. Productos: " + numProductos + "\n" +
//           "Total Compra: " + totalCompra.toLocaleString("es-CO", {style: "currency", currency: "COP"}));
// }

// alert("Total Ventas del día: " + totalFacturas + "\n" +
//       "Total General del día: " + totalGeneral.toLocaleString("es-CO", {style: "currency", currency: "COP"}));


alert("11.	 Cree un programa que calcule el promedio de 3 notas para 3 alumnos, el programa debe mostrar lo siguiente:")

/*Nombre Alumno #1 Jossy tello
Materia: Matemáticas
Nota 1 : 4,5
Nota 2: 4
Nota 3: 3,5
// Promedio: 4
// Nombre Alumno #2 Angela Robledo
// Materia: Física
// Nota 1 : 4,5
// Nota 2: 2,5
// Nota 3: 5
// Promedio: 4,2
// */

// function calcularPromedio(notas) {
//     let suma = 0;
//     for (let nota of notas) {
//         suma += parseFloat(nota);
//     }
//     return (suma / notas.length).toFixed(1);
// }

// let alumno1Nombre, alumno1Notas;
// let alumno2Nombre, alumno2Notas;
// let alumno3Nombre, alumno3Notas;

// alumno1Nombre = prompt("Ingrese el nombre del primer alumno:");
// alumno1Notas = [
//     parseFloat(prompt("Ingrese la primera nota del primer alumno:")),
//     parseFloat(prompt("Ingrese la segunda nota del primer alumno:")),
//     parseFloat(prompt("Ingrese la tercera nota del primer alumno:"))
// ];


// alumno2Nombre = prompt("Ingrese el nombre del segundo alumno:");
// alumno2Notas = [
//     parseFloat(prompt("Ingrese la primera nota del segundo alumno:")),
//     parseFloat(prompt("Ingrese la segunda nota del segundo alumno:")),
//     parseFloat(prompt("Ingrese la tercera nota del segundo alumno:"))
// ];

// alumno3Nombre = prompt("Ingrese el nombre del tercer alumno:");
// alumno3Notas = [
//     parseFloat(prompt("Ingrese la primera nota del tercer alumno:")),
//     parseFloat(prompt("Ingrese la segunda nota del tercer alumno:")),
//     parseFloat(prompt("Ingrese la tercera nota del tercer alumno:"))
// ];

// let promedioAlumno1 = calcularPromedio(alumno1Notas);
// let promedioAlumno2 = calcularPromedio(alumno2Notas);   
// let promedioAlumno3 = calcularPromedio(alumno3Notas);
// var mensaje = "";
// mensaje += "Nombre del Alumno 1: " + alumno1Nombre + "\n";
// mensaje += "Nota 1: " + alumno1Notas [0] + "\n";
// mensaje += "Nota 2: " + alumno1Notas [1] + "\n";
// mensaje += "Nota 3: " + alumno1Notas [2] + "\n";
// mensaje += "Promedio del Alumno 1: " + promedioAlumno1 + "\n";

// mensaje += "Nombre del Alumno 2: " + alumno2Nombre + "\n";
// mensaje += "Nota 1: " + alumno2Nombre [0] + "\n";
// mensaje += "Nota 2: " + alumno2Nombre [1] + "\n";
// mensaje += "Nota 3: " + alumno2Nombre [2] + "\n";
// mensaje += "Promedio del Alumno 2: " + promedioAlumno2 + "\n";

// mensaje += "Nombre del Alumno 3: " + alumno3Nombre + "\n";
// mensaje += "Nota 1: " + alumno3Nombre [0] + "\n";
// mensaje += "Nota 2: " + alumno3Nombre [1] + "\n";
// mensaje += "Nota 3: " + alumno3Nombre [2] + "\n";
// mensaje += "Promedio del Alumno 3: " + promedioAlumno3 + "\n";

// alert(mensaje)

// // alert("12.	 Cree tabla de números del 1 al 15 mínimo en HTML. la salida se debe ver así:")

// // /*
// // 1	2	3	4	5
// // 6	7	8	9	10
// // 11	12	13	14	15
// // */

// // alert("Ejercicios con estructuras repetitivas con condicionales.")

// // alert("13.	 Cree un programa que pida la edad a 10 estudiantes y determine cuántos son menores de edad y cuales son mayores de edad.")


// let menoresEdad = 0;
// let mayoresEdad = 0;


// for (let i = 1; i <= 10; i++) {
//     let edad = parseInt(prompt("Ingrese la edad del estudiante " + i + ":"));
//     if (edad < 18) {
//         menoresEdad++;
//     } else {
//         mayoresEdad++;
//     }
// }


// alert("Estudiantes menores de edad: " + menoresEdad);
// alert("Estudiantes mayores de edad: " + mayoresEdad);


// alert("14.	Utiliza la función Math.ramdon() para generar un número aleatorio y compararlo con el que el usuario digite. tienes 3 intentos para acertar.")
// Generar un número aleatorio entre 1 y 10

const numeroAleatorio = Math.floor(Math.random() * 10) + 1;


const intentosMaximos = 3;


for (let intento = 1; intento <= intentosMaximos; intento++) {

    let intentoUsuario = parseInt(prompt("Intento " + intento + ": Adivina el número (entre 1 y 10):"));


    if (intentoUsuario === numeroAleatorio) {
        alert("¡Felicidades! ¡Adivinaste el número " + numeroAleatorio + " en el intento " + intento + "!");
        break; 
    } else {
        if (intento === intentosMaximos) {
            alert("Lo siento, has agotado tus intentos. El número era " + numeroAleatorio + ".");
        } else {
            alert("Intento fallido. Sigue intentando.");
        }
    }
}




