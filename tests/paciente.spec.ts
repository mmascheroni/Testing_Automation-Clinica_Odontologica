import { test, expect } from '@playwright/test';
import { PacienteController } from '../controllers/PacienteController';
import { Paciente } from '../models/Paciente';
import { Domicilio } from '../models/Domicilio';

test('Request: Get Pacientes', async ({ page, request }) => {
  const userController = new PacienteController(page);

  let res = await userController.getPacientes(request);

  let pacientes = await res.json()

  console.log(pacientes);
});


test('Request: Get Paciente con id igual 1', async ({ page, request }) => {
  const userController = new PacienteController(page);

  let res = await userController.getPaciente(request, 1);

  let pacientes = await res.json()

  console.log(pacientes);

  // const date : Date = new Date('2023-10-15T12:00:00')
  // console.log(date);
});


test('Request: Post Paciente', async ({ page, request }) => {
  const userController = new PacienteController(page);

  let paciente = new Paciente("Mauro", "Automation", "48250443", '2023-12-10', new Domicilio("8 de Octubre", 2830, "Montevideo"))

  let res = await userController.postPaciente(request, paciente);

  let pacientes = await res.json()

  console.log(pacientes);
});


test('Request: Get Paciente con id igual 2', async ({ page, request }) => {
  const userController = new PacienteController(page);

  let res = await userController.getPaciente(request, 2);

  let pacientes = await res.json()

  console.log(pacientes);
});


