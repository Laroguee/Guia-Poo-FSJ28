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
// Clase abstracta Persona (versión compatible)
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, direccion, telefono, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }
    // Método para verificar mayoría de edad
    Persona.prototype.verificarMayoriaEdad = function () {
        return this.edad >= 18
            ? "".concat(this.nombre, " es mayor de edad (").concat(this.edad, " a\u00F1os)")
            : "".concat(this.nombre, " es menor de edad (").concat(this.edad, " a\u00F1os)");
    };
    return Persona;
}());
// Clase Empleado que hereda de Persona
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, apellido, direccion, telefono, edad, sueldo) {
        if (sueldo === void 0) { sueldo = 0; }
        var _this = _super.call(this, nombre, apellido, direccion, telefono, edad) || this;
        _this.sueldo = sueldo;
        return _this;
    }
    // Método para cargar sueldo
    Empleado.prototype.cargarSueldo = function (monto) {
        if (monto > 0) {
            this.sueldo = monto;
            alert("Sueldo actualizado a $".concat(this.sueldo));
        }
        else {
            alert("El sueldo debe ser positivo");
        }
    };
    // Método para mostrar sueldo
    Empleado.prototype.imprimirSueldo = function () {
        return "Sueldo: $".concat(this.sueldo.toFixed(2));
    };
    // Implementación del método abstracto
    Empleado.prototype.mostrarDatos = function () {
        return "EMPLEADO:\nNombre: ".concat(this.nombre, " ").concat(this.apellido, "\nDirecci\u00F3n: ").concat(this.direccion, "\nTel\u00E9fono: ").concat(this.telefono, "\nEdad: ").concat(this.edad, " a\u00F1os\n").concat(this.imprimirSueldo(), "\n").concat(this.verificarMayoriaEdad());
    };
    return Empleado;
}(Persona));
// Función para crear empleado con prompts
function crearEmpleadoInteractivo() {
    // Solicitar datos básicos
    var nombre = prompt("Ingrese nombre del empleado:") || "Sin nombre";
    var apellido = prompt("Ingrese apellido del empleado:") || "Sin apellido";
    var direccion = prompt("Ingrese dirección:") || "Sin dirección";
    var telefono = prompt("Ingrese teléfono:") || "Sin teléfono";
    // Validar edad
    var edad = 0;
    while (edad <= 0) {
        var edadInput = parseInt(prompt("Ingrese edad:") || "0");
        if (!isNaN(edadInput) && edadInput > 0) {
            edad = edadInput;
        }
        else {
            alert("Edad debe ser un número positivo");
        }
    }
    // Validar sueldo
    var sueldo = 0;
    while (sueldo <= 0) {
        var sueldoInput = parseFloat(prompt("Ingrese sueldo inicial:") || "0");
        if (!isNaN(sueldoInput)) {
            if (sueldoInput > 0) {
                sueldo = sueldoInput;
            }
            else {
                alert("El sueldo debe ser mayor a 0");
            }
        }
    }
    // Crear instancia
    var empleado = new Empleado(nombre, apellido, direccion, telefono, edad, sueldo);
    // Mostrar datos
    alert(empleado.mostrarDatos());
    // Opción para modificar sueldo
    if (confirm("¿Desea modificar el sueldo?")) {
        var nuevoSueldo = 0;
        while (nuevoSueldo <= 0) {
            var sueldoInput = parseFloat(prompt("Ingrese nuevo sueldo:") || "0");
            if (!isNaN(sueldoInput) && sueldoInput > 0) {
                nuevoSueldo = sueldoInput;
            }
        }
        empleado.cargarSueldo(nuevoSueldo);
        alert(empleado.mostrarDatos());
    }
    console.log("Datos finales del empleado:", empleado);
}
// Ejecutar aplicación
crearEmpleadoInteractivo();
