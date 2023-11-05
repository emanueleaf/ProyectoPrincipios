// Obtén referencias a los elementos
const tipoUrbanizacion = document.querySelector("#urbanizacion");
const zonas = document.querySelectorAll(".zonas");
const aceptaMascotas = document.querySelectorAll(".acepta-mascotas");


// Agrega un evento de cambio al elemento "urbanizacion"
tipoUrbanizacion.addEventListener("change", () => {
    if (tipoUrbanizacion.value === "abierta") {
        // Oculta todos los elementos con la clase "zonas"
        zonas.forEach(element => {
            element.style.display = "none";
        });
        aceptaMascotas.forEach(element => {
            element.style.display = "none";
        });
    } else {
        // Muestra todos los elementos con la clase "zonas"
        zonas.forEach(element => {
            element.style.display = "block";
        });
        aceptaMascotas.forEach(element => {
            element.style.display = "block";
        });
    }
});

const zonasVerdes = document.querySelector("#zonasVerdes");
const inputVerdes = document.querySelector("#areas-verdes");
const categorias = document.querySelector("#categoria");

categorias.addEventListener("change", () => {
    if (tipoUrbanizacion.value === "abierta" &&
        categorias.value === "apartamento") {
        zonasVerdes.style.display = "none";
        inputVerdes.style.display = "none";
    }
});
// Agregar un evento de cambio al campo de filtro de baños
const filtroBanos = document.getElementById('filtro-banos');
filtroBanos.addEventListener('change', () => {
    const valorFiltro = filtroBanos.value;
    filtrarTarjetasPorBanos(valorFiltro);
});

// Función para filtrar las tarjetas de inmuebles por la cantidad de baños
function filtrarTarjetasPorBanos(cantidadBanos) {
    const tarjetas = document.querySelectorAll('.property-card');

    tarjetas.forEach((tarjeta) => {
        const numBanos = tarjeta.dataset.numBanos; // Obtener la cantidad de baños desde el atributo data

        if (cantidadBanos === 'todos' || numBanos === cantidadBanos) {
            tarjeta.style.display = 'block'; // Mostrar la tarjeta si coincide con el filtro o se selecciona "todos"
        } else {
            tarjeta.style.display = 'none'; // Ocultar la tarjeta si no coincide con el filtro
        }
    });
}

// Agregar un evento de cambio al campo de filtro de terraza
const filtroTerraza = document.getElementById('filtro-terraza');
filtroTerraza.addEventListener('change', () => {
    const valorFiltro = filtroTerraza.value;
    filtrarTarjetasPorTerraza(valorFiltro);
});

// Función para filtrar las tarjetas de inmuebles por la presencia de terraza
function filtrarTarjetasPorTerraza(terraza) {
    const tarjetas = document.querySelectorAll('.property-card');

    tarjetas.forEach((tarjeta) => {
        const tieneTerraza = tarjeta.dataset.terraza === 'true'; // Obtener la información de terraza desde el atributo data

        if (terraza === 'todos' || (terraza === 'true' && tieneTerraza) || (terraza === 'false' && !tieneTerraza)) {
            tarjeta.style.display = 'block'; // Mostrar la tarjeta si coincide con el filtro o se selecciona "todos"
        } else {
            tarjeta.style.display = 'none'; // Ocultar la tarjeta si no coincide con el filtro
        }
    });
}

// Agregar un evento de cambio al campo de filtro de cantidad de pisos
const filtroPisos = document.getElementById('filtro-pisos');
filtroPisos.addEventListener('input', () => {
    const valorFiltro = parseInt(filtroPisos.value, 10);
    filtrarTarjetasPorPisos(valorFiltro);
});

// Función para filtrar las tarjetas de inmuebles por la cantidad de pisos
function filtrarTarjetasPorPisos(cantidadPisos) {
    const tarjetas = document.querySelectorAll('.property-card');

    tarjetas.forEach((tarjeta) => {
        const numPisos = parseInt(tarjeta.dataset.numPisos, 10); // Obtener la cantidad de pisos desde el atributo data

        if (isNaN(cantidadPisos) || cantidadPisos === 1 || cantidadPisos === numPisos) {
            tarjeta.style.display = 'block'; // Mostrar la tarjeta si coincide con el filtro, si el filtro está vacío o si se selecciona "Solo un piso"
        } else {
            tarjeta.style.display = 'none'; // Ocultar la tarjeta si no coincide con el filtro
        }
    });
}
// Agregar un evento de cambio al campo de filtro "Amueblado"
const filtroAmueblado = document.getElementById('filtro-amueblado');
filtroAmueblado.addEventListener('change', () => {
    const valorFiltro = filtroAmueblado.value;
    filtrarTarjetasPorAmueblado(valorFiltro);
});

// Función para filtrar las tarjetas de inmuebles por la opción "Amueblado"
function filtrarTarjetasPorAmueblado(amueblado) {
    const tarjetas = document.querySelectorAll('.property-card');

    tarjetas.forEach((tarjeta) => {
        const esAmueblado = tarjeta.dataset.amueblado === 'true'; // Obtener la información de "amueblado" desde el atributo data

        if (amueblado === 'todos' || (amueblado === 'true' && esAmueblado) || (amueblado === 'false' && !esAmueblado)) {
            tarjeta.style.display = 'block'; // Mostrar la tarjeta si coincide con el filtro o se selecciona "todos"
        } else {
            tarjeta.style.display = 'none'; // Ocultar la tarjeta si no coincide con el filtro
        }
    });
}
// Agregar un evento de cambio al campo de filtro de tamaño en metros cuadrados
const filtroTamano = document.getElementById('filtro-tamano');
filtroTamano.addEventListener('change', () => {
    const valorFiltro = filtroTamano.value;
    filtrarTarjetasPorTamano(valorFiltro);
});

// Función para filtrar las tarjetas de inmuebles por el tamaño en metros cuadrados
function filtrarTarjetasPorTamano(tamano) {
    const tarjetas = document.querySelectorAll('.property-card');

    tarjetas.forEach((tarjeta) => {
        const tamanoPropiedad = parseInt(tarjeta.dataset.tamano, 10); // Obtener el tamaño en metros cuadrados desde el atributo data

        if (tamano === 'todos' || (tamano === '50' && tamanoPropiedad < 50) || (tamano === '100' && tamanoPropiedad >= 50 && tamanoPropiedad <= 100) || (tamano === '150' && tamanoPropiedad > 100 && tamanoPropiedad <= 150) || (tamano === '200' && tamanoPropiedad > 150 && tamanoPropiedad <= 200) || (tamano === '250' && tamanoPropiedad > 200)) {
            tarjeta.style.display = 'block'; // Mostrar la tarjeta si coincide con el filtro o se selecciona "todos"
        } else {
            tarjeta.style.display = 'none'; // Ocultar la tarjeta si no coincide con el filtro
        }
    });
}

// Agregar un evento de cambio al campo de filtro "Acepta Mascotas"
const filtroAceptaMascotas = document.getElementById('filtro-acepta-mascotas');
filtroAceptaMascotas.addEventListener('change', () => {
    const valorFiltro = filtroAceptaMascotas.value;
    filtrarTarjetasPorAceptaMascotas(valorFiltro);
});

// Función para filtrar las tarjetas de inmuebles por la opción "Acepta Mascotas"
function filtrarTarjetasPorAceptaMascotas(aceptaMascotas) {
    const tarjetas = document.querySelectorAll('.property-card');

    tarjetas.forEach((tarjeta) => {
        const aceptaMascotasPropiedad = tarjeta.dataset.aceptaMascotas === 'true'; // Obtener la información de "acepta_mascotas" desde el atributo data

        if (aceptaMascotas === 'todos' || (aceptaMascotas === 'si' && aceptaMascotasPropiedad) || (aceptaMascotas === 'no' && !aceptaMascotasPropiedad)) {
            tarjeta.style.display = 'block'; // Mostrar la tarjeta si coincide con el filtro o se selecciona "todos"
        } else {
            tarjeta.style.display = 'none'; // Ocultar la tarjeta si no coincide con el filtro
        }
    });
}
// Agregar un evento de cambio al campo de filtro "Áreas Verdes"
const filtroAreasVerdes = document.getElementById('filtro-areas-verdes');
filtroAreasVerdes.addEventListener('change', () => {
    const valorFiltro = filtroAreasVerdes.value;
    filtrarTarjetasPorAreasVerdes(valorFiltro);
});

// Función para filtrar las tarjetas de inmuebles por la opción "Áreas Verdes"
function filtrarTarjetasPorAreasVerdes(areasVerdes) {
    const tarjetas = document.querySelectorAll('.property-card');

    tarjetas.forEach((tarjeta) => {
        const areasVerdesPropiedad = tarjeta.dataset.areasVerdes === 'true'; // Obtener la información de "areas_verdes" desde el atributo data

        if (areasVerdes === 'todos' || (areasVerdes === 'si' && areasVerdesPropiedad) || (areasVerdes === 'no' && !areasVerdesPropiedad)) {
            tarjeta.style.display = 'block'; // Mostrar la tarjeta si coincide con el filtro o se selecciona "todos"
        } else {
            tarjeta.style.display = 'none'; // Ocultar la tarjeta si no coincide con el filtro
        }
    });
}

// Agregar un evento de cambio al campo de filtro "Parqueadero"
const filtroParqueadero = document.getElementById('filtro-parqueadero');
filtroParqueadero.addEventListener('change', () => {
    const valorFiltro = filtroParqueadero.value;
    filtrarTarjetasPorParqueadero(valorFiltro);
});

// Función para filtrar las tarjetas de inmuebles por la opción "Parqueadero"
function filtrarTarjetasPorParqueadero(parqueadero) {
    const tarjetas = document.querySelectorAll('.property-card');

    tarjetas.forEach((tarjeta) => {
        const parqueaderoPropiedad = tarjeta.dataset.parqueadero === 'true'; // Obtener la información de "parqueadero" desde el atributo data

        if (parqueadero === 'todos' || (parqueadero === 'si' && parqueaderoPropiedad) || (parqueadero === 'no' && !parqueaderoPropiedad)) {
            tarjeta.style.display = 'block'; // Mostrar la tarjeta si coincide con el filtro o se selecciona "todos"
        } else {
            tarjeta.style.display = 'none'; // Ocultar la tarjeta si no coincide con el filtro
        }
    });
}
// Agregar un evento de cambio al campo de filtro "Calefacción"
const filtroCalefaccion = document.getElementById('filtro-calefaccion');
filtroCalefaccion.addEventListener('change', () => {
    const valorFiltro = filtroCalefaccion.value;
    filtrarTarjetasPorCalefaccion(valorFiltro);
});

// Función para filtrar las tarjetas de inmuebles por la opción "Calefacción"
function filtrarTarjetasPorCalefaccion(calefaccion) {
    const tarjetas = document.querySelectorAll('.property-card');

    tarjetas.forEach((tarjeta) => {
        const calefaccionPropiedad = tarjeta.dataset.calefaccion === 'true'; // Obtener la información de "calefaccion" desde el atributo data

        if (calefaccion === 'todos' || (calefaccion === 'si' && calefaccionPropiedad) || (calefaccion === 'no' && !calefaccionPropiedad)) {
            tarjeta.style.display = 'block'; // Mostrar la tarjeta si coincide con el filtro o se selecciona "todos"
        } else {
            tarjeta.style.display = 'none'; // Ocultar la tarjeta si no coincide con el filtro
        }
    });
}
// Agregar un evento de cambio al campo de filtro "Adaptado para Discapacidad"
const filtroDiscapacidad = document.getElementById('filtro-discapacidad');
filtroDiscapacidad.addEventListener('change', () => {
    const valorFiltro = filtroDiscapacidad.value;
    filtrarTarjetasPorDiscapacidad(valorFiltro);
});

