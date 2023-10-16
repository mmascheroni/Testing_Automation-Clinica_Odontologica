import { test, expect } from '@playwright/test';
import { TurnoController } from '../controllers/TurnoController';
import { Turno } from '../models/Turno';
import { Domicilio } from '../models/Domicilio';
import { Paciente } from '../models/Paciente';
import { Odontologo } from '../models/Odontologo';

test('Request: Get Turnos', async ({ page, request }) => {
    const userController = new TurnoController(page);

    let res = await userController.getTurnos(request);

    let turnos = await res.json()

    console.log(turnos);
});


test('Request: Get Turno con id igual 1', async ({ page, request }) => {
    const userController = new TurnoController(page);

    let res = await userController.getTurno(request, 1);

    let turno = await res.json()

    console.log(turno);

    // const date : Date = new Date('2023-10-15T12:00:00')
    // console.log(date);
});


test('Request: Post Turno', async ({ page, request }) => {
    const userController = new TurnoController(page);

    let paciente = new Paciente("Paciente", "Prueba", "12345678", "2023-10-31", new Domicilio("8 de Octubre", 2830, "La blanqueada"));

    let odontologo = new Odontologo("Odontologo", "Prueba", "ODO002");

    let turno = new Turno(paciente, odontologo, "2023-11-21 14:00");

    let res = await userController.postTurno(request, turno);

    let turnoRes = await res.json()

    console.log(turnoRes);
});


test('Request: Get Turno con id igual 2', async ({ page, request }) => {
    const userController = new TurnoController(page);

    let res = await userController.getTurno(request, 2);

    let turnos = await res.json()

    console.log(turnos);
});


