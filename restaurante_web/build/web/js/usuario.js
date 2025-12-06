let usuarios = [
    {idUsuario:1, nombre:"Angel", apellidoP:"Hernandez", apellidoM:"Arriaga",
    telefono:"4771234567", correo:"angel@gmail.com", usuario:"angelInsano",
    contrasena:"1234", rol:"Administrador", activo:1},

    {idUsuario:2, nombre:"Diego", apellidoP:"Ontiveros", apellidoM:"Ortiz",
    telefono:"4775552222", correo:"diego@gmail.com", usuario:"diegoPro",
    contrasena:"abcd", rol:"Mesero", activo:1}
];


function cargarusuario() {
    fetch("html/usuario.html")
    .then(r => r.text())
    .then(html => {
        document.getElementById("contenido").innerHTML = html;
        cargarCatUsuario();
    });
}


function cargarCatUsuario() {
    let cotenidoTabla = "";

    for (let i = 0; i < usuarios.length; i++) {
        cotenidoTabla += "<tr>";

        cotenidoTabla += "<td>" + usuarios[i].idUsuario + "</td>";
        cotenidoTabla += "<td>" + usuarios[i].nombre + "</td>";
        cotenidoTabla += "<td>" + usuarios[i].apellidoP + " " + usuarios[i].apellidoM + "</td>";
        cotenidoTabla += "<td>" + usuarios[i].telefono + "</td>";
        cotenidoTabla += "<td>" + usuarios[i].correo + "</td>";
        cotenidoTabla += "<td>" + usuarios[i].usuario + "</td>";
        cotenidoTabla += "<td>" + usuarios[i].rol + "</td>";
        cotenidoTabla += "<td>" + usuarios[i].activo + "</td>";

        cotenidoTabla += "<td>";
        cotenidoTabla += "<button class='btn btn-info btn-sm' onclick='seleccionarUsuario(" + i + ")'>";
        cotenidoTabla += "<i class='bi bi-check-circle'></i></button>";
        cotenidoTabla += "</td>";

        cotenidoTabla += "<td>";
        cotenidoTabla += "<button class='btn btn-danger btn-sm' onclick='eliminarUsuario(" + i + ")'>";
        cotenidoTabla += "<i class='bi bi-trash'></i></button>";
        cotenidoTabla += "</td>";

        cotenidoTabla += "</tr>";
    }

    document.getElementById("tbUsuario").innerHTML = cotenidoTabla;
}

function seleccionarUsuario(i) {
    let u = usuarios[i];

    document.getElementById("txtIdUsuario").value = u.idUsuario;
    document.getElementById("txtNombreUsuario").value = u.nombre;
    document.getElementById("txtApellidoP").value = u.apellidoP;
    document.getElementById("txtApellidoM").value = u.apellidoM;
    document.getElementById("txtTelefonoUsuario").value = u.telefono;
    document.getElementById("txtCorreoUsuario").value = u.correo;
    document.getElementById("txtUserUsuario").value = u.usuario;
    document.getElementById("txtContraUsuario").value = u.contrasena;
    document.getElementById("txtRolUsuario").value = u.rol;
    document.getElementById("txtActivoUsuario").value = u.activo;
}

function almacenarUsuario() {

    let ultimo = usuarios[usuarios.length - 1].idUsuario;
    let nuevoID = ultimo + 1;

    let nuevo = {
        idUsuario: nuevoID,
        nombre: document.getElementById("txtNombreUsuario").value,
        apellidoP: document.getElementById("txtApellidoP").value,
        apellidoM: document.getElementById("txtApellidoM").value,
        telefono: document.getElementById("txtTelefonoUsuario").value,
        correo: document.getElementById("txtCorreoUsuario").value,
        usuario: document.getElementById("txtUserUsuario").value,
        contrasena: document.getElementById("txtContraUsuario").value,
        rol: document.getElementById("txtRolUsuario").value,
        activo: document.getElementById("txtActivoUsuario").value
    };

    usuarios.push(nuevo);

    cargarCatUsuario();
    cancelarUsuario();

    Swal.fire({
        icon:"success",
        title:"Agregado",
        text:"Usuario registrado correctamente"
    });
}

function modificarUsuario() {

    let id = document.getElementById("txtIdUsuario").value;

    let pos = usuarios.findIndex(u => u.idUsuario == id);

    usuarios[pos] = {
        idUsuario:id,
        nombre: document.getElementById("txtNombreUsuario").value,
        apellidoP: document.getElementById("txtApellidoP").value,
        apellidoM: document.getElementById("txtApellidoM").value,
        telefono: document.getElementById("txtTelefonoUsuario").value,
        correo: document.getElementById("txtCorreoUsuario").value,
        usuario: document.getElementById("txtUserUsuario").value,
        contrasena: document.getElementById("txtContraUsuario").value,
        rol: document.getElementById("txtRolUsuario").value,
        activo: document.getElementById("txtActivoUsuario").value
    };

    cargarCatUsuario();
    cancelarUsuario();

    Swal.fire({
        icon:"info",
        title:"Modificado",
        text:"Usuario actualizado correctamente"
    });
}

function eliminarUsuario(i) {
    usuarios.splice(i, 1);
    cargarCatUsuario();

    Swal.fire({
        icon:"error",
        title:"Eliminado",
        text:"Usuario eliminado correctamente"
    });
}

function cancelarUsuario() {
    document.querySelectorAll("input, select").forEach(e => e.value = "");
}
