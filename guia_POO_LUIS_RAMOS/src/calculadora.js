var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    // Método para sumar
    Calculadora.prototype.sumar = function (a, b) {
        return a + b;
    };
    // Método para restar
    Calculadora.prototype.restar = function (a, b) {
        return a - b;
    };
    // Método para multiplicar
    Calculadora.prototype.multiplicar = function (a, b) {
        return a * b;
    };
    // Método para dividir
    Calculadora.prototype.dividir = function (a, b) {
        if (b === 0) {
            return "Error: No se puede dividir por cero";
        }
        return a / b;
    };
    // Método para potencia
    Calculadora.prototype.potencia = function (base, exponente) {
        return Math.pow(base, exponente);
    };
    // Método para factorial
    Calculadora.prototype.factorial = function (n) {
        if (n < 0)
            return NaN;
        if (n === 0 || n === 1)
            return 1;
        var resultado = 1;
        for (var i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    };
    return Calculadora;
}());
// Función para obtener número desde prompt con validación
function obtenerNumero(mensaje) {
    var input;
    var numero;
    do {
        input = prompt(mensaje);
        numero = parseFloat(input || "");
        if (isNaN(numero)) {
            alert("Por favor ingrese un número válido.");
        }
    } while (isNaN(numero));
    return numero;
}
// Función principal para interactuar con el usuario
function calcular() {
    var calculadora = new Calculadora();
    // Mostrar menú de operaciones
    var operacion = prompt("Seleccione la operación:\n" +
        "1. Sumar\n" +
        "2. Restar\n" +
        "3. Multiplicar\n" +
        "4. Dividir\n" +
        "5. Potencia\n" +
        "6. Factorial\n\n" +
        "Ingrese el número de la operación:");
    var resultado;
    switch (operacion) {
        case "1": // Sumar
            var sumando1 = obtenerNumero("Ingrese el primer número:");
            var sumando2 = obtenerNumero("Ingrese el segundo número:");
            resultado = calculadora.sumar(sumando1, sumando2);
            break;
        case "2": // Restar
            var minuendo = obtenerNumero("Ingrese el minuendo:");
            var sustraendo = obtenerNumero("Ingrese el sustraendo:");
            resultado = calculadora.restar(minuendo, sustraendo);
            break;
        case "3": // Multiplicar
            var factor1 = obtenerNumero("Ingrese el primer factor:");
            var factor2 = obtenerNumero("Ingrese el segundo factor:");
            resultado = calculadora.multiplicar(factor1, factor2);
            break;
        case "4": // Dividir
            var dividendo = obtenerNumero("Ingrese el dividendo:");
            var divisor = obtenerNumero("Ingrese el divisor:");
            resultado = calculadora.dividir(dividendo, divisor);
            break;
        case "5": // Potencia
            var base = obtenerNumero("Ingrese la base:");
            var exponente = obtenerNumero("Ingrese el exponente:");
            resultado = calculadora.potencia(base, exponente);
            break;
        case "6": // Factorial
            var numero = obtenerNumero("Ingrese un número entero para calcular su factorial:");
            resultado = calculadora.factorial(Math.floor(numero));
            break;
        default:
            resultado = "Operación no válida";
    }
    // Mostrar resultado
    alert("El resultado es: ".concat(resultado));
    console.log("Operaci\u00F3n realizada. Resultado: ".concat(resultado));
}
// Iniciar la calculadora
calcular();
