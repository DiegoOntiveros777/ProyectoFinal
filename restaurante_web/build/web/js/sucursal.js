//CODIGO JAVASCRIPT POR ANGEL HERNANDEZ Y SU EQUIPO

//   LISTA GLOBAL DE SUCURSALES
let sucursales = [
    {
        idSucursal: 1,
        nombre: "Centro",
        latitud: 21.120813,
        longitud: -101.680044,
        foto: "img/id1.png",
        urlWeb: "https://maps.app.goo.gl/pyFPrVMwzzYyaZtf8",
        horario: "Lunes a Domingo 8:00 a 13:00",
        calle: "Gante",
        numCalle: "114",
        colonia: "Centro",
        ciudad: { idCiudad: 1, nombre: "León" },
        estado: { idEstado: 1, nombre: "Guanajuato" },
        activo: 1
    },

    {
        idSucursal: 2,
        nombre: "Surtidora Departamental | León",
        latitud: 21.121880,
        longitud: -101.680250,
        foto: "img/id2.png",
        urlWeb: "",
        horario: "Lunes a Domingo 10:00am a 20:00pm",
        calle: "Gante",
        numCalle: "223A",
        colonia: "Centro",
        ciudad: { idCiudad: 1, nombre: "León" },
        estado: { idEstado: 1, nombre: "Guanajuato" },
        activo: 1
    },

    {
        idSucursal: 3,
        nombre: "Coppel Plaza Principal",
        latitud: 21.121880,
        longitud: -101.680250,
        foto: "img/id3.png",
        urlWeb: "https://www.coppel.com/",
        horario: "Lunes a Domingo 10:00am a 20:00pm",
        calle: "Gante",
        numCalle: "223A",
        colonia: "Centro",
        ciudad: { idCiudad: 1, nombre: "León" },
        estado: { idEstado: 1, nombre: "Guanajuato" },
        activo: 1
    },

    {
        idSucursal: 4,
        nombre: "Plaza Mayor",
        latitud: 21.157883,
        longitud: -101.695247,
        foto: "img/id4.png",
        urlWeb: "https://www.plazamayor.com.mx/",
        horario: "Lunes a Domingo 11:00am a 21:00pm",
        calle: "Blvd. Juan Alonso de Torres",
        numCalle: "2002",
        colonia: "Valle del Campestre",
        ciudad: { idCiudad: 1, nombre: "León" },
        estado: { idEstado: 1, nombre: "Guanajuato" },
        activo: 1
    }
];


//   CARGAR HTML DEL MÓDULO
function cargacursal() {
    fetch("html/Sucursal.html")
        .then(function(res) { return res.text(); })
        .then(function(html) {
            document.getElementById("contenido").innerHTML = html;
            cargarCatSucursal();
        });
}


//   LLENAR TABLA
function cargarCatSucursal() {
    let cotenidoTabla = "";
    
    for (let i = 0; i < sucursales.length; i++) {
        let s = sucursales[i];

        cotenidoTabla += "<tr>";
        cotenidoTabla += "<td>" + s.idSucursal + "</td>";
        cotenidoTabla += "<td>" + s.nombre + "</td>";
        cotenidoTabla += "<td>" + s.latitud + "</td>";
        cotenidoTabla += "<td>" + s.longitud + "</td>";
        cotenidoTabla += "<td><img src='" + s.foto + "' class='img-thumbnail' style='width:60px; height:60px; object-fit:cover;'></td>";
        cotenidoTabla += "<td>" + s.urlWeb + "</td>";
        cotenidoTabla += "<td>" + s.horario + "</td>";
        cotenidoTabla += "<td>" + s.calle + "</td>";
        cotenidoTabla += "<td>" + s.numCalle + "</td>";
        cotenidoTabla += "<td>" + s.colonia + "</td>";
        cotenidoTabla += "<td>" + s.ciudad.nombre + "</td>";
        cotenidoTabla += "<td>" + s.estado.nombre + "</td>";
        cotenidoTabla += "<td>" + s.activo + "</td>";

        cotenidoTabla += "<td><button class='btn btn-info btn-sm' onclick='seleccionarSucursal(" + i + ")'><i class='bi bi-check-circle'></i></button></td>";
        cotenidoTabla += "<td><button class='btn btn-danger btn-sm' onclick='eliminarSuc(" + i + ")'><i class='bi bi-trash'></i></button></td>";

        cotenidoTabla += "</tr>";
    }

    document.getElementById("tbsucursal").innerHTML = cotenidoTabla;
}


//   SELECCIONAR SUCURSAL
function seleccionarSucursal(i) {
    let s = sucursales[i];

    document.getElementById("txtIdSuc").value = s.idSucursal;
    document.getElementById("txtNombreSuc").value = s.nombre;
    document.getElementById("txtLatitudSuc").value = s.latitud;
    document.getElementById("txtLongitudSuc").value = s.longitud;
    document.getElementById("txtRutaFotoSuc").value = "";
    document.getElementById("txtURLSuc").value = s.urlWeb;
    document.getElementById("txtHorariosSuc").value = s.horario;
    document.getElementById("txtCalleSuc").value = s.calle;
    document.getElementById("txtNumeroSuc").value = s.numCalle;
    document.getElementById("txtColoniaSuc").value = s.colonia;
    document.getElementById("txtEstadoSuc").value = s.estado.nombre;
    document.getElementById("txtCiudadSuc").value = s.ciudad.nombre;
    document.getElementById("txtActivoSuc").value = s.activo;
}


//   INSERTAR NUEVA SUCURSAL
function almacenarSuc() {
    let ultimo = sucursales[sucursales.length - 1].idSucursal;
    let nuevoID = ultimo + 1;

    let nueva = {
        idSucursal: nuevoID,
        nombre: document.getElementById("txtNombreSuc").value,
        latitud: document.getElementById("txtLatitudSuc").value,
        longitud: document.getElementById("txtLongitudSuc").value,
        foto: document.getElementById("txtRutaFotoSuc").value,
        urlWeb: document.getElementById("txtURLSuc").value,
        horario: document.getElementById("txtHorariosSuc").value,
        calle: document.getElementById("txtCalleSuc").value,
        numCalle: document.getElementById("txtNumeroSuc").value,
        colonia: document.getElementById("txtColoniaSuc").value,
        ciudad: { nombre: document.getElementById("txtCiudadSuc").value },
        estado: { nombre: document.getElementById("txtEstadoSuc").value },
        activo: document.getElementById("txtActivoSuc").value
    };

    sucursales.push(nueva);
    cargarCatSucursal();
    cancelarSuc();

    Swal.fire({
        icon: "success",
        title: "Agregado",
        text: "Sucursal agregada correctamente"
    });
}


//   MODIFICAR SUCURSAL
function modificarSuc() {
    let id = document.getElementById("txtIdSuc").value;

    let pos = sucursales.findIndex(function(s) {
        return s.idSucursal == id;
    });

    if (pos === -1) return;

    sucursales[pos] = {
        idSucursal: id,
        nombre: document.getElementById("txtNombreSuc").value,
        latitud: document.getElementById("txtLatitudSuc").value,
        longitud: document.getElementById("txtLongitudSuc").value,
        foto: document.getElementById("txtRutaFotoSuc").value,
        urlWeb: document.getElementById("txtURLSuc").value,
        horario: document.getElementById("txtHorariosSuc").value,
        calle: document.getElementById("txtCalleSuc").value,
        numCalle: document.getElementById("txtNumeroSuc").value,
        colonia: document.getElementById("txtColoniaSuc").value,
        ciudad: { nombre: document.getElementById("txtCiudadSuc").value },
        estado: { nombre: document.getElementById("txtEstadoSuc").value },
        activo: document.getElementById("txtActivoSuc").value
    };

    cargarCatSucursal();
    cancelarSuc();

    Swal.fire({
        icon: "info",
        title: "Modificado",
        text: "Sucursal actualizada correctamente"
    });
}


//   ELIMINAR SUCURSAL
function eliminarSuc(i) {
    sucursales.splice(i, 1);
    cargarCatSucursal();

    Swal.fire({
        icon: "error",
        title: "Eliminada",
        text: "Sucursal eliminada correctamente"
    });
}


//   LIMPIAR FORMULARIO
function cancelarSuc() {
    let campos = document.querySelectorAll("input, select");
    for (let i = 0; i < campos.length; i++) {
        campos[i].value = "";
    }
}