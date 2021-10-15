import { Persona } from "./persona.model";


let persona1: Persona = new Persona('Dalton', 'daltontejada@gmail.com')


persona1.setEdad = 22

console.log(persona1);
console.log(persona1.getEdad);
console.log(persona1.getPresentacion());


