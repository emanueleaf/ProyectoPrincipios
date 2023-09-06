// Obtén referencias a elementos HTML
const filtroPrincipalSelect = document.getElementById('filtroPrincipal');
const categoriaSelect = document.getElementById('categoria');
const precioInput = document.getElementById('precio');
const precioValor = document.getElementById('precioValor');
const lista = document.getElementById('lista');
const resultado = document.getElementById('resultado');
const filtroCategoria = document.getElementById('filtroCategoria');
const filtroPrecio = document.getElementById('filtroPrecio');

// Agrega eventos de cambio para el filtro principal
filtroPrincipalSelect.addEventListener('change', cambiarFiltro);

// Función para cambiar los filtros mostrados según la opción seleccionada en el filtro principal
function cambiarFiltro() {
    const opcionSeleccionada = filtroPrincipalSelect.value;

    if (opcionSeleccionada === 'categoria') {
        filtroCategoria.style.display = 'block';
        filtroPrecio.style.display = 'none';
    } else if (opcionSeleccionada === 'precio') {
        filtroCategoria.style.display = 'none';
        filtroPrecio.style.display = 'block';
    }

    // Llama a la función de filtrado actualizada
    filtrar();
}

// Agrega eventos de cambio para los filtros de categoría y precio
categoriaSelect.addEventListener('change', filtrar);
precioInput.addEventListener('input', actualizarPrecio);

// Función para filtrar elementos
function filtrar() {
    const categoriaSeleccionada = categoriaSelect.value;
    const precioMaximo = precioInput.value;

    const elementosFiltrados = Array.from(lista.children).filter((elemento) => {
        const categoria = elemento.getAttribute('data-categoria');
        const precio = parseInt(elemento.getAttribute('data-precio'));

        // Aplica los filtros
        const filtroCategoria = categoriaSeleccionada === 'todos' || categoria === categoriaSeleccionada;
        const filtroPrecio = precio <= precioMaximo;

        return filtroCategoria && filtroPrecio;
    });

    // Muestra los elementos filtrados
    mostrarResultados(elementosFiltrados);
}

// Función para actualizar el valor del precio
function actualizarPrecio() {
    const precio = precioInput.value;
    precioValor.textContent = `$${precio}`;
    filtrar();
}

// Función para mostrar los resultados
function mostrarResultados(elementos) {
    resultado.innerHTML = '';

    if (elementos.length === 0) {
        resultado.textContent = 'No se encontraron elementos.';
    } else {
        elementos.forEach((elemento) => {
            resultado.appendChild(elemento.cloneNode(true));
        });
    }
}

// Inicializa el filtro
filtrar();
