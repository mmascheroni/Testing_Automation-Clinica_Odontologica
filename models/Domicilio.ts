export class Domicilio {
    private id : bigint;

    private calle : string;

    private numero : number;

    private localidad : string;

    public constructor( calle : string, numero : number, localidad : string ) {
        this.calle = calle;
        this.numero = numero;
        this.localidad = localidad;
    }


    // Getters 
    public getId() {
        return this.id;
    }

    public getCalle() {
        return this.calle;
    }

    public getNumero() {
        return this.numero;
    }

    public getLocalidad() {
        return this.localidad;
    }

    // Setters
    public setCalle( calle : string ) {
        this.calle = calle;
    }

    public setNumero( numero : number ) {
        this.numero = numero;
    }

    public setLocalidad( localidad : string ) {
        this.localidad = localidad;
    }
}