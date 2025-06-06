var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina() {
        this.titulo = "";
        this.color = "";
        this.fuente = "";
        this.alineacion = "izquierda"; // Valor por defecto
    }
    // Método 1: Obtener título, color y fuente de la página
    CabeceraPagina.prototype.establecerPropiedades = function (titulo, color, fuente) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    };
    // Método 2: Establecer alineación del título
    CabeceraPagina.prototype.establecerAlineacion = function (alineacion) {
        this.alineacion = alineacion;
    };
    // Método 3: Imprimir todas las propiedades
    CabeceraPagina.prototype.imprimirPropiedades = function () {
        console.log("Propiedades de la cabecera:");
        console.log("- T\u00EDtulo: ".concat(this.titulo));
        console.log("- Color: ".concat(this.color));
        console.log("- Fuente: ".concat(this.fuente));
        console.log("- Alineaci\u00F3n: ".concat(this.alineacion));
    };
    return CabeceraPagina;
}());
// Función para solicitar datos al usuario
function solicitarDatos() {
    var miCabecera = new CabeceraPagina();
    // Solicitar título, color y fuente (Método 1)
    var titulo = prompt("Ingrese el título de la página:") || "Sin título";
    var color = prompt("Ingrese el color de la cabecera:") || "negro";
    var fuente = prompt("Ingrese la fuente a utilizar:") || "Arial";
    miCabecera.establecerPropiedades(titulo, color, fuente);
    // Solicitar alineación (Método 2)
    var alineacionValida = false;
    var alineacion;
    while (!alineacionValida) {
        alineacion = prompt("¿Cómo desea alinear el título? (centrado/derecha/izquierda):") || "izquierda";
        alineacion = alineacion.toLowerCase();
        if (alineacion === "centrado" || alineacion === "derecha" || alineacion === "izquierda") {
            miCabecera.establecerAlineacion(alineacion);
            alineacionValida = true;
        }
        else {
            alert("Opción no válida. Por favor ingrese 'centrado', 'derecha' o 'izquierda'.");
        }
    }
    // Imprimir propiedades (Método 3)
    miCabecera.imprimirPropiedades();
}
// Llamar a la función para iniciar el proceso
solicitarDatos();
