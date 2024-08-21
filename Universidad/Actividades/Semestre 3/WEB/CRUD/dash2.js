// Función para guardar datos en localStorage
function guardarDatos(datos) {
    let empleados = [];
    let datosPrevios = JSON.parse(localStorage.getItem("empleados"));
    if (datosPrevios != null) {
        empleados = datosPrevios;
    }
    empleados.push(datos);
    localStorage.setItem("empleados", JSON.stringify(empleados));
    alert("El empleado fue guardado con éxito");
}

// Función para mostrar datos en la tabla
function mostrarDatos() {
    let empleados = JSON.parse(localStorage.getItem("empleados")) || [];
    const tabla = document.querySelector("#datos-tabla tbody");
    tabla.innerHTML = "";
    empleados.forEach((dato, pos) => {
        let fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${pos + 1}</td>
            <td>${dato.nombre}</td>
            <td>${dato.tipoIdenti}</td>
            <td>${dato.noIdenti}</td>
            <td>${dato.area}</td>
            <td>${dato.salario}</td>
            <td>
                <button class="btn btn-warning btn-sm btn-editar" data-index="${pos}">Editar</button>
                <button class="btn btn-danger btn-sm btn-eliminar" data-index="${pos}">Eliminar</button>
            </td>
        `;
        tabla.appendChild(fila);
    });

    // Asignar event listeners a los botones de editar y eliminar
    document.querySelectorAll('.btn-editar').forEach(boton => {
        boton.addEventListener('click', editarEmpleado);
    });
    document.querySelectorAll('.btn-eliminar').forEach(boton => {
        boton.addEventListener('click', eliminarEmpleado);
    });
}

// Función para editar un empleado
function editarEmpleado(event) {
    const index = event.target.getAttribute('data-index');
    let empleados = JSON.parse(localStorage.getItem("empleados")) || [];
    const empleado = empleados[index];

    // Rellenar el formulario con los datos del empleado
    document.querySelector("#nombre-input").value = empleado.nombre;
    document.querySelector("#tipo-Identi").value = empleado.tipoIdenti;
    document.querySelector("#no-identi").value = empleado.noIdenti;
    document.querySelector("#area").value = empleado.area;
    document.querySelector("#salario-input").value = empleado.salario;

    // Cambiar el botón de "Crear Empleado" a "Actualizar Empleado"
    const botonCrear = document.querySelector('.boton-crear');
    botonCrear.style.display = 'none';

    let botonActualizar = document.querySelector('.boton-actualizar');
    if (!botonActualizar) {
        botonActualizar = document.createElement('button');
        botonActualizar.textContent = 'Actualizar Empleado';
        botonActualizar.className = 'btn btn-primary boton-actualizar';
        document.querySelector('form').appendChild(botonActualizar);
    }

    // Asignar el evento de actualizar empleado
    botonActualizar.onclick = function() {
        empleados[index] = {
            nombre: document.querySelector("#nombre-input").value,
            tipoIdenti: document.querySelector("#tipo-Identi").value,
            noIdenti: document.querySelector("#no-identi").value,
            area: document.querySelector("#area").value,
            salario: document.querySelector("#salario-input").value
        };
        localStorage.setItem('empleados', JSON.stringify(empleados));
        mostrarDatos();

        // Mostrar alerta de actualización
        alert("El empleado fue actualizado con éxito");

        // Resetear el formulario y los botones
        botonActualizar.remove();
        botonCrear.style.display = 'block';
        document.querySelector('form').reset();
    };
}

// Función para eliminar un empleado
function eliminarEmpleado(event) {
    const index = event.target.getAttribute('data-index');
    let empleados = JSON.parse(localStorage.getItem("empleados")) || [];
    
    if (confirm("¿Estás seguro de que deseas eliminar este empleado?")) {
        empleados.splice(index, 1);
        localStorage.setItem('empleados', JSON.stringify(empleados));
        mostrarDatos();
    }
}

// Función para buscar empleados
function buscarEmpleado(event) {
    const searchText = event.target.value.toLowerCase();
    let empleados = JSON.parse(localStorage.getItem("empleados")) || [];
    const tabla = document.querySelector("#datos-tabla tbody");
    tabla.innerHTML = "";
    empleados.forEach((dato, pos) => {
        const { nombre, noIdenti, area, salario } = dato;
        if (nombre.toLowerCase().includes(searchText) ||
            noIdenti.toString().includes(searchText) ||
            area.toLowerCase().includes(searchText) ||
            salario.toString().includes(searchText)) {
            let fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${pos + 1}</td>
                <td>${dato.nombre}</td>
                <td>${dato.tipoIdenti}</td>
                <td>${dato.noIdenti}</td>
                <td>${dato.area}</td>
                <td>${dato.salario}</td>
                <td>
                    <button class="btn btn-warning btn-sm btn-editar" data-index="${pos}">Editar</button>
                    <button class="btn btn-danger btn-sm btn-eliminar" data-index="${pos}">Eliminar</button>
                </td>
            `;
            tabla.appendChild(fila);
        }
    });
}

// Event listeners
document.querySelector('.boton-crear').addEventListener('click', () => {
    const nombre = document.querySelector("#nombre-input").value;
    const tipoIdenti = document.querySelector("#tipo-Identi").value;
    const noIdenti = document.querySelector("#no-identi").value;
    const area = document.querySelector("#area").value;
    const salario = document.querySelector("#salario-input").value;

    const nuevoEmpleado = { nombre, tipoIdenti, noIdenti, area, salario };
    guardarDatos(nuevoEmpleado);
    mostrarDatos();
    document.querySelector('form').reset();
});

document.querySelector('#search-input').addEventListener('input', buscarEmpleado);

// Inicializar la tabla con los datos
mostrarDatos();
