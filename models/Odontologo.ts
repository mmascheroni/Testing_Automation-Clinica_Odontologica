export class Odontologo {

    private id : number;

    private nombre : string;

    private apellido : string;

    private matricula : string;

    public constructor( nombre : string, apellido : string, matricula : string ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.matricula = matricula;
    }

    // Getters
    public getNombre() {
        return this.nombre;
    }

    public getApellido() {
        return this.apellido;
    }

    public getMatricula() {
        return this.matricula;
    }

    // Setters
    public setNombre( nombre : string ) {
        this.nombre = nombre;
    }

    public setApellido( apellido : string ) {
        this.apellido = apellido;
    }

    public setMatricula( matricula : string ) {
        this.matricula = matricula;
    }
}