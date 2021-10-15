import { Curso } from "./curso.model";
import { Usuario } from "./usuario.model";

export class Alumno extends Usuario {


    private _curso: Curso;

    constructor(Nombres: string, Cedula: string, curso: Curso) {
        super(Nombres, Cedula);
        this._curso = curso
    }

    public get getCurso(): Curso {
        return this._curso;
    }
    
    public set setCurso(v: Curso) {
        this._curso = v;
    }

    public toString():string {
        return super.toString() + '-' + this._curso.toString()
    }


    mostrarCuso(): void {
        console.log(`El curso del estudiante es : ${this._curso.getNombre}`);

    }


}