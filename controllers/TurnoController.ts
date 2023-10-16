import { APIRequestContext, APIResponse, Page } from '@playwright/test';
import { Turno } from '../models/Turno';

const credenciales = 'admin@clinica.com:admin';
const base64Credentials = Buffer.from(credenciales).toString('base64');

export class TurnoController {
    page : Page

    public constructor( page : Page ) {
        this.page = page;
    }

    
    async getTurnos( request : APIRequestContext )
    {
        

        let turnos = await request.get('http://localhost:8082/turnos', {
            headers: {
                'Authorization': `Basic ${base64Credentials}`,
                'Content-Type': 'application/json'
            }
        });

        return turnos;
    }


    async getTurno( request : APIRequestContext, turnoId : number )
    {
        

        let turno = await request.get(`http://localhost:8082/turnos/${turnoId}`, {
            headers: {
                'Authorization': `Basic ${base64Credentials}`,
                'Content-Type': 'application/json'
            }
        });

        return turno;
    }


    async postTurno( request : APIRequestContext, turno : Turno )
    {
        

        let turnoRes = await request.post(`http://localhost:8082/turnos/registrar`, {
            headers: {
                'Authorization': `Basic ${base64Credentials}`,
                'Content-Type': 'application/json'
            },
            data: {
                "paciente": {
                    "id": turno.getPaciente().getId()
                },
                "odontologo": {
                    "id": turno.getOdontologo().getId()
                },
                "fechaYHora": turno.getFechaYHora()
            }
        });

        return turnoRes;
    }

    async putTurno( request : APIRequestContext, turno : Turno )
    {
        

        let turnoRes = await request.put(`http://localhost:8082/turnos/actualizar`, {
            headers: {
                'Authorization': `Basic ${base64Credentials}`,
                'Content-Type': 'application/json'
            },
            data: {
                "id": turno.getId(),
                "paciente": {
                    "id": turno.getPaciente().getId()
                },
                "odontologo": {
                    "id": turno.getOdontologo().getId()
                },
                "fechaYHora": turno.getFechaYHora()
            }
        });

        return turnoRes;
    }
    
    async deleteTurno( request : APIRequestContext, turnoId : number )
    {
        

        let turno = await request.delete(`http://localhost:8082/turnos/eliminar/${turnoId}`, {
            headers: {
                'Authorization': `Basic ${base64Credentials}`,
                'Content-Type': 'application/json'
            }
        });

        return turno;
    }


    async getTurnosPorCriterio( request : APIRequestContext, criterio : string )
    {
        

        let turnos = await request.get(`http://localhost:8082/turnos/turno?criterio=${criterio}`, {
            headers: {
                'Authorization': `Basic ${base64Credentials}`,
                'Content-Type': 'application/json'
            }
        });

        return turnos;
    }

}