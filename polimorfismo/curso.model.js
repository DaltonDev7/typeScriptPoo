"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curso = void 0;
var Curso = /** @class */ (function () {
    function Curso(Nombre) {
        this._Nombre = Nombre;
    }
    Object.defineProperty(Curso.prototype, "getNombre", {
        get: function () {
            return this._Nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Curso.prototype, "setNombre", {
        set: function (v) {
            this._Nombre = v;
        },
        enumerable: false,
        configurable: true
    });
    Curso.prototype.toString = function () {
        return this._Nombre;
    };
    return Curso;
}());
exports.Curso = Curso;
