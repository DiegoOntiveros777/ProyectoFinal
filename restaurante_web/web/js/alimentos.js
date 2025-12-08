//CODIGO JAVASCRIPT POR ANGEL HERNANDEZ Y SU EQUIPO

//   LISTA GLOBAL DE ALIMENTOS
let alimentos = [
    {
        idAlimento: 1,
        nombre: "Taco de Pastor",
        descripcion: "Taco tradicional con piña",
        foto: "img/al1.png",
        precio: 18,
        categoria: "Tacos",
        activo: 1
    },

    {
        idAlimento: 2,
        nombre: "Burrito de Asada",
        descripcion: "Burrito grande con salsa verde",
        foto: "img/al2.png",
        precio: 45,
        categoria: "Burritos",
        activo: 1
    },

    {
        idAlimento: 3,
        nombre: "Quesadilla de Queso",
        descripcion: "Quesadilla básica pero poderosa",
        foto: "img/al3.png",
        precio: 22,
        categoria: "Quesadillas",
        activo: 1
    }
];


//   CARGAR HTML DEL MÓDULO
function cargaAlimento() {
    fetch("html/alimentos.html")
        .then(function(res) { return res.text(); })
        .then(function(html) {
            document.getElementById("contenido").innerHTML = html;
            cargarCatAlimento();
        });
}


//   LLENAR TABLA
function cargarCatAlimento() {
    let tabla = "";

    for (let i = 0; i < alimentos.length; i++) {
        let a = alimentos[i];

        tabla += "<tr>";
        tabla += "<td>" + a.idAlimento + "</td>";
        tabla += "<td>" + a.nombre + "</td>";
        tabla += "<td>" + a.descripcion + "</td>";
        tabla += "<td><img src='" + a.foto + "' class='img-thumbnail' style='width:60px; height:60px; object-fit:cover;'></td>";
        tabla += "<td>" + a.precio + "</td>";
        tabla += "<td>" + a.categoria + "</td>";
        tabla += "<td>" + a.activo + "</td>";

        tabla += "<td><button class='btn btn-info btn-sm' onclick='seleccionarAlimento(" + i + ")'><i class='bi bi-check-circle'></i></button></td>";
        tabla += "<td><button class='btn btn-danger btn-sm' onclick='eliminarAlimento(" + i + ")'><i class='bi bi-trash'></i></button></td>";

        tabla += "</tr>";
    }

    document.getElementById("tbalimento").innerHTML = tabla;
}


//   SELECCIONAR ALIMENTO
function seleccionarAlimento(i) {
    let a = alimentos[i];

    document.getElementById("txtIdAlim").value = a.idAlimento;
    document.getElementById("txtNombreAlim").value = a.nombre;
    document.getElementById("txtDescripcionAlim").value = a.descripcion;
    document.getElementById("txtFotoAlim").value = "";
    document.getElementById("txtPrecioAlim").value = a.precio;
    document.getElementById("txtCategoriaAlim").value = a.categoria;
    document.getElementById("txtActivoAlim").value = a.activo;
}


//   INSERTAR NUEVO ALIMENTO
function almacenarAlimento() {
    let ultimo = alimentos[alimentos.length - 1].idAlimento;
    let nuevoID = ultimo + 1;

    let nuevo = {
        idAlimento: nuevoID,
        nombre: document.getElementById("txtNombreAlim").value,
        descripcion: document.getElementById("txtDescripcionAlim").value,
        foto: document.getElementById("txtFotoAlim").value,
        precio: document.getElementById("txtPrecioAlim").value,
        categoria: document.getElementById("txtCategoriaAlim").value,
        activo: document.getElementById("txtActivoAlim").value
    };

    alimentos.push(nuevo);
    cargarCatAlimento();
    cancelarAlimento();

    Swal.fire({
        icon: "success",
        title: "Agregado",
        text: "Alimento agregado correctamente"
    });
}


//   MODIFICAR ALIMENTO
function modificarAlimento() {
    let id = document.getElementById("txtIdAlim").value;

    let pos = alimentos.findIndex(function(a) {
        return a.idAlimento == id;
    });

    if (pos === -1) return;

    alimentos[pos] = {
        idAlimento: id,
        nombre: document.getElementById("txtNombreAlim").value,
        descripcion: document.getElementById("txtDescripcionAlim").value,
        foto: document.getElementById("txtFotoAlim").value,
        precio: document.getElementById("txtPrecioAlim").value,
        categoria: document.getElementById("txtCategoriaAlim").value,
        activo: document.getElementById("txtActivoAlim").value
    };

    cargarCatAlimento();
    cancelarAlimento();

    Swal.fire({
        icon: "info",
        title: "Modificado",
        text: "Alimento actualizado correctamente"
    });
}


//   ELIMINAR ALIMENTO
function eliminarAlimento(i) {
    alimentos.splice(i, 1);
    cargarCatAlimento();

    Swal.fire({
        icon: "error",
        title: "Eliminado",
        text: "Alimento eliminado correctamente"
    });
}


//   LIMPIAR FORMULARIO
function cancelarAlimento() {
    let campos = document.querySelectorAll("input, select");
    for (let i = 0; i < campos.length; i++) {
        campos[i].value = "";
    }
}
