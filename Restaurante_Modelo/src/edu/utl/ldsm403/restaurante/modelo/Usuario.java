package edu.utl.ldsm403.restaurante.modelo;

public class Usuario {

    private int idUsuario;
    private String nombre;
    private String apellidoP;
    private String apellidoM;
    private String telefono;
    private String correo;
    private String usuario;
    private String contrasena;
    private Rol rol;
    private int activo;

    public Usuario() {
    }

    public Usuario(int idUsuario, String nombre, String apellidoP, String apellidoM,
                   String telefono, String correo, String usuario, String contrasena,
                   Rol rol, int activo) {

        this.idUsuario = idUsuario;
        this.nombre = nombre;
        this.apellidoP = apellidoP;
        this.apellidoM = apellidoM;
        this.telefono = telefono;
        this.correo = correo;
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.rol = rol;
        this.activo = activo;
    }

    public int getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(int idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidoP() {
        return apellidoP;
    }

    public void setApellidoP(String apellidoP) {
        this.apellidoP = apellidoP;
    }

    public String getApellidoM() {
        return apellidoM;
    }

    public void setApellidoM(String apellidoM) {
        this.apellidoM = apellidoM;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    public Rol getRol() {
        return rol;
    }

    public void setRol(Rol rol) {
        this.rol = rol;
    }

    public int getActivo() {
        return activo;
    }

    public void setActivo(int activo) {
        this.activo = activo;
    }

    @Override
    public String toString() {
        return "Usuario{" + "idUsuario=" + idUsuario + ", nombre=" + nombre +
               ", apellidoP=" + apellidoP + ", apellidoM=" + apellidoM +
               ", telefono=" + telefono + ", correo=" + correo +
               ", usuario=" + usuario + ", rol=" + rol +
               ", activo=" + activo + '}';
    }

}
