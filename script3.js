document.addEventListener("DOMContentLoaded", () => {
    // URL del archivo JSON
    const jsonURL = 'datos.json'; // Reemplaza con la ubicación real de tu archivo JSON

    // Función para cargar los datos desde el archivo JSON
    async function cargarDatosDesdeJSON() {
        try {
            const response = await fetch("/datos.json");
            const datos = await response.json();
            return datos;
        } catch (error) {
            console.error('Error al cargar datos desde JSON:', error);
            return [];
        }
    }

    // Función para crear una tarjeta de propiedad
    function crearTarjeta(propiedad) {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("property-card");
        tarjeta.dataset.numBanos = propiedad.num_banos;

        const imagen = document.createElement("img");
        imagen.src = propiedad.imagen;
        imagen.alt = "Imagen de la propiedad";

        const titulo = document.createElement("h3");
        titulo.textContent = propiedad.categoria;

        const ubicacion = document.createElement("p");
        ubicacion.textContent = `Ubicación: ${propiedad.ubicacion}`;

        const precio = document.createElement("p");
        precio.textContent = `Precio: $${propiedad.precio}`;

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(ubicacion);
        tarjeta.appendChild(precio);

        tarjeta.dataset.terraza = propiedad.terraza ? 'true' : 'false';
        tarjeta.dataset.numPisos = propiedad.num_pisos;
        tarjeta.dataset.amueblado = propiedad.amueblado ? 'true' : 'false';
        tarjeta.dataset.tamano = propiedad.tamanio_metros_cuadrados;
        tarjeta.dataset.aceptaMascotas = propiedad.acepta_mascotas ? 'true' : 'false';
        tarjeta.dataset.areasVerdes = propiedad.areas_verdes ? 'true' : 'false';
        tarjeta.dataset.parqueadero = propiedad.parqueadero ? 'true' : 'false';
        tarjeta.dataset.calefaccion = propiedad.calefaccion ? 'true' : 'false';
        tarjeta.dataset.discapacidad = propiedad.adaptado_discapacidad ? 'true' : 'false';
        tarjeta.dataset.precio = propiedad.precio;

        return tarjeta;
    }

    // Obtén el contenedor de tarjetas
    const contenedorTarjetas = document.getElementById('property-cards');

    // Carga los datos y crea las tarjetas cuando los datos estén disponibles
    cargarDatosDesdeJSON().then((datos) => {
        datos.forEach((propiedad) => {
            const tarjeta = crearTarjeta(propiedad);
            contenedorTarjetas.appendChild(tarjeta);
        });
    });

});