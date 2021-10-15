"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var persona_model_1 = require("./persona.model");
var persona1 = new persona_model_1.Persona('Dalton', 'daltontejada@gmail.com');
persona1.setEdad = 22;
console.log(persona1);
console.log(persona1.getEdad);
console.log(persona1.getPresentacion());
