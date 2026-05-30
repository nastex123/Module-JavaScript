// TASK 1: Configuración inicial con interactividad de DOM
const modal = document.getElementById('modalOverlay');
const btnAbrirModal = document.getElementById('btnAbrirModal');
const btnValidar = document.getElementById('btnValidar');
const nombreInput = document.getElementById('nombreInput');
const edadInput = document.getElementById('edadInput');
const errorText = document.getElementById('errorText');
const tituloResultado = document.getElementById('tituloResultado');
const mensajeCuerpo = document.getElementById('mensajeCuerpo');

// Mostrar el modal al hacer clic en el botón inicial
btnAbrirModal.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

btnValidar.addEventListener('click', () => {
    // TASK 2: Captura de datos desde el DOM
    const nombreUsuario = nombreInput.value.trim();
    const entradaEdad = edadInput.value.trim();

    // TASK 3: Validación de la edad
    const edadUsuario = Number(entradaEdad);

    // Validación: no vacío, debe ser número y mayor a 0
    if (entradaEdad === "" || isNaN(edadUsuario) || edadUsuario <= 0) {
        const msgError = "Error: Por favor, ingresa una edad válida en números.";
        console.error(msgError);
        errorText.innerText = msgError;
        return; // Detiene la ejecución si hay error
    }

    // Si pasa la validación, limpiamos errores y cerramos modal
    errorText.innerText = "";
    modal.classList.add('hidden');

    // TASK 4: Condicionales y mensajes dinámicos en la interfaz
    if (edadUsuario < 18) {
        const mensaje = `Hola ${nombreUsuario || 'Coder'}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`;
        actualizarInterfaz("Acceso Junior", mensaje);
        console.log(mensaje);
    } else {
        const mensaje = `Hola ${nombreUsuario || 'Coder'}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`;
        actualizarInterfaz("Acceso Senior", mensaje);
        console.log(mensaje);
    }
});

// Función auxiliar para actualizar el contenido de la página
function actualizarInterfaz(titulo, mensaje) {
    tituloResultado.innerText = titulo;
    mensajeCuerpo.innerText = mensaje;
    btnAbrirModal.innerText = "Reiniciar Registro";
}
