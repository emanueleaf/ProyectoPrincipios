document.addEventListener("DOMContentLoaded", function() {
    // Obtener el elemento donde se mostrarán las tarjetas
    const lista = document.getElementById('lista');
    const dataURL = '/images/datos2.json';
    let propiedades = []; // Almacenar todas las propiedades

    // Función para mostrar una tarjeta
    function mostrarTarjeta(propiedad) {
        const tarjeta = document.createElement('li');
        tarjeta.classList.add('elemento');

        const imagen = document.createElement('img');
        imagen.src = propiedad.imagen;
        tarjeta.appendChild(imagen);

        const nombre = document.createElement('h3');
        nombre.textContent = propiedad.tipo;
        tarjeta.appendChild(nombre);

        const direccion = document.createElement('p');
        direccion.textContent = `Dirección: ${propiedad.ubicacion}`;
        tarjeta.appendChild(direccion);

        const precio = document.createElement('p');
        precio.textContent = `Precio: $${propiedad.precio}`;
        tarjeta.appendChild(precio);

        const contactoBtn = document.createElement('a');
        contactoBtn.href = `mailto:correo@ejemplo.com?subject=Consulta%20sobre%20${propiedad.tipo}&body=Hola,%20estoy%20interesado%20en%20${propiedad.tipo}%20en%20${propiedad.ubicacion}.%20Por%20favor%20proporciona%20más%20información.`;
        contactoBtn.textContent = 'Contactar';
        contactoBtn.classList.add('contactar-btn');
        tarjeta.appendChild(contactoBtn);

        lista.appendChild(tarjeta);
    }

    // Cargar el JSON de propiedades
    fetch(dataURL)
        .then(response => response.json())
        .then(data => {
            propiedades = data.inmuebles; // Almacenar todas las propiedades

            // Mostrar todas las propiedades al inicio
            propiedades.forEach(propiedad => {
                mostrarTarjeta(propiedad);
            });
        })
        .catch(error => {
            console.error('Error al cargar el JSON:', error);
        });

    // Agregar evento para los botones de filtro por tipo de unidad
    const filtrosUnidad = document.querySelectorAll('input[name="unidad"]');
    filtrosUnidad.forEach(filtro => {
        filtro.addEventListener('change', () => {
            filtrarPropiedades();
        });
    });

    // Agregar evento para los checkboxes de filtro
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            filtrarPropiedades();
        });
    });

    // Agregar evento para el rango de precio
    const precioMaximo = document.getElementById('precioMaximo');
    precioMaximo.addEventListener('input', () => {
        filtrarPropiedades();
    });

    // Función para filtrar propiedades según los criterios seleccionados
    function filtrarPropiedades() {
        // Obtener valores de los filtros
        const tipoUnidadSeleccionado = document.querySelector('input[name="unidad"]:checked').value;
        const checkboxesSeleccionados = document.querySelectorAll('input[type="checkbox"]:checked');
        const preciosMaximos = parseInt(document.getElementById('precioMaximo').value);

        // Filtrar propiedades
        const propiedadesFiltradas = propiedades.filter(propiedad => {
            const precioPropiedad = parseInt(propiedad.precio);
            const tipoUnidadPropiedad = propiedad.tipo; // Reemplaza con el campo correcto del JSON
            const numeroPisosPropiedad = parseInt(propiedad.numPisos); // Reemplaza con el campo correcto del JSON

            return (
                (tipoUnidadSeleccionado === 'todos' || tipoUnidadSeleccionado === tipoUnidadPropiedad) &&
                (preciosMaximos >= precioPropiedad) &&
                (checkboxesSeleccionados.every(checkbox => propiedad[checkbox.name] === 'Sí')) &&
                // Agrega más condiciones según tus criterios de filtro
                (numeroPisosPropiedad === parseInt(document.getElementById('numPisos').value)) // Ejemplo de filtro por número de pisos
            );
        });

        // Limpiar la lista actual
        lista.innerHTML = '';

        // Mostrar las propiedades filtradas
        propiedadesFiltradas.forEach(propiedad => {
            mostrarTarjeta(propiedad);
        });

        // Mostrar un mensaje si no se encontraron propiedades
        if (propiedadesFiltradas.length === 0) {
            const resultado = document.getElementById('resultado');
            resultado.textContent = 'No se encontraron propiedades.';
        } else {
            const resultado = document.getElementById('resultado');
            resultado.textContent = '';
        }
    }
});