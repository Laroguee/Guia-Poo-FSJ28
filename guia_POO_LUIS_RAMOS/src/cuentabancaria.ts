class Cuenta {
    private nombre: string;
    private cantidad: number;
    private tipoCuenta: string;
    private numeroCuenta: string;

    constructor() {
        this.nombre = "";
        this.cantidad = 0;
        this.tipoCuenta = "";
        this.numeroCuenta = "";
        this.inicializarCuenta();
    }

    private inicializarCuenta(): void {
        this.nombre = prompt("Ingrese su nombre completo:") || "Cliente no identificado";
        
        let saldoValido = false;
        while (!saldoValido) {
            const saldoInicial = parseFloat(prompt("Ingrese saldo inicial (mínimo $5.00):") || "0");
            if (saldoInicial >= 5) {
                this.cantidad = saldoInicial;
                saldoValido = true;
            } else {
                alert("El saldo inicial debe ser mínimo $5.00");
            }
        }

        this.tipoCuenta = prompt("Ingrese tipo de cuenta (Ahorros/Corriente):") || "Ahorros";
        this.numeroCuenta = prompt("Ingrese número de cuenta:") || "0000000000";
    }

    public depositar(): void {
        const monto = parseFloat(prompt("Ingrese monto a depositar:") || "0");
        if (monto < 5) {
            alert("El depósito mínimo es $5.00");
        } else {
            this.cantidad += monto;
            alert(`Depósito exitoso. Nuevo saldo: $${this.cantidad.toFixed(2)}`);
        }
    }

    public retirar(): void {
        const monto = parseFloat(prompt("Ingrese monto a retirar:") || "0");
        if (monto < 5) {
            alert("El retiro mínimo es $5.00");
        } else if (monto > this.cantidad) {
            alert("Fondos insuficientes");
        } else {
            this.cantidad -= monto;
            alert(`Retiro exitoso. Saldo restante: $${this.cantidad.toFixed(2)}`);
        }
    }

    public mostrarDatos(): void {
        const info = `Titular: ${this.nombre}\n` +
                    `Tipo: ${this.tipoCuenta}\n` +
                    `N° Cuenta: ${this.numeroCuenta}\n` +
                    `Saldo: $${this.cantidad.toFixed(2)}`;
        alert(info);
    }

    public menu(): void {
        let opcion = "";
        while (opcion !== "4") {
            opcion = prompt(
                "MENU PRINCIPAL\n\n" +
                "1. Depositar dinero\n" +
                "2. Retirar dinero\n" +
                "3. Ver datos de cuenta\n" +
                "4. Salir\n\n" +
                "Seleccione una opción:"
            ) || "4";

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
    }
}

// Uso de la clase
const miCuenta = new Cuenta();
miCuenta.menu();