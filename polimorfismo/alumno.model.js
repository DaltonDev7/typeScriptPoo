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
exports.Alumno = void 0;
var usuario_model_1 = require("./usuario.model");
var Alumno = /** @class */ (function (_super) {
    __extends(Alumno, _super);
    function Alumno(Nombres, Cedula, curso) {
        var _this = _super.call(this, Nombres, Cedula) || this;
        _this._curso = curso;
        return _this;
    }
    Object.defineProperty(Alumno.prototype, "getCurso", {
        get: function () {
            return this._curso;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Alumno.prototype, "setCurso", {
        set: function (v) {
            this._curso = v;
        },
        enumerable: false,
        configurable: true
    });
    Alumno.prototype.toString = function () {
        return _super.prototype.toString.call(this) + '-' + this._curso.toString();
    };
    Alumno.prototype.mostrarCuso = function () {
        console.log("El curso del estudiante es : " + this._curso.getNombre);
    };
    return Alumno;
}(usuario_model_1.Usuario));
exports.Alumno = Alumno;
