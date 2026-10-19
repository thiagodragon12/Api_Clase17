const api = "http://127.0.0.1:8000"

let botellas = [];


function LeerBotellas() {
    fetch(api + "/Ver-Botellas")
        .then(res => res.json())
        .then(datos => {
            botellas = datos;
            let fila = "";
            botellas.forEach(s => {
                fila += `
                    <tr>
                        <td>$ ${botella.botellas}</td>
                        <td>$ ${botella.nombre}</td>
                        <td>$ ${botella.creador}</td>
                        <td>$ ${botella.fechav}</td>
                        <td>$ ${botella.tipo}</td>
                        <td>$ ${botella.cantidad}</td>
                        <td>
                            <button class="btn chico" onclick="editar(${botella.id})">Editar</button>
                            <button class="btn chico rojo" onclick="borrar(${botella.id})">Borrar</button>
                        </td>
                    </tr>
                `;
            });
            document.getElementById("tabla").innerHTML = filas;
        })
        .catch(() => mostrar("No se pudo conectar con la API."));
}

function guardar(event) {
    event.preventDefault();

    const id = document.getElementById("id").value;
    const datos = {
        nombre: document.getElementById("nombre").value,
        creador: document.getElementById("creador").value,
        precio: Float(document.getElementById("fechav").value),
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
            mostrar(respuesta.mensaje);
        })
        .catch(() => mostrar("No se pudo conectar con la API."));
}

function editar(id) {
    const botella = servicios.find(botella => botella.id === id);
    document.getElementById("id").value = botella.id;
    document.getElementById("servicio").value = botella.servicio;
    document.getElementById("descripcion").value = botella.descripcion;
    document.getElementById("precio").value = botella.precio;
    document.getElementById("categoria").value = botella.categoria;
}

function borrar(id) {
    if (!confirm("¿Seguro que querés borrar este servicio?")) return;

    fetch(API + "/Eliminar_Botella/" + id, { method: "DELETE" })
        .then(res => res.json())
        .then(respuesta => {
            mostrar(respuesta.mensaje);
            cargar();
        })
        .catch(() => mostrar("No se pudo conectar con la API."));
}
function mostrar(texto) {
    document.getElementById("mensaje").textContent = texto;
}

cargar();