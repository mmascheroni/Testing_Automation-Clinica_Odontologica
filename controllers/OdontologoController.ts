import { APIRequestContext, APIResponse, Page } from '@playwright/test';
import { Odontologo } from '../models/Odontologo';

const credenciales = 'admin@clinica.com:admin';
const base64Credentials = Buffer.from(credenciales).toString('base64');

export class OdontologoController {
    page : Page

    public constructor( page : Page ) {
        this.page = page;
    }

    
    async getOdontologos( request : APIRequestContext )
    {
        

        let odontologos = await request.get('http://localhost:8082/odontologos', {
            headers: {
                'Authorization': `Basic ${base64Credentials}`,
                'Content-Type': 'application/json'
            }
        });

        return odontologos;
    }


    async getOdontologo( request : APIRequestContext, odontologoId : number )
    {
        

        let odontologo = await request.get(`http://localhost:8082/odonotologos/${odontologoId}`, {
            headers: {
                'Authorization': `Basic ${base64Credentials}`,
                'Content-Type': 'application/json'
            }
        });

        return odontologo;
    }


    async postOdontologo( request : APIRequestContext, odontologo : Odontologo )
    {
        

        let odontologoRes = await request.post(`http://localhost:8082/odontologos/registrar`, {
            headers: {
                'Authorization': `Basic ${base64Credentials}`,
                'Content-Type': 'application/json'
            },
            data: {
                "nombre": odontologo.getNombre(),
                "apellido": odontologo.getApellido(),
                "matriucla": odontologo.getMatricula(),
            }
        });

        return odontologoRes;
    }

    async putOdontologo( request : APIRequestContext, odontologo : Odontologo )
    {
        let odontologoRes = await request.put(`http://localhost:8082/odontologos/registrar`, {
            headers: {
                'Authorization': `Basic ${base64Credentials}`,
                'Content-Type': 'application/json'
            },
            data: {
                "nombre": odontologo.getNombre(),
                "apellido": odontologo.getApellido(),
                "matriucla": odontologo.getMatricula(),
            }
        });

        return odontologoRes;
    }
    
    async deleteOdontologo( request : APIRequestContext, odontologoId : number )
    {
        

        let odontologo = await request.delete(`http://localhost:8082/odontologos/eliminar/${odontologoId}`, {
            headers: {
                'Authorization': `Basic ${base64Credentials}`,
                'Content-Type': 'application/json'
            }
        });

        return odontologo;
    }


    async getOdontologosPorCriterio( request : APIRequestContext, criterio : string )
    {
        

        let odontologos = await request.get(`http://localhost:8082/odontologos/odontologo?criterio=${criterio}`, {
            headers: {
                'Authorization': `Basic ${base64Credentials}`,
                'Content-Type': 'application/json'
            }
        });

        return odontologos;
    }

}