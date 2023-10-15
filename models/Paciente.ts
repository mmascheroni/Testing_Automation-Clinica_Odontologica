import { Domicilio } from './Domicilio';


export class Paciente {

    private id : bigint;

    private nombre : string;

    private apellido : string;

    private dni : string;

    private fechaIngreso : Date;

    private domicilio : Domicilio;

    public constructor( nombre : string, apellido : string, dni : string, fechaIngreso : Date, domicilio : Domicilio ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.fechaIngreso = fechaIngreso;
        this.domicilio = domicilio;
    }

    // Getters
    public getId() {
        return this.id;
    }

    public getNombre() {
        return this.nombre;
    }

    public getApellido() {
        return this.apellido;
    }

    public getDni() {
        return this.dni;
    }

    public getFechaIngreso() {
        return this.fechaIngreso;
    }

    public getDomicilio() {
        return this.domicilio;
    }

    // Setters
    public setNombre( nombre : string ) {
        this.nombre = nombre;
    }

    public setApellido( apellido : string ) {
        this.apellido = apellido;
    }

    public setDni( dni : string ) {
        this.dni = dni;
    }

    public setFechaIngreso( fechaIngreso : Date ) {
        this.fechaIngreso = fechaIngreso;
    }

    public setDomicilio( domicilio : Domicilio ) {
        this.domicilio = domicilio;
    }

}