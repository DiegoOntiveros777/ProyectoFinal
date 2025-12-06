
package edu.utl.ldsm403.restaurante.modelo;

public class Estado{
    private int idEstado;
    private String nombre;

    public Estado(){

    }

    public Estado(int idEstado,String nombre)
    {
        this.idEstado = idEstado;
        this.nombre = nombre;
    }

    public void setIdEstado(int idEstado){
        this.idEstado = idEstado;
    }

    public int getIdEstado(){
        return this.idEstado;
    }

    public void setNombre(String nombre){
        this.nombre = nombre;
    }

    public String getNombre(){
        return this.nombre;
    }

    @Override
    public String toString() {
        return "Estado{" + "idEstado=" + idEstado + ", nombre=" + nombre + '}';
    }

    
}
