import { test, expect } from '@playwright/test';
import { OdontologoController } from '../controllers/OdontologoController';
import { Odontologo } from '../models/Odontologo';

test('Request: Get Odontologos', async ({ page, request }) => {
    const userController = new OdontologoController(page);

    let res = await userController.getOdontologos(request);

    let odontologos = await res.json()

    console.log(odontologos);
});


test('Request: Get Odontologo con id igual 1', async ({ page, request }) => {
    const userController = new OdontologoController(page);

    let res = await userController.getOdontologo(request, 1);

    let odontologo = await res.json()

    console.log(odontologo);

    // const date : Date = new Date('2023-10-15T12:00:00')
    // console.log(date);
});


test('Request: Post Odontologo', async ({ page, request }) => {
    const userController = new OdontologoController(page);

    let odontologo = new Odontologo("Odontologo", "Prueba", "ODO001")

    let res = await userController.postOdontologo(request, odontologo);

    let odontologoRes = await res.json()

    console.log(odontologoRes);
});


test('Request: Get Odontologo con id igual 2', async ({ page, request }) => {
    const userController = new OdontologoController(page);

    let res = await userController.getOdontologo(request, 2);

    let odontologo = await res.json()

    console.log(odontologo);
});


