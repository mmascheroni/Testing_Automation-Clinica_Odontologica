import { Paciente } from './Paciente';
import { Odontologo } from './Odontologo';
export class Turno {
    private id : bigint;

    private paciente : Paciente;

    private odontologo : Odontologo;

    private fechaYHora: Date;

    public constructor( paciente : Paciente, odontologo : Odontologo, fechaYHora : Date ) {
        this.paciente = paciente;
        this.odontologo = odontologo;
        this.fechaYHora = fechaYHora;
    }

    // Getters
    public getId() {
        return this.id;
    }

    public getPaciente() {
        return this.paciente;
    }

    public getOdontologo() {
        return this.odontologo;
    }

    public getFechaYHora() {
        return this.fechaYHora;
    }

    // Setters

    public setPaciente( paciente : Paciente ) {
        this.paciente = paciente;
    }

    public setOdontologo( odontologo : Odontologo ) {
        this.odontologo = odontologo;
    }

    public setFechaYHora( fechaYHora : Date ) {
        this.fechaYHora = fechaYHora;
    }
}