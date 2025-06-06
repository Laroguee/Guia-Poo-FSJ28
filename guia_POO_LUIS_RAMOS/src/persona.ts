// Clase abstracta Persona (versión compatible)
abstract class Persona {
    protected nombre: string;
    protected apellido: string;
    protected direccion: string;
    protected telefono: string;
    protected edad: number;

    constructor(
        nombre: string,
        apellido: string,
        direccion: string,
        telefono: string,
        edad: number
    ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    // Método para verificar mayoría de edad
    verificarMayoriaEdad(): string {
        return this.edad >= 18 
            ? `${this.nombre} es mayor de edad (${this.edad} años)`
            : `${this.nombre} es menor de edad (${this.edad} años)`;
    }

    // Método abstracto
    abstract mostrarDatos(): string;
}

// Clase Empleado que hereda de Persona
class Empleado extends Persona {
    private sueldo: number;

    constructor(
        nombre: string,
        apellido: string,
        direccion: string,
        telefono: string,
        edad: number,
        sueldo: number = 0
    ) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;
    }

    // Método para cargar sueldo
    cargarSueldo(monto: number): void {
        if (monto > 0) {
            this.sueldo = monto;
            alert(`Sueldo actualizado a $${this.sueldo}`);
        } else {
            alert("El sueldo debe ser positivo");
        }
    }

    // Método para mostrar sueldo
    imprimirSueldo(): string {
        return `Sueldo: $${this.sueldo.toFixed(2)}`;
    }

    // Implementación del método abstracto
    mostrarDatos(): string {
        return `EMPLEADO:
Nombre: ${this.nombre} ${this.apellido}
Dirección: ${this.direccion}
Teléfono: ${this.telefono}
Edad: ${this.edad} años
${this.imprimirSueldo()}
${this.verificarMayoriaEdad()}`;
    }
}

// Función para crear empleado con prompts
function crearEmpleadoInteractivo() {
    // Solicitar datos básicos
    const nombre = prompt("Ingrese nombre del empleado:") || "Sin nombre";
    const apellido = prompt("Ingrese apellido del empleado:") || "Sin apellido";
    const direccion = prompt("Ingrese dirección:") || "Sin dirección";
    const telefono = prompt("Ingrese teléfono:") || "Sin teléfono";

    // Validar edad
    let edad = 0;
    while (edad <= 0) {
        const edadInput = parseInt(prompt("Ingrese edad:") || "0");
        if (!isNaN(edadInput) && edadInput > 0) {
            edad = edadInput;
        } else {
            alert("Edad debe ser un número positivo");
        }
    }

    // Validar sueldo
    let sueldo = 0;
    while (sueldo <= 0) {
        const sueldoInput = parseFloat(prompt("Ingrese sueldo inicial:") || "0");
        if (!isNaN(sueldoInput)) {
            if (sueldoInput > 0) {
                sueldo = sueldoInput;
            } else {
                alert("El sueldo debe ser mayor a 0");
            }
        }
    }

    // Crear instancia
    const empleado = new Empleado(nombre, apellido, direccion, telefono, edad, sueldo);

    // Mostrar datos
    alert(empleado.mostrarDatos());

    // Opción para modificar sueldo
    if (confirm("¿Desea modificar el sueldo?")) {
        let nuevoSueldo = 0;
        while (nuevoSueldo <= 0) {
            const sueldoInput = parseFloat(prompt("Ingrese nuevo sueldo:") || "0");
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