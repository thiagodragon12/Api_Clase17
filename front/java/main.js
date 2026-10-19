const API = "http://127.0.0.1:8000";

let botellas = [];

function cargar() {
    fetch(API + "/Ver-Botellas")
        .then(res => res.json())
        .then(datos => {
            botellas = datos;
            let fila = "";
            botellas.forEach(botella => {
                fila += `
                    <tr>
                        <td>${botella.nombre}</td>
                        <td>${botella.creador}</td>
                        <td>${botella.fechaV}</td>
                        <td>${botella.tipo}</td>
                        <td>${botella.cantidad}</td>
                        <td>
                            <button class="boton chico" onclick="editar(${botella.id})">Editar</button>
                            <button class="boton chico rojo" onclick="borrar(${botella.id})">Borrar</button>
                        </td>
                    </tr>
                `;
            });
            document.getElementById("Tabla").innerHTML = fila;
        })
        .catch(() => mostrar("No se pudo conectar con la API."));
}

function guardar(event) {
    event.preventDefault();

    const id = document.getElementById("id").value;
    const datos = {
        nombre: document.getElementById("nombre").value,
        creador: document.getElementById("creador").value,
        fechaV: parseFloat(document.getElementById("fechav").value),
        tipo: document.getElementById("tipo").value,
        cantidad: document.getElementById("cantidad").value,
    };

    let url = API + "/Agregar-Botella";
    let metodo = "POST";
    if (id) {
        url = API + "/Modificar-Botella/" + id;
        metodo = "PUT";
    }

    fetch(url, {
        method: metodo,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos)
    })
        .then(res => res.json())
        .then(respuesta => {
            if (respuesta.detail) {
                mostrar("Revisá los datos: hay campos vacíos o inválidos.");
                return;
            }
            mostrar(respuesta);
            document.getElementById("formulario").reset();
            document.getElementById("id").value = "";
            cargar();
        })
        .catch(() => mostrar("No se pudo conectar con la API."));
}

function editar(id) {
    const botella = botellas.find(botella => botella.id === id);
    document.getElementById("id").value = botella.id;
    document.getElementById("nombre").value = botella.nombre;
    document.getElementById("creador").value = botella.creador;
    document.getElementById("fechav").value = botella.fechaV;
    document.getElementById("tipo").value = botella.tipo;
    document.getElementById("cantidad").value = botella.cantidad;
}

function borrar(id) {
    if (!confirm("¿Seguro que querés borrar esta botella?")) return;

    fetch(API + "/Eliminar-Botella/" + id, { method: "DELETE" })
        .then(res => res.json())
        .then(respuesta => {
            mostrar(respuesta);
            cargar();
        })
        .catch(() => mostrar("No se pudo conectar con la API."));
}

function mostrar(texto) {
    document.getElementById("mensaje").textContent = texto;
}

document.getElementById("formulario").addEventListener("submit", guardar);
cargar();
