import { APIRequestContext, APIResponse, Page } from '@playwright/test';

export class UserController {
    page : Page

    public constructor( page : Page ) {
        this.page = page;
    }

    


    async Auth( request : APIRequestContext )
    {
        const credenciales = 'admin@clinica.com:admin'
        const base64Credentials = Buffer.from(credenciales).toString('base64');
        
        let respuesta = await request.post('http://localhost:8082/pacientes', {
            headers: {
                'Authorization': `Basic ${base64Credentials}`,
                'Content-Type': 'application/json'
            }
        });

        return respuesta;
    }

}