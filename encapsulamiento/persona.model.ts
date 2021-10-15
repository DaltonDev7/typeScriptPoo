export class Persona {

    public Nombres: string;
    public Apellidos: string;
    public Correo: string;
    private Edad: number;

    constructor(
        Nombres: string,
        Correo: string,

    ) {
        this.Nombres = Nombres
        this.Correo = Correo
    }

    public get getEdad(): number {
        return this.Edad;
    }


    public set setEdad(valor: number) {
        this.Edad = valor;
    }

    public getPresentacion(): string {
        return `Hola, mi nombre es : ${this.Nombres}, y mi correo es : ${this.Correo}`
    }

}