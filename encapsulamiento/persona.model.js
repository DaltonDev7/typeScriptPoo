"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(Nombres, Correo) {
        this.Nombres = Nombres;
        this.Correo = Correo;
    }
    Object.defineProperty(Persona.prototype, "getEdad", {
        get: function () {
            return this.Edad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setEdad", {
        set: function (valor) {
            this.Edad = valor;
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.getPresentacion = function () {
        return "Hola, mi nombre es : " + this.Nombres + ", y mi correo es : " + this.Correo;
    };
    return Persona;
}());
exports.Persona = Persona;
