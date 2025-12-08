// CODIGO JAVASCRIPT POR ANGEL HERNANDEZ Y SU EQUIPO

let bebidas = [
    {
        idBebida: 1,
        nombre: "Coca Cola",
        descripcion: "Refresco 355ml",
        foto: "img/coca.jpg",
        precio: 18.00,
        categoria: "Refresco",
        activo: 1
    },
    {
        idBebida: 2,
        nombre: "Agua Ciel",
        descripcion: "Botella 600ml",
        foto: "img/agua600.jpg",
        precio: 12.00,
        categoria: "Agua",
        activo: 1
    },
    {
        idBebida: 3,
        nombre: "Prime",
        descripcion: "Botella 600ml",
        foto: "img/prime.jpg",
        precio: 30.00,
        categoria: "Energética",
        activo: 1
    }
];

function cargarbebida() {
    // CORRECCIÓN AQUÍ: Agregada la 's' para coincidir con tu archivo 'bebidas.html'
    fetch("html/bebidas.html")
        .then(res => res.text())
        .then(html => {
            document.getElementById("contenido").innerHTML = html;
            cargarCatBebida();
        });
}

function cargarCatBebida() {
    let contenidoTabla = "";

    for (let i = 0; i < bebidas.length; i++) {
        let b = bebidas[i];

        contenidoTabla += "<tr>";
        contenidoTabla += "<td>" + b.idBebida + "</td>";
        contenidoTabla += "<td>" + b.nombre + "</td>";
        contenidoTabla += "<td>" + b.descripcion + "</td>";
        contenidoTabla += "<td><img src='" + b.foto + "' class='img-thumbnail' style='width:60px; height:60px; object-fit:cover;'></td>";
        contenidoTabla += "<td>$" + b.precio.toFixed(2) + "</td>";
        contenidoTabla += "<td>" + b.categoria + "</td>";
        contenidoTabla += "<td>" + b.activo + "</td>";

        contenidoTabla += "<td><button class='btn btn-info btn-sm' onclick='seleccionarBebida(" + i + ")'><i class='bi bi-check-circle'></i></button></td>";
        contenidoTabla += "<td><button class='btn btn-danger btn-sm' onclick='eliminarBebida(" + i + ")'><i class='bi bi-trash'></i></button></td>";

        contenidoTabla += "</tr>";
    }

    document.getElementById("tbbebida").innerHTML = contenidoTabla;
}

function seleccionarBebida(i) {
    let b = bebidas[i];

    document.getElementById("txtIdBebida").value = b.idBebida;
    document.getElementById("txtNombreBebida").value = b.nombre;
    document.getElementById("txtDescripcionBebida").value = b.descripcion;
    document.getElementById("txtFotoBebida").value = "";
    document.getElementById("txtPrecioBebida").value = b.precio;
    document.getElementById("txtCategoriaBebida").value = b.categoria;
    document.getElementById("txtActivoBebida").value = b.activo;
}

function almacenarBebida() {
    let ultimo = bebidas[bebidas.length - 1]?.idBebida || 0;
    let nuevoID = ultimo + 1;

    let nueva = {
        idBebida: nuevoID,
        nombre: document.getElementById("txtNombreBebida").value,
        descripcion: document.getElementById("txtDescripcionBebida").value,
        foto: document.getElementById("txtFotoBebida").value,
        precio: parseFloat(document.getElementById("txtPrecioBebida").value),
        categoria: document.getElementById("txtCategoriaBebida").value,
        activo: document.getElementById("txtActivoBebida").value
    };

    bebidas.push(nueva);
    cargarCatBebida();
    cancelarBebida();

    Swal.fire({
        icon: "success",
        title: "Agregado",
        text: "Bebida agregada correctamente"
    });
}

function modificarBebida() {
    let id = document.getElementById("txtIdBebida").value;
    let pos = bebidas.findIndex(b => b.idBebida == id);

    if (pos === -1) return;

    bebidas[pos] = {
        idBebida: id,
        nombre: document.getElementById("txtNombreBebida").value,
        descripcion: document.getElementById("txtDescripcionBebida").value,
        foto: document.getElementById("txtFotoBebida").value,
        precio: parseFloat(document.getElementById("txtPrecioBebida").value),
        categoria: document.getElementById("txtCategoriaBebida").value,
        activo: document.getElementById("txtActivoBebida").value
    };

    cargarCatBebida();
    cancelarBebida();

    Swal.fire({
        icon: "info",
        title: "Modificado",
        text: "Bebida actualizada correctamente"
    });
}

function eliminarBebida(i) {
    bebidas.splice(i, 1);
    cargarCatBebida();

    Swal.fire({
        icon: "error",
        title: "Eliminada",
        text: "Bebida eliminada correctamente"
    });
}

function cancelarBebida() {
    let campos = document.querySelectorAll("input, textarea, select");
    campos.forEach(c => c.value = "");
}