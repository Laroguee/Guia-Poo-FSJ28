var Cuenta = /** @class */ (function () {
    function Cuenta() {
        this.nombre = "";
        this.cantidad = 0;
        this.tipoCuenta = "";
        this.numeroCuenta = "";
        this.inicializarCuenta();
    }
    Cuenta.prototype.inicializarCuenta = function () {
        this.nombre = prompt("Ingrese su nombre completo:") || "Cliente no identificado";
        var saldoValido = false;
        while (!saldoValido) {
            var saldoInicial = parseFloat(prompt("Ingrese saldo inicial (mínimo $5.00):") || "0");
            if (saldoInicial >= 5) {
                this.cantidad = saldoInicial;
                saldoValido = true;
            }
            else {
                alert("El saldo inicial debe ser mínimo $5.00");
            }
        }
        this.tipoCuenta = prompt("Ingrese tipo de cuenta (Ahorros/Corriente):") || "Ahorros";
        this.numeroCuenta = prompt("Ingrese número de cuenta:") || "0000000000";
    };
    Cuenta.prototype.depositar = function () {
        var monto = parseFloat(prompt("Ingrese monto a depositar:") || "0");
        if (monto < 5) {
            alert("El depósito mínimo es $5.00");
        }
        else {
            this.cantidad += monto;
            alert("Dep\u00F3sito exitoso. Nuevo saldo: $".concat(this.cantidad.toFixed(2)));
        }
    };
    Cuenta.prototype.retirar = function () {
        var monto = parseFloat(prompt("Ingrese monto a retirar:") || "0");
        if (monto < 5) {
            alert("El retiro mínimo es $5.00");
        }
        else if (monto > this.cantidad) {
            alert("Fondos insuficientes");
        }
        else {
            this.cantidad -= monto;
            alert("Retiro exitoso. Saldo restante: $".concat(this.cantidad.toFixed(2)));
        }
    };
    Cuenta.prototype.mostrarDatos = function () {
        var info = "Titular: ".concat(this.nombre, "\n") +
            "Tipo: ".concat(this.tipoCuenta, "\n") +
            "N\u00B0 Cuenta: ".concat(this.numeroCuenta, "\n") +
            "Saldo: $".concat(this.cantidad.toFixed(2));
        alert(info);
    };
    Cuenta.prototype.menu = function () {
        var opcion = "";
        while (opcion !== "4") {
            opcion = prompt("MENU PRINCIPAL\n\n" +
                "1. Depositar dinero\n" +
                "2. Retirar dinero\n" +
                "3. Ver datos de cuenta\n" +
                "4. Salir\n\n" +
                "Seleccione una opción:") || "4";
            switch (opcion) {
                case "1":
                    this.depositar();
                    break;
                case "2":
                    this.retirar();
                    break;
                case "3":
                    this.mostrarDatos();
                    break;
                case "4":
                    alert("Gracias por usar nuestro servicio");
                    break;
                default:
                    alert("Opción no válida");
            }
        }
    };
    return Cuenta;
}());
// Uso de la clase
var miCuenta = new Cuenta();
miCuenta.menu();
