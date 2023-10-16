import { APIRequestContext, APIResponse, Page } from '@playwright/test';
import { Paciente } from '../models/Paciente';

const credenciales = 'admin@clinica.com:admin';
const base64Credentials = Buffer.from(credenciales).toString('base64');

export class PacienteController {
    page : Page

    public constructor( page : Page ) {
        this.page = page;
    }

    
    async getPacientes( request : APIRequestContext )
    {
        

        let pacientes = await request.get('http://localhost:8082/pacientes', {
            headers: {
                'Authorization': `Basic ${base64Credentials}`,
                'Content-Type': 'application/json'
            }
        });

        return pacientes;
    }


    async getPaciente( request : APIRequestContext, pacienteId : number )
    {
        

        let paciente = await request.get(`http://localhost:8082/pacientes/${pacienteId}`, {
            headers: {
                'Authorization': `Basic ${base64Credentials}`,
                'Content-Type': 'application/json'
            }
        });

        return paciente;
    }


    async postPaciente( request : APIRequestContext, paciente : Paciente )
    {
        

        let pacienteRes = await request.post(`http://localhost:8082/pacientes/registrar`, {
            headers: {
                'Authorization': `Basic ${base64Credentials}`,
                'Content-Type': 'application/json'
            },
            data: {
                "nombre": paciente.getNombre(),
                "apellido": paciente.getApellido(),
                "dni": paciente.getDni(),
                "fechaIngreso": paciente.getFechaIngreso(),
                "domicilio": {
                    "calle": paciente.getDomicilio().getCalle(),
                    "numero": paciente.getDomicilio().getNumero,
                    "localidad": paciente.getDomicilio().getLocalidad(),
                }
            }
        });

        return pacienteRes;
    }

    async putPaciente( request : APIRequestContext, paciente : Paciente )
    {
        

        let pacienteRes = await request.put(`http://localhost:8082/pacientes/actualizar`, {
            headers: {
                'Authorization': `Basic ${base64Credentials}`,
                'Content-Type': 'application/json'
            },
            data: {
                "nombre": paciente.getNombre(),
                "apellido": paciente.getApellido(),
                "dni": paciente.getDni(),
                "fechaIngreso": paciente.getFechaIngreso(),
                "domicilio": {
                    "calle": paciente.getDomicilio().getCalle(),
                    "numero": paciente.getDomicilio().getNumero,
                    "localidad": paciente.getDomicilio().getLocalidad(),
                }
            }
        });

        return pacienteRes;
    }
    
    async deletePaciente( request : APIRequestContext, pacienteId : number )
    {
        

        let paciente = await request.delete(`http://localhost:8082/pacientes/eliminar/${pacienteId}`, {
            headers: {
                'Authorization': `Basic ${base64Credentials}`,
                'Content-Type': 'application/json'
            }
        });

        return paciente;
    }


    async getPacientesPorCriterio( request : APIRequestContext, criterio : string )
    {
        

        let pacientes = await request.get(`http://localhost:8082/pacientes/paciente?criterio=${criterio}`, {
            headers: {
                'Authorization': `Basic ${base64Credentials}`,
                'Content-Type': 'application/json'
            }
        });

        return pacientes;
    }

}