class Calculadora {
    // Método para sumar
    sumar(a: number, b: number): number {
        return a + b;
    }

    // Método para restar
    restar(a: number, b: number): number {
        return a - b;
    }

    // Método para multiplicar
    multiplicar(a: number, b: number): number {
        return a * b;
    }

    // Método para dividir
    dividir(a: number, b: number): number | string {
        if (b === 0) {
            return "Error: No se puede dividir por cero";
        }
        return a / b;
    }

    // Método para potencia
    potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    // Método para factorial
    factorial(n: number): number {
        if (n < 0) return NaN;
        if (n === 0 || n === 1) return 1;
        
        let resultado = 1;
        for (let i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

// Función para obtener número desde prompt con validación
function obtenerNumero(mensaje: string): number {
    let input: string | null;
    let numero: number;
    
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
    const calculadora = new Calculadora();
    
    // Mostrar menú de operaciones
    const operacion = prompt(
        "Seleccione la operación:\n" +
        "1. Sumar\n" +
        "2. Restar\n" +
        "3. Multiplicar\n" +
        "4. Dividir\n" +
        "5. Potencia\n" +
        "6. Factorial\n\n" +
        "Ingrese el número de la operación:"
    );

    let resultado: number | string;
    
    switch (operacion) {
        case "1": // Sumar
            const sumando1 = obtenerNumero("Ingrese el primer número:");
            const sumando2 = obtenerNumero("Ingrese el segundo número:");
            resultado = calculadora.sumar(sumando1, sumando2);
            break;
            
        case "2": // Restar
            const minuendo = obtenerNumero("Ingrese el minuendo:");
            const sustraendo = obtenerNumero("Ingrese el sustraendo:");
            resultado = calculadora.restar(minuendo, sustraendo);
            break;
            
        case "3": // Multiplicar
            const factor1 = obtenerNumero("Ingrese el primer factor:");
            const factor2 = obtenerNumero("Ingrese el segundo factor:");
            resultado = calculadora.multiplicar(factor1, factor2);
            break;
            
        case "4": // Dividir
            const dividendo = obtenerNumero("Ingrese el dividendo:");
            const divisor = obtenerNumero("Ingrese el divisor:");
            resultado = calculadora.dividir(dividendo, divisor);
            break;
            
        case "5": // Potencia
            const base = obtenerNumero("Ingrese la base:");
            const exponente = obtenerNumero("Ingrese el exponente:");
            resultado = calculadora.potencia(base, exponente);
            break;
            
        case "6": // Factorial
            const numero = obtenerNumero("Ingrese un número entero para calcular su factorial:");
            resultado = calculadora.factorial(Math.floor(numero));
            break;
            
        default:
            resultado = "Operación no válida";
    }

    // Mostrar resultado
    alert(`El resultado es: ${resultado}`);
    console.log(`Operación realizada. Resultado: ${resultado}`);
}

// Iniciar la calculadora
calcular();