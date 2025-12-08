//CODIGO JAVASCRIPT PARA COMBOS
//   LISTA GLOBAL DE COMBOS
let combos = [
    {
        idCombo: 1,
        nombre: "Combo Tacos + Refresco",
        precio: 145.00,
        foto: "img/combo1.jpg",
        descripcion: "orden de tacos + 2 aguas frescas",
        activo: 1
    },
    {
        idCombo: 2,
        nombre: "Combo Hamburguesa",
        precio: 180.00,
        foto: "img/combo2.jpg",
        descripcion: "Torta  + salsas + refresco",
        activo: 1
    }
];

//   CARGAR HTML DE LA PÁGINA COMBO
function cargaCombo() {
    fetch("html/Combo.html")
        .then(res => res.text())
        .then(html => {
            document.getElementById("contenido").innerHTML = html;
            cargarCatCombo();
        });
}

//   LLENAR TABLA
function cargarCatCombo() {
    let contenido = "";

    for (let i = 0; i < combos.length; i++) {
        let c = combos[i];

        contenido += "<tr>";
        contenido += "<td>" + c.idCombo + "</td>";
        contenido += "<td>" + c.nombre + "</td>";
        contenido += "<td>$" + c.precio.toFixed(2) + "</td>";
        contenido += "<td><img src='" + c.foto + "' class='img-thumbnail' style='width:60px; height:60px; object-fit:cover;'></td>";
        contenido += "<td>" + c.descripcion + "</td>";
        contenido += "<td>" + c.activo + "</td>"; 

        contenido += "<td><button class='btn btn-info btn-sm' onclick='seleccionarCombo(" + i + ")'><i class='bi bi-check-circle'></i></button></td>";
        contenido += "<td><button class='btn btn-danger btn-sm' onclick='eliminarCombo(" + i + ")'><i class='bi bi-trash'></i></button></td>";
        contenido += "</tr>";
    }

    document.getElementById("tbcombo").innerHTML = contenido;
}

//   SELECCIONAR COMBO
function seleccionarCombo(i) {
    let c = combos[i];

    document.getElementById("txtIdCombo").value = c.idCombo;
    document.getElementById("txtNombreCombo").value = c.nombre;
    document.getElementById("txtPrecioCombo").value = c.precio;
    document.getElementById("txtRutaFotoCombo").value = "";
    document.getElementById("txtDescripcionCombo").value = c.descripcion;
    document.getElementById("txtActivoCombo").value = c.activo;
}

//   AGREGAR
function almacenarCombo() {
    let ultimo = combos[combos.length - 1].idCombo;
    let nuevoID = ultimo + 1;

    let nuevo = {
        idCombo: nuevoID,
        nombre: document.getElementById("txtNombreCombo").value,
        precio: parseFloat(document.getElementById("txtPrecioCombo").value),
        foto: document.getElementById("txtRutaFotoCombo").value,
        descripcion: document.getElementById("txtDescripcionCombo").value,
        activo: document.getElementById("txtActivoCombo").value
    };

    combos.push(nuevo);
    cargarCatCombo();
    cancelarCombo();

    Swal.fire({
        icon: "success",
        title: "Agregado",
        text: "Combo agregado correctamente"
    });
}

//   MODIFICAR
function modificarCombo() {
    let id = document.getElementById("txtIdCombo").value;

    let pos = combos.findIndex(c => c.idCombo == id);
    if (pos === -1) return;

    combos[pos] = {
        idCombo: id,
        nombre: document.getElementById("txtNombreCombo").value,
        precio: parseFloat(document.getElementById("txtPrecioCombo").value),
        foto: document.getElementById("txtRutaFotoCombo").value,
        descripcion: document.getElementById("txtDescripcionCombo").value,
        activo: document.getElementById("txtActivoCombo").value
    };

    cargarCatCombo();
    cancelarCombo();

    Swal.fire({
        icon: "info",
        title: "Modificado",
        text: "Combo actualizado correctamente"
    });
}

//   ELIMINAR
function eliminarCombo(i) {
    combos.splice(i, 1);
    cargarCatCombo();

    Swal.fire({
        icon: "error",
        title: "Eliminado",
        text: "Combo eliminado correctamente"
    });
}

//   CANCELAR
function cancelarCombo() {
    let campos = document.querySelectorAll("input, select, textarea");
    campos.forEach(c => c.value = "");
}
