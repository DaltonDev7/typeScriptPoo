"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario(Nombre, Cedula) {
        this._Nombre = Nombre;
        this._Cedula = Cedula;
    }
    Object.defineProperty(Usuario.prototype, "getCedula", {
        get: function () {
            return this._Cedula;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "setCedula", {
        set: function (v) {
            this._Cedula = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "getNombre", {
        get: function () {
            return this._Nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "setNombre", {
        set: function (v) {
            this._Nombre = v;
        },
        enumerable: false,
        configurable: true
    });
    Usuario.prototype.toString = function () {
        return this._Nombre + " - " + this._Cedula;
    };
    return Usuario;
}());
exports.Usuario = Usuario;
