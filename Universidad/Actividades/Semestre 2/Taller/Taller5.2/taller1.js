// // Ejercicios con arrays.

// Helper function to append results to the "resultados" <div>
function appendResult(title, content) {
    const resultados = document.getElementById("resultados");
    const section = document.createElement("div");
    section.className = "result-section";
    
    const titleElement = document.createElement("h3");
    titleElement.textContent = title;
    section.appendChild(titleElement);
    
    const contentElement = document.createElement("p");
    contentElement.innerHTML = content;
    section.appendChild(contentElement);
    
    resultados.appendChild(section);
}

// 4. Crea un array con nombres de frutas e imprime los datos en html por medio de un ciclo.
let frutas = ["manzana", "pera", "naranja", "uva", "fresa", "kiwi"];
let frutasOutput = "";
for (let i = 0; i < frutas.length; i++) {
    frutasOutput += frutas[i] + "<br>";
}
appendResult("4.Frutas", frutasOutput);

// 5. Cree un array con 3 elementos inicialmente y después agregue 2 elementos más, imprima en html todo los elementos.
let frutas1 = ["manzana", "pera", "naranja"];
frutas1.push("uva", "fresa");
let frutas1Output = frutas1.join("<br>");
appendResult("5.Frutas actualizadas", frutas1Output);

// 6. Del siguiente arreglo [3,5,9,10,35,42,12,22,25] mostrar en html cual es el primer número, el último, el del centro.
let numeros = [3, 5, 9, 10, 35, 42, 12, 22, 25];
let primerNumero = numeros[0];
let ultimoNumero = numeros[numeros.length - 1];
let indiceCentro = Math.floor(numeros.length / 2);
let numeroCentro = numeros[indiceCentro];

let numerosOutput = `Primer número: <span>${primerNumero}</span><br>
Último número: <span>${ultimoNumero}</span><br>
Número del centro: <span>${numeroCentro}</span>`;
appendResult("6.Números del array", numerosOutput);

// 7. Del siguiente arreglo [3,5,9,10,35,42,12,22,25] mostrar en html cuales y cuantos son los números pares y los impares.
let numeros1 = [3, 5, 9, 10, 35, 42, 12, 22, 25];
let pares = 0;
let impares = 0;
for (let i = 0; i < numeros1.length; i++) {
    if (numeros1[i] % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

let paresImparesOutput = `Hay <span>${pares}</span> números pares y <span>${impares}</span> números impares`;
appendResult("7.Pares e impares", paresImparesOutput);

// 8. Del siguiente arreglo [tomate,banano,manzana,pera,cebolla,papa,fresas,Ajo,Sandía] mostrar en html en cual posición se encuentran las frutas y en cual posición las verduras.
let verduras = ["tomate", "banano", "manzana", "pera", "cebolla", "papa", "fresas", "Ajo", "Sandía"];
let frutasOutput1 = "";
let verdurasOutput = "";
appendResult("8.Ejercicio Frutas y verduras", null)
	
	for (let i = 0; i < verduras.length; i++) {
		if (verduras[i] == "banano" || verduras[i] == "manzana" || verduras[i] == "pera" || verduras[i] == "fresas" || verduras[i] == "Sandía") {
			frutasOutput1 += `La fruta <span>${verduras[i]}</span> se encuentra en la posición ${i}<br>`;
		} else {
			verdurasOutput += `La verdura <span>${verduras[i]}</span> se encuentra en la posición ${i}<br>`;
		}
	}
	
	appendResult("Frutas", frutasOutput1);
	appendResult("Verduras", verdurasOutput);


// 9. Del siguiente arreglo [29,5,40,10,35,42,12,22,25,1,3] mostrar en html los elementos organizados de forma ascendente.
let numeros2 = [29, 5, 40, 10, 35, 42, 12, 22, 25, 1, 3];
let ordenados = numeros2.sort(function (a, b) {
    return a - b;
});
appendResult("9.Números ascendentes", ordenados.join("<br>"));

// 10. Del siguiente arreglo [29,5,40,10,35,42,12,22,25,1,3] mostrar en html los elementos organizados de forma descendente.
let numeros3 = [29, 5, 40, 10, 35, 42, 12, 22, 25, 1, 3];
let ordenados1 = numeros3.sort(function (a, b) {
    return b - a;
});
appendResult("10.Números descendentes", ordenados1.join("<br>"));

// 11. Del siguiente arreglo [2,4,6,8,10,12,14,16,18,20,22] mostrar en html los elementos ordenados aleatoriamente.
let numeros4 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22];
let ordenados2 = numeros4.sort(function (a, b) {
    return 0.5 - Math.random();
});
appendResult("11.Números aleatorios", ordenados2.join("<br>"));

// 12. arreglo 1: [3,5,9,10,35,42,12,22,25], arreglo 2: [9,5,33,12,7,20,22,3,8] de los anteriores arreglos mostrar en forma de (tabla de multiplicar) la suma de los elementos del arreglo 1 con los elementos del arreglo 2 también sumar el total de cada arreglo.
let numeros5 = [3, 5, 9, 10, 35, 42, 12, 22, 25];
let numeros6 = [9, 5, 33, 12, 7, 20, 22, 3, 8];
let suma1 = 0;
let suma2 = 0;
let sumaOutput = "";

for (let i = 0; i < numeros5.length; i++) {
    let suma = numeros5[i] + numeros6[i];
    sumaOutput += `${numeros5[i]} + ${numeros6[i]} = ${suma}<br>`;
    suma1 += numeros5[i];
    suma2 += numeros6[i];
}
sumaOutput += `Suma total del arreglo 1: <span>${suma1}</span><br>`;
sumaOutput += `Suma total del arreglo 2: <span>${suma2}</span><br>`;
sumaOutput += `Suma total de ambos arreglos: <span>${suma1 + suma2}</span><br>`;

appendResult("12.Sumas de arreglos", sumaOutput);