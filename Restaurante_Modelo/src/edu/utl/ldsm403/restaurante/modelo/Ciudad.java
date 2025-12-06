/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package edu.utl.ldsm403.restaurante.modelo;


public class Ciudad {
    
   
    private int idCiudad;
    private String nombre;
    private Estado estado;

    public Ciudad(int idCiudad, String nombre, Estado estado) {
        this.idCiudad = idCiudad;
        this.nombre = nombre;
        this.estado = estado;
    }

    public int getIdCiudad() {
        return idCiudad;
    }

    public void setIdCiudad(int idCiudad) {
        this.idCiudad = idCiudad;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Estado getEstado() {
        return estado;
    }

    public void setEstado(Estado estado) {
        this.estado = estado;
    }

    @Override
    public String toString() {
        return "ciudad{" + "idCiudad=" + idCiudad + ", nombre=" + nombre + ", estado=" + estado + '}';
    }
    
   
    

}
