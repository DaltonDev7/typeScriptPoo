import { Usuario } from './usuario.model';


export class Profesor extends Usuario {

    private _telefonoPostal: string;


    constructor(
        Nombres: string,
        Cedula: string,
        _telefonoPostal: string
    ) {

        super(Nombres, Cedula);
        this._telefonoPostal = _telefonoPostal
        
    }



    public get geTelefonoPostal(): string {
        return this._telefonoPostal;
    }
    public set setTelefonoPostal(v: string) {
        this._telefonoPostal = v;
    }



}