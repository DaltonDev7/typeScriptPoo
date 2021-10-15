"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
var persona_model_1 = require("./persona.model");
var Estudiante = /** @class */ (function (_super) {
    __extends(Estudiante, _super);
    function Estudiante(Nombres, Apellidos, Edad, codigoEstudiante, notaFinal) {
        var _this = _super.call(this, Nombres, Apellidos, Edad) || this;
        _this._codigoEstudiante = codigoEstudiante;
        _this._notaFinal = notaFinal;
        return _this;
    }
    Object.defineProperty(Estudiante.prototype, "getNotaFinal", {
        //SET AND GETTERS
        get: function () {
            return this._notaFinal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Estudiante.prototype, "setNotaFinal", {
        set: function (v) {
            this._notaFinal = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Estudiante.prototype, "getCodigoEstudiante", {
        get: function () {
            return this._codigoEstudiante;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Estudiante.prototype, "setCodigoEstudiante", {
        set: function (v) {
            this._codigoEstudiante = v;
        },
        enumerable: false,
        configurable: true
    });
    Estudiante.prototype.mostrarDatos = function () {
        console.log("Nombre : " + this.Nombres);
        console.log("Apellidos : " + this.Apellidos);
        console.log("Edad : " + this.Edad);
    };
    return Estudiante;
}(persona_model_1.Persona));
exports.Estudiante = Estudiante;
