/*Taller de Ejercicios JS
Programación web 1
Profe. Jossy Tello
Aplicar los fundamentos del lenguaje Javascript realizando los siguientes ejercicios.*/

/*Ejercicios Condicionales.

⦁	Pide al usuario un número y determina si es par o impar y si es positivo o negativo.*/
let numero = prompt("Digite un numero");
if (numero % 2 == 0) {
    alert("El numero es par");
} else {
    alert("El numero es impar");
}
if (numero > 0) {
    alert("El numero es positivo");
} else {
    alert("El numero es negativo");
}

alert("Siguiente punto del taller");

/*
⦁	Pide al usuario dos números y determina cual es el número mayor y cual es el menor.*/
let numero1 = prompt("Digite un numero");
let numero2 = prompt("Digite un numero");

if (numero1 > numero2) {
    alert("El numero mayor es: " + numero1);
    alert("El numero menor es: " + numero2);  
}

alert("Siguiente punto del taller");

/*
⦁	Pide al usuario que digite un numero del 1 al 7 y Realiza el código correspondiente para saber cuál es el dia de la semana correspondiente al número digitado;
*/

let numero3 = prompt("Por favor digite un numero del 1 al 7 (Cualquiera)");

if (numero3 == 1) {
    alert("HOY ES LUNES !!!");
} else if (numero3 == 2) {
    alert("HOY ES MARTES !!!")
} else if (numero3 == 3) {
    alert("HOY ES MIERCOLES !!!")
} else if (numero3 == 4) {
    alert("HOY ES JUEVES !!!")
} else if (numero3 == 5) {
    alert("HOY ES VIERNES !!!")
} else if (numero3 == 6) {
    alert("HOY ES SABADO !!!")
} else if (numero3 == 7) {
    alert("HOY ES DOMINGO !!!")
} else {
    alert("Por favor digite un un numero dentro de los parametros indicados")
}

/*⦁	 Se necesita clasificar la etapa de una persona solo pidiéndole como dato su edad. (Si la edad es menor de 18 es adolecente), (si la edad está en el rango de 18 a 28 es adulto adolecente), (si la edad está entre 29 a 49 es adulto), (si la edad está entre 50 en adelante es adulto mayor). 
Mostrar en pantalla la etapa de la persona.*/

let edad = prompt("Por favor digite su edad");
if (edad < 18) {
    alert("Usted es adolecente");
} else if (edad >= 18 && edad <= 28) {
    alert("Usted es adulto adolecente");
} else if (edad >= 29 && edad <= 49) {
    alert("Usted es adulto");
} else if (edad >= 50) {
    alert("Usted es adulto mayor");
}


alert("Siguiente punto del taller");

/*⦁	 Realice una factura de venta, ingrese el valor de 3 productos y calcule lo siguiente:
si paga en efectivo paga el valor total.
si paga con cupón realice un 3% de descuento
si paga a crédito aumente el 5% al total.*/
let valor1 = prompt("Por favor digite el valor del producto 1");
let valor2 = prompt("Por favor digite el valor del producto 2");
let valor3 = prompt("Por favor digite el valor del producto 3");
let total = parseInt(valor1) + parseInt(valor2) + parseInt(valor3);
let formaDepago = prompt("Por favor digite la forma de pago: 1. Efectivo, 2. Cupón, 3. Crédito");
if (formaDepago == 1) {
    alert("El valor total a pagar es: " + total);
} else if (formaDepago == 2) {
    let descuento = total * 0.03;
    let totalConDescuento = total - descuento;
    alert("El valor total a pagar es: " + totalConDescuento);
} else if (formaDepago == 3) {
    let aumento = total * 0.05;
    let totalConAumento = total + aumento;
    alert("El valor total a pagar es: " + totalConAumento);
}

alert("Siguiente punto del taller");


/*⦁	 Se pide ingresar 3 notas y calcular el promedio de un alumno, mostrar el nivel del alumnos según su promedio: 

*  menos 2,0 = Malo
*  menos 2,9 = Debe recuperar
* entre 3 – 3,9 = Regular.
* entre 4 – 4,4 = Bueno.
* entre 4,5 – 5 = Muy bueno.*/

let nota1 = prompt ("Por favor ingresa la nota 1");
let nota2 = prompt ("Por favor ingresa la nota 2");
let nota3 = prompt ("Por favor ingresa la nota 3");

let SumNota = parseInt(nota1) + parseInt(nota2) + parseInt(nota3);

let prom = SumNota / 3;

alert ("Su promedio actual es de: " + prom);

if (prom < 2.0 ){

    alert("Su promedio es malo")
    
} else if (prom <= 2.9){

    alert("Actualmente debes de recuperar")
} else if (prom <= 3.9){

    alert("Su promedio es regular")
}else if (prom <= 4.4){

    alert("Su promedio es muy bueno")
}else if (prom <= 5.0){

    alert("Su promedio es excelente")
}

alert("Siguiente punto del taller");


/*⦁	 Calcula la edad actual de una persona a partir de su fecha de nacimiento.
Los datos a pedir son: día, mes y año de nacimiento.*/
let dia = prompt("Por favor digite el dia de nacimiento");
let mes = prompt("Por favor digite el mes de nacimiento");
let año = prompt("Por favor digite el año de nacimiento");

let fechaNacimiento = new Date(año, mes, dia);
let fechaActual = new Date();

let edad1 = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
alert("Su edad es: " + edad1);

alert("Siguiente punto del taller");

/*⦁	 Calcula cuánto se debe pagar por costos de hospitalización en la clínica Me Muero según los siguientes datos: 

{edad 0 a 10 años //dias 1 o menos 20000; entre 2 a 4 30000 por dia; entre 5 a 7 dias 25000 + 5% por dia; 8 o mas dias 15000 por dia + 10%}

{edad 11 a 17 años //dias 1 o menos 20000; entre 2 a 4 30000 por dia; entre 5 a 7 dias 25000 por dia; 8 o mas dias 15000 por dia + 10%}

{edad 18 a 49 años //dias 1 o menos 20000; entre 2 a 4 30000 por dia; entre 5 a 7 dias 25000 por dia; 8 o mas dias 15000 por dia + 15%}

{edad 50 años o más //dias 1 o menos 20000; entre 2 a 4 30000 por dia; entre 5 a 7 dias 25000 por dia + 15%; 8 o mas dias 15000 por dia + 20%}

* Mostrar en pantalla días de hospitalización del paciente
*Valor dia según su edad
*Valor del recargo y total a pagar*/
let edad3 = prompt("Por favor digite su edad");
let dias = prompt("Por favor digite los dias de hospitalización");
if (edad3 <=10 || edad3 == 0) {
    if (dias <= 1) {
        alert(`los dias de hospitalización fueron ${dias}`)
        alert("El valor del dia es de: 20000");
        alert("El valor del recargo es de: 0");

        alert("El valor total a pagar es de: 20000");
    } else if (dias >= 2 && dias <= 4) {
        alert(`los dias de hospitalización fueron ${dias}`)
        alert("El valor del dia es de: 30000");
        alert("El valor del recargo es de: 0");

        alert(`El valor total a pagar es de: $${dias * 30000}`);
    } else if (dias >= 5 && dias <= 7) {
        alert(`los dias de hospitalización fueron ${dias}`)
        alert(`los dias de hospitalización fueron ${dias}`)
        alert("El valor del dia es de: 25000");
        alert("El valor del recargo es de: 5%");

        alert(`El valor total a pagar es de: $${(dias * 25000) + ((dias * 25000) * 0.05)}`);
    } else if (dias >= 8) {
        alert(`los dias de hospitalización fueron ${dias}`)
        alert(`los dias de hospitalización fueron ${dias}`)
        alert("El valor del dia es de: 15000");
        alert("El valor del recargo es de: 10%");

        alert(`El valor total a pagar es de: $${(dias * 15000) + ((dias * 15000) * 0.1)}`);
    }

} else if (edad3 >= 11 && edad3 <= 17) {
    if (dias <= 1) {
        alert(`los dias de hospitalización fueron ${dias}`)
        alert("El valor del dia es de: 20000");
        alert("El valor del recargo es de: 0");

        alert("El valor total a pagar es de: 20000");
    } else if (dias >= 2 && dias <= 4) {
        alert(`los dias de hospitalización fueron ${dias}`)
        alert("El valor del dia es de: 30000");
        alert("El valor del recargo es de: 0");

        alert(`El valor total a pagar es de: $${dias * 30000}`);
    } else if (dias >= 5 && dias <= 7) {
        alert(`los dias de hospitalización fueron ${dias}`)
        alert("El valor del dia es de: 25000");
        alert("El valor del recargo es de: 0");

        alert(`El valor total a pagar es de: $${(dias * 25000)}`);
    } else if (dias >= 8) {
        alert(`los dias de hospitalización fueron ${dias}`)
        alert("El valor del dia es de: 15000");
        alert("El valor del recargo es de: 10%");

        alert(`El valor total a pagar es de: $${(dias * 15000) + ((dias * 15000) * 0.1)}`);
    }
    
} else if (edad3 >= 18 && edad3 <= 40) {
    if (dias <= 1) {
        alert(`los dias de hospitalización fueron ${dias}`)
        alert("El valor del dia es de: 20000");
        alert("El valor del recargo es de: 0");

        alert("El valor total a pagar es de: 20000");
    } else if (dias >= 2 && dias <= 4) {
        alert(`los dias de hospitalización fueron ${dias}`)
        alert("El valor del dia es de: 30000");
        alert("El valor del recargo es de: 0");

        alert(`El valor total a pagar es de: $${dias * 30000}`);
    } else if (dias >= 5 && dias <= 7) {
        alert(`los dias de hospitalización fueron ${dias}`)
        alert("El valor del dia es de: 25000");
        alert("El valor del recargo es de: 0");

        alert(`El valor total a pagar es de: $${(dias * 25000)}`);
    } else if ( dias >= 8) {
        alert(`los dias de hospitalización fueron ${dias}`)
        alert("El valor del dia es de: 15000");
        alert("El valor del recargo es de: 15%");

        alert(`El valor total a pagar es de: $${(dias * 15000) + ((dias * 15000) * 0.15)}`);
    }
    
} else if (edad3 > 50) {
    if (dias <= 1) {
        alert(`los dias de hospitalización fueron ${dias}`)
        alert("El valor del dia es de: 20000");
        alert("El valor del recargo es de: 0");

        alert("El valor total a pagar es de: 20000");
    } else if (dias >= 2 && dias <= 4) {
        alert(`los dias de hospitalización fueron ${dias}`);       
        alert("El valor del dia es de: 30000");
        alert("El valor del recargo es de: 0");

        alert(`El valor total a pagar es de: $${dias * 30000}`);
    } else if (dias >= 5 && dias <= 7) {
        alert(`los dias de hospitalización fueron ${dias}`)        
        alert("El valor del dia es de: 25000");
        alert("El valor del recargo es de: 15%" );

        alert(`El valor total a pagar es de: $${(dias * 25000) + ((dias * 25000) * 0.15)}`);
    } else if (dias >= 8) {
        alert(`los dias de hospitalización fueron ${dias}`)
        alert("El valor del dia es de: 15000");
        alert("El valor del recargo es de: 20%");

        alert(`El valor total a pagar es de: $${(dias * 15000) + ((dias * 15000) * 0.2)}`);
    }
}

alert("FIN DEL TALLER");
