import { Persona } from './persona.model';

export class Estudiante extends Persona {

    private _codigoEstudiante: string;
    private _notaFinal: string;


    constructor(
        Nombres: string,
        Apellidos: string,
        Edad: number,
        codigoEstudiante: string,
        notaFinal: string
    ) {

        super(Nombres, Apellidos, Edad);

        this._codigoEstudiante = codigoEstudiante
        this._notaFinal = notaFinal

    }




    //SET AND GETTERS
    public get getNotaFinal(): string {
        return this._notaFinal;
    }
    public set setNotaFinal(v: string) {
        this._notaFinal = v;
    }

    public get getCodigoEstudiante(): string {
        return this._codigoEstudiante;
    }
    public set setCodigoEstudiante(v: string) {
        this._codigoEstudiante = v;
    }


    public mostrarDatos(): void {
        console.log(`Nombre : ${this.Nombres}`);
        console.log(`Apellidos : ${this.Apellidos}`);
        console.log(`Edad : ${this.Edad}`);
    }



}