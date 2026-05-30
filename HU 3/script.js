// TASK 2: Selección e inspección de elementos
// Utilizamos getElementById y querySelector para cumplir con los criterios
const inputNota = document.getElementById('inputNota');
const btnAgregar = document.querySelector('#btnAgregar');
const listaNotas = document.getElementById('listaNotas');

// Confirmamos las referencias en la consola
console.log("Referencias inicializadas:");
console.log("Input:", inputNota);
console.log("Botón:", btnAgregar);
console.log("Lista UL:", listaNotas);

// TASK 5: Persistencia con Local Storage
// Mantenemos un arreglo en memoria para gestionar los datos
let notas = [];

/**
 * Guarda el estado actual del arreglo 'notas' en Local Storage
 */
const guardarDatos = () => {
    localStorage.setItem("notas", JSON.stringify(notas));
};

/**
 * Crea un elemento <li> en el DOM y gestiona su botón de eliminación
 * @param {string} texto - El contenido de la nota
 */
const renderizarNotaEnDOM = (texto) => {
    // TASK 3: Crear el elemento li
    const li = document.createElement('li');
    
    // Usamos textContent para asignar el texto de forma segura
    li.textContent = texto;

    // Creamos el botón eliminar
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = "Eliminar";
    btnEliminar.style.marginLeft = "10px";

    // TASK 4: Eliminar notas del DOM
    btnEliminar.addEventListener('click', () => {
        // Remueve el li usando removeChild desde el elemento padre (ul)
        listaNotas.removeChild(li);
        
        // Actualizamos el arreglo en memoria y el storage
        notas = notas.filter(n => n !== texto);
        guardarDatos();
        
        console.log(`Nota eliminada con éxito: "${texto}"`);
    });

    // Insertamos el botón dentro del li y el li dentro de la ul
    li.appendChild(btnEliminar);
    listaNotas.appendChild(li);
};

// TASK 3: Lógica para agregar notas
btnAgregar.addEventListener('click', () => {
    const valor = inputNota.value.trim();

    // Validación simple de contenido
    if (valor === "") {
        alert("Por favor, ingresa un texto para la nota.");
        return;
    }

    // Actualizamos memoria, DOM y persistencia
    notas.push(valor);
    renderizarNotaEnDOM(valor);
    guardarDatos();

    // Limpieza e interfaz
    inputNota.value = "";
    inputNota.focus();
    console.log(`Nota agregada: "${valor}"`);
});

// TASK 5: Recuperación de datos al cargar la página
const datosPersistidos = localStorage.getItem("notas");
if (datosPersistidos) {
    notas = JSON.parse(datosPersistidos);
    notas.forEach(nota => renderizarNotaEnDOM(nota));
}
console.log(`Carga inicial completada. Notas recuperadas: ${notas.length}`);