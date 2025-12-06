function validarAcceso() {
    let usuario = document.getElementById("txtUsuarioLog").value;
    let password = document.getElementById("txtContraLog").value;

    if (usuario === "admin" && password === "admin") {

        Swal.fire({
            icon: 'success',
            title: '¡Acceso concedido!',
            text: 'Bienvenido jefe 😎',
            confirmButtonText: 'Entrar',
            timer: 1800,
            timerProgressBar: true
        }).then(() => {
            window.location.replace("principal.html");
        });

    } else {

        Swal.fire({
            icon: 'error',
            title: 'Acceso denegado',
            text: 'Usuario o contraseña incorrectos',
            confirmButtonText: 'Reintentar'
        });

        document.getElementById("txtUsuarioLog").value = "";
        document.getElementById("txtContraLog").value = "";
    }
}
