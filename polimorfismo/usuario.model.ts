export class Usuario {


    private _Nombre: string;
    private _Cedula: string;




    constructor(Nombre: string, Cedula: string) {
        this._Nombre = Nombre
        this._Cedula = Cedula
    }


    public get getCedula(): string {
        return this._Cedula;
    }
    public set setCedula(v: string) {
        this._Cedula = v;
    }
    public get getNombre(): string {
        return this._Nombre;
    }
    public set setNombre(v: string) {
        this._Nombre = v;
    }



    public toString():string {
        return `${this._Nombre} - ${this._Cedula}`
    }



}