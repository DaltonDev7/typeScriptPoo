export class Curso {

    private _Nombre: string;


    constructor(Nombre: string) {
        this._Nombre = Nombre
    }


    public get getNombre(): string {
        return this._Nombre;
    }
    public set setNombre(v: string) {
        this._Nombre = v;
    }



    public toString():string {
        return this._Nombre
    }




}