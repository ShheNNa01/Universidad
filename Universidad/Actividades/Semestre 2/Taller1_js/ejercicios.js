/* Procedamos con el taller  */

/*  1. Realiza el cálculo del salario que debe recibir un trabajador que gana x salario con un
descuento del 4% por salud y 7% por pensión.  */

var salario = prompt("Por favor ingrese su salario");
var salud = salario * 0.04;
var pension = salario * 0.07;
var totalDescuentos = salud + pension
var neto = salario - totalDescuentos;

alert (`Su salario a pagar mensualmente es ${salario}, con un descuento de salud por valor de ${salud} y un descuento por pensión de ${pension} con un total en deducciones de ${totalDescuentos} y un salario neto de ${neto} Gracias por usar la app"`)

alert("Siguiente punto del taller");

/*2. Aplica la fórmula a = (b*h)/2 para calcular el área de un triángulo donde sus dimensiones
base y altura se deben pedir al usuario que las digite. */

var base = prompt("Por favor ingrese la base del triangulo");
var altura = prompt("Por favor ingrese la altura del triangulo");
var area = (base * altura) / 2;

alert(`El area del triangulo es ${area}`);

alert("Siguiente punto del taller");

/*3. Realiza las operaciones de suma, resta, multiplicación, división, y módulo pidiéndole solo
2 números al usuario. */

var num1 = prompt("Por favor ingrese el primer numero");
var num2 = prompt("Por favor ingrese el segundo numero");
var suma = num1 + num2;
alert(`La suma de los numeros es ${suma}`);
var resta = num1 - num2;
alert(`La resta de los numeros es ${resta}`);
var multiplicacion = num1 * num2;
alert(`La multiplicacion de los numeros es ${multiplicacion}`);
var division = num1 / num2;
alert(`La division de los numeros es ${division}`);
var modulo = num1 % num2;
alert(`El modulo de los numeros es ${modulo}`);

alert("Siguiente punto del taller");


/* 4. Calcule el sueldo mensual de un trabajador ingresando el número de horas trabajadas en
el mes y el valor tanto como de las horas normales de trabajo y las horas extras.*/

var vrextra = 15000;
var salario = ("Por favor digite su salario actual");
var htrabajadas = prompt("Por favor digite la cantidad de horas trabajadas durante el mes");
var hextra = ("Por favor digite la cantidad de horas extras, de no tener horas extras en el mes, por favor digite 0 (CERO)");
var vrhtrabajadas = salario * htrabajadas;
var thxtra = hextra * vrextra;
var total = vrhtrabajadas + thxtra;
alert (`El total a pagar para el presente mes es de ${total} Teniendo en cuenta que se pagara un valor por horas extra correspondiente a ${thxtra} y un salario base por valor de ${vrhtrabajadas}`)

alert("Siguiente punto del taller");


/*5. Digita el ingreso del precio de un producto y se debe calcular el IVA, mostrar cuanto es el
IVA que se agrega, mostrar el precio del producto sin IVA y el total a pagar. */
var precio = prompt("Por favor digite el precio del producto");
var iva = precio * 0.19;
alert(`El iva es ${iva}`);
alert(`el precio del producto sin iva es ${precio}`);
var totalAPagar = precio + iva;
alert(`El total a pagar es ${totalAPagar}`);

alert("Siguiente punto del taller");

/*6. Calcule el porcentaje de alumnos y alumnas de un salón de clase, digitando el total de
alumnos hombres y mujeres. */
var total = prompt("Por favor digite el total de alumnos");
var hombres = prompt("Por favor digite el total de alumnos hombres");
var porcentajeHombres = hombres * 100 / total;
alert(`El porcentaje de alumnos hombres es ${porcentajeHombres}`);
var mujeres = prompt("Por favor digite el total de alumnos mujeres");
var porcentajeMujeres = mujeres * 100 / total;
alert(`El porcentaje de alumnos hombres es ${porcentajeMujeres}`);

alert("Siguiente punto del taller");

/*7. Calcule el promedio de 3 notas de un alumno, el rango de cada nota es del 1 al 5. */
var nota1 = prompt("Por favor digite la primera nota");
var nota2 = prompt("Por favor digite la segunda nota");
var nota3 = prompt("Por favor digite la tercera nota");
var promedio = (nota1 + nota2 + nota3) / 3;
alert(`El promedio de las notas es ${promedio}`);

alert("Se finalizó el taller");

