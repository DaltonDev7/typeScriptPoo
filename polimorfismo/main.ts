//POLIMORFISMO : CLASES DISTINTAS QUE COMPARTEN MISMOS METODOS Y PROPIEDADES PUEDAN COMPORTARSE
// DE MANERA INDIFERENTE

import { Curso } from "./curso.model";
import { Alumno } from "./alumno.model";
import { Usuario } from "./usuario.model";

// POLI = MUCHOS.
// MORFISMO = FORMA



let curso : Curso = new Curso('PRIMERO 3A')


let persona1 : Usuario = new Usuario('Dalton', '402500-12165156')
let alumno1 :  Alumno = new Alumno('Dalton' , '4021231813' , curso)

alumno1.mostrarCuso()
console.log('segundo console ' + alumno1.toString());


console.log(persona1.toString());