// Función para filtrar las tarjetas de inmuebles por la opción "Adaptado para Discapacidad"
function filtrarTarjetasPorDiscapacidad(discapacidad) {
    const tarjetas = document.querySelectorAll('.property-card');

    tarjetas.forEach((tarjeta) => {
        const discapacidadPropiedad = tarjeta.dataset.discapacidad === 'true'; // Obtener la información de "adaptado_discapacidad" desde el atributo data

        if (discapacidad === 'todos' || (discapacidad === 'si' && discapacidadPropiedad) || (discapacidad === 'no' && !discapacidadPropiedad)) {
            tarjeta.style.display = 'block'; // Mostrar la tarjeta si coincide con el filtro o se selecciona "todos"
        } else {
            tarjeta.style.display = 'none'; // Ocultar la tarjeta si no coincide con el filtro
        }
    });
}
// Agregar un evento de cambio al campo de filtro de precio
const filtroPrecio = document.getElementById('filtro-precio');
const precioMin = document.getElementById('precio-min');
const precioMax = document.getElementById('precio-max');

filtroPrecio.addEventListener('input', () => {
    mostrarRangoPrecio();
    filtrarTarjetasPorPrecio();
});

// Función para mostrar el rango de precio seleccionado
function mostrarRangoPrecio() {
    precioMin.textContent = filtroPrecio.min;
    precioMax.textContent = filtroPrecio.value;
}

// Función para filtrar las tarjetas de inmuebles por precio
function filtrarTarjetasPorPrecio() {
    const tarjetas = document.querySelectorAll('.property-card');
    const precioSeleccionado = parseInt(filtroPrecio.value);

    tarjetas.forEach((tarjeta) => {
        const precioPropiedad = parseInt(tarjeta.dataset.precio);

        if (precioPropiedad <= precioSeleccionado) {
            tarjeta.style.display = 'block'; // Mostrar la tarjeta si el precio es menor o igual al seleccionado
        } else {
            tarjeta.style.display = 'none'; // Ocultar la tarjeta si el precio es mayor
        }
    });
}

// Agregar un evento de cambio al campo de filtro "Zonas Comunes"
const filtroZonasComunes = document.getElementById('zonas-comunes');
filtroZonasComunes.addEventListener('change', () => {
    const valorFiltro = filtroZonasComunes.value;
    filtrarTarjetasPorZonasComunes(valorFiltro);
});

// Función para filtrar las tarjetas de inmuebles por la opción "Zonas Comunes"
function filtrarTarjetasPorZonasComunes(zonasComunes) {
    const tarjetas = document.querySelectorAll('.property-card');

    tarjetas.forEach((tarjeta) => {
        const tieneZonasComunes = tarjeta.dataset.zonasComunes === 'true'; // Obtener la información de "zonas_comunes" desde el atributo data

        if (zonasComunes === 'todos' || (zonasComunes === 'si' && tieneZonasComunes) || (zonasComunes === 'no' && !tieneZonasComunes)) {
            tarjeta.style.display = 'block'; // Mostrar la tarjeta si coincide con el filtro o se selecciona "todos"
        } else {
            tarjeta.style.display = 'none'; // Ocultar la tarjeta si no coincide con el filtro
        }
    });
}

// Agregar un evento de cambio al campo de filtro "Venta/Alquiler"
const filtroTipoVenta = document.getElementById('venta-alquiler');
filtroTipoVenta.addEventListener('change', () => {
    const valorFiltro = filtroTipoVenta.value;
    filtrarTarjetasPorTipoVenta(valorFiltro);
});

// Función para filtrar las tarjetas de inmuebles por el tipo de venta
function filtrarTarjetasPorTipoVenta(tipoVenta) {
    const tarjetas = document.querySelectorAll('.property-card');

    tarjetas.forEach((tarjeta) => {
        const tipoVentaTarjeta = tarjeta.dataset.tipoVenta; // Obtener el tipo de venta desde el atributo data

        if (tipoVenta === 'todos' || tipoVenta === tipoVentaTarjeta) {
            tarjeta.style.display = 'block'; // Mostrar la tarjeta si coincide con el filtro o se selecciona "todos"
        } else {
            tarjeta.style.display = 'none'; // Ocultar la tarjeta si no coincide con el filtro
        }
    });
}