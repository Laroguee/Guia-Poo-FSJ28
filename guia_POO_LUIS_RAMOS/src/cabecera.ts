class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: string;

    constructor() {
        this.titulo = "";
        this.color = "";
        this.fuente = "";
        this.alineacion = "izquierda"; // Valor por defecto
    }

    // Método 1: Obtener título, color y fuente de la página
    public establecerPropiedades(titulo: string, color: string, fuente: string): void {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }

    // Método 2: Establecer alineación del título
    public establecerAlineacion(alineacion: "centrado" | "derecha" | "izquierda"): void {
        this.alineacion = alineacion;
    }

    // Método 3: Imprimir todas las propiedades
    public imprimirPropiedades(): void {
        console.log("Propiedades de la cabecera:");
        console.log(`- Título: ${this.titulo}`);
        console.log(`- Color: ${this.color}`);
        console.log(`- Fuente: ${this.fuente}`);
        console.log(`- Alineación: ${this.alineacion}`);
    }
}

// Función para solicitar datos al usuario
function solicitarDatos(): void {
    const miCabecera = new CabeceraPagina();

    // Solicitar título, color y fuente (Método 1)
    const titulo = prompt("Ingrese el título de la página:") || "Sin título";
    const color = prompt("Ingrese el color de la cabecera:") || "negro";
    const fuente = prompt("Ingrese la fuente a utilizar:") || "Arial";
    miCabecera.establecerPropiedades(titulo, color, fuente);

    // Solicitar alineación (Método 2)
    let alineacionValida = false;
    let alineacion: string;

    while (!alineacionValida) {
        alineacion = prompt("¿Cómo desea alinear el título? (centrado/derecha/izquierda):") || "izquierda";
        alineacion = alineacion.toLowerCase();

        if (alineacion === "centrado" || alineacion === "derecha" || alineacion === "izquierda") {
            miCabecera.establecerAlineacion(alineacion as "centrado" | "derecha" | "izquierda");
            alineacionValida = true;
        } else {
            alert("Opción no válida. Por favor ingrese 'centrado', 'derecha' o 'izquierda'.");
        }
    }

    // Imprimir propiedades (Método 3)
    miCabecera.imprimirPropiedades();
}

// Llamar a la función para iniciar el proceso
solicitarDatos();