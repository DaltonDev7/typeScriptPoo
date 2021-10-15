"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(Nombres, Apellidos, Edad) {
        this.Nombres = Nombres;
        this.Apellidos = Apellidos;
        this.Edad = Edad;
    }
    Object.defineProperty(Persona.prototype, "Nombres", {
        get: function () {
            return this._Nombres;
        },
        set: function (value) {
            this._Nombres = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Apellidos", {
        get: function () {
            return this._Apellidos;
        },
        set: function (value) {
            this._Apellidos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Edad", {
        get: function () {
            return this._Edad;
        },
        set: function (value) {
            this._Edad = value;
        },
        enumerable: false,
        configurable: true
    });
    return Persona;
}());
exports.Persona = Persona;
