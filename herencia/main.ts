import { Estudiante } from './estudiante.model';
//HERENCIA : ES UNA FORMA DE REUUTILIZACION DE SOFTWARE EN LA QUE SE CREA UNA NUEVA 
//CLASE AL ABSORBER LOS MIEMBROS DE UNA YA EXISTENTE.


var estudianteOne : Estudiante = new Estudiante('Dalton' , 'Tejada' , 22 , '#CD552' , '89')

console.log(estudianteOne.getCodigoEstudiante);


estudianteOne.mostrarDatos()
