export class Persona {
    protected _Nombres: string; // la clase protected la pueden utilizar la misma clase, y las hijas clases.
    private _Apellidos: string;
    private _Edad: number;


    constructor(Nombres: string, Apellidos: string, Edad: number) {
        this.Nombres = Nombres
        this.Apellidos = Apellidos
        this.Edad = Edad
    }


    public get Nombres(): string {
        return this._Nombres;
    }
    public set Nombres(value: string) {
        this._Nombres = value;
    }

    public get Apellidos(): string {
        return this._Apellidos;
    }

    public set Apellidos(value: string) {
        this._Apellidos = value;
    }

    public get Edad(): number {
        return this._Edad;
    }
    public set Edad(value: number) {
        this._Edad = value;
    }




}