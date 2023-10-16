import { Role } from "./Role"

export class Usuario {

    private id:number;

    private nombre:string;

    private username:string;

    private email:string;

    private password:string;

    private role:Role;

    public constructor( nombre : string, username : string, email : string, password : string, role : Role ) {
        this.nombre = nombre;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    // Getters

    public getId() {
        return this.id;
    }

    public getNombre() {
        return this.nombre;
    }

    public getUsername() {
        return this.username;
    }

    public getEmail() {
        return this.email;
    }

    public getPassword() {
        return this.password;
    }

    public getRole() {
        return this.role;
    }


    // Setters
    public setNombre( nombre : string ) {
        this.nombre = nombre;
    }

    public setUsername( username : string ) {
        this.username = username;
    }

    public setEmail( email : string ) {
        this.email = email;
    }

    public setPassword( password : string ) {
        this.password = password
    }

    public setRole( role : Role ) {
        this.role = role;
    }
}