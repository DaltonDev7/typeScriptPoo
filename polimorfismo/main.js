"use strict";
//POLIMORFISMO : CLASES DISTINTAS QUE COMPARTEN MISMOS METODOS Y PROPIEDADES PUEDAN COMPORTARSE
// DE MANERA INDIFERENTE
Object.defineProperty(exports, "__esModule", { value: true });
var curso_model_1 = require("./curso.model");
var alumno_model_1 = require("./alumno.model");
var usuario_model_1 = require("./usuario.model");
// POLI = MUCHOS.
// MORFISMO = FORMA
var curso = new curso_model_1.Curso('PRIMERO 3A');
var persona1 = new usuario_model_1.Usuario('Dalton', '402500-12165156');
var alumno1 = new alumno_model_1.Alumno('Dalton', '4021231813', curso);
alumno1.mostrarCuso();
console.log('segundo console ' + alumno1.toString());
console.log(persona1.toString());
