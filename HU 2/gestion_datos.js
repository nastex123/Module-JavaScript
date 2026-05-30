// Gestión de datos con Objetos, Sets y Maps

// Tarea 1: Objeto de productos
const productos = {
    p1: { id: 101, nombre: "Laptop Gamer", precio: 1500 },
    p2: { id: 102, nombre: "Mouse Inalámbrico", precio: 45 },
    p3: { id: 103, nombre: "Monitor 4K", precio: 350 },
    p4: { id: 104, nombre: "Teclado Mecánico", precio: 85 }
};

// Tarea 5: Función de validación
const validarProducto = (prod) => {
    return prod.id && typeof prod.nombre === 'string' && typeof prod.precio === 'number' && prod.precio > 0;
};

console.log("--- Validando productos ---");
Object.values(productos).forEach(p => {
    if (validarProducto(p)) {
        console.log(`Producto válido: ${p.nombre}`);
    } else {
        console.error(`Producto inválido detectado: ${p.nombre || 'ID: ' + p.id}`);
    }
});

// Tarea 2: Operaciones con Set
console.log("\n--- Trabajando con Set ---");
// Crear Set con duplicados (se eliminan automáticamente)
let numerosSet = new Set([10, 20, 10, 30, 40, 20, 50]);
console.log("Set inicial:", numerosSet);

// Agregar
numerosSet.add(60);

// Buscar
console.log("¿Existe el 30?:", numerosSet.has(30));

// Borrar
numerosSet.delete(10);

console.log("Valores del Set (for...of):");
for (const num of numerosSet) {
    console.log(`- Valor: ${num}`);
}

// Tarea 3: Creación de Map
const categoriaMap = new Map();
categoriaMap.set("Computación", productos.p1.nombre);
categoriaMap.set("Periféricos", productos.p2.nombre);
categoriaMap.set("Pantallas", productos.p3.nombre);
categoriaMap.set("Accesorios", productos.p4.nombre);

// Tarea 4: Iteraciones

// Recorrer objeto con for...in
console.log("\n--- Productos (for...in) ---");
for (const key in productos) {
    console.log(`${key}: ${productos[key].nombre}`);
}

// Recorrer Map con forEach
console.log("\n--- Categorías (forEach) ---");
categoriaMap.forEach((producto, categoria) => {
    console.log(`${categoria}: ${producto}`);
});

// Métodos de Object (keys, values, entries)
console.log("\n--- Métodos Object ---");
console.log("Keys:", Object.keys(productos));
console.log("Values:", Object.values(productos));

console.log("Entries:");
Object.entries(productos).forEach(([key, value]) => {
    console.log(`${key}: ${value.nombre} cuesta $${value.precio}`);
});

// Tarea 5: Reporte final
function realizarPruebas() {
    const reporte = {
        listaProductos: productos,
        productosUnicos: Array.from(numerosSet),
        categoriasRelacionadas: Object.fromEntries(categoriaMap)
    };
    
    console.log("\n--- Reporte Final ---", reporte);
    
    // Mostrar en el HTML
    if (typeof document !== 'undefined') {
        const output = document.getElementById('app');
        if (output) {
            output.innerHTML = `
                <h2>Gestión Completa</h2>
                <p>Datos procesados correctamente. Revisa la consola.</p>
                <p>Total: ${Object.keys(productos).length} productos.</p>
            `;
        }
    }
}

realizarPruebas();