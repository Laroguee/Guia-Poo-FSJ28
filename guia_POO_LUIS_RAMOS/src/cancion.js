var Cancion = /** @class */ (function () {
    function Cancion(titulo, genero) {
        this._titulo = titulo;
        this._genero = genero;
        this._autor = "Desconocido";
    }
    Object.defineProperty(Cancion.prototype, "titulo", {
        // Getters y setters para todas las propiedades
        get: function () {
            return this._titulo;
        },
        set: function (nuevoTitulo) {
            if (nuevoTitulo.trim() === "") {
                alert("El título no puede estar vacío");
            }
            else {
                this._titulo = nuevoTitulo;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cancion.prototype, "genero", {
        get: function () {
            return this._genero;
        },
        set: function (nuevoGenero) {
            if (nuevoGenero.trim() === "") {
                alert("El género no puede estar vacío");
            }
            else {
                this._genero = nuevoGenero;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cancion.prototype, "autor", {
        get: function () {
            return this._autor;
        },
        set: function (nuevoAutor) {
            if (nuevoAutor.trim() === "") {
                alert("El autor no puede estar vacío");
            }
            else {
                this._autor = nuevoAutor;
            }
        },
        enumerable: false,
        configurable: true
    });
    // Método para mostrar datos usando los getters
    Cancion.prototype.mostrarDatos = function () {
        return "Canci\u00F3n: ".concat(this.titulo, "\nG\u00E9nero: ").concat(this.genero, "\nAutor: ").concat(this.autor);
    };
    // Método para editar usando los setters
    Cancion.prototype.editarCancion = function () {
        var editar = true;
        while (editar) {
            var opcion = prompt("Datos actuales:\n".concat(this.mostrarDatos(), "\n\n\u00BFQu\u00E9 deseas editar?\n") +
                "1. Título\n2. Género\n3. Autor\n4. Terminar edición\n\n" +
                "Ingrese el número de la opción:");
            switch (opcion) {
                case "1":
                    var nuevoTitulo = prompt("Nuevo título:", this.titulo);
                    if (nuevoTitulo !== null) {
                        this.titulo = nuevoTitulo; // Usa el setter
                    }
                    break;
                case "2":
                    var nuevoGenero = prompt("Nuevo género:", this.genero);
                    if (nuevoGenero !== null) {
                        this.genero = nuevoGenero; // Usa el setter
                    }
                    break;
                case "3":
                    var nuevoAutor = prompt("Nuevo autor:", this.autor);
                    if (nuevoAutor !== null) {
                        this.autor = nuevoAutor; // Usa el setter
                    }
                    break;
                case "4":
                    editar = false;
                    break;
                default:
                    alert("Opción no válida");
            }
        }
    };
    return Cancion;
}());
// Función para crear y gestionar la canción
function gestionarCancion() {
    // Creación inicial usando setters
    var tituloValido = false;
    var titulo = "";
    while (!tituloValido) {
        titulo = prompt("Ingrese el título de la canción:") || "";
        if (titulo.trim() !== "") {
            tituloValido = true;
        }
        else {
            alert("El título no puede estar vacío");
        }
    }
    var generoValido = false;
    var genero = "";
    while (!generoValido) {
        genero = prompt("Ingrese el género de la canción:") || "";
        if (genero.trim() !== "") {
            generoValido = true;
        }
        else {
            alert("El género no puede estar vacío");
        }
    }
    var cancion = new Cancion(titulo, genero);
    // Establecer autor usando setter
    var autorValido = false;
    while (!autorValido) {
        var autorInput = prompt("Ingrese el autor de la canción:") || "";
        cancion.autor = autorInput; // Usa el setter
        if (cancion.autor !== "Desconocido") {
            autorValido = true;
        }
    }
    // Mostrar datos usando getters
    alert("Canción creada:\n\n" + cancion.mostrarDatos());
    // Permitir edición
    cancion.editarCancion();
    // Mostrar resultado final
    alert("Datos finales de la canción:\n\n" + cancion.mostrarDatos());
    console.log("Canción final:", {
        titulo: cancion.titulo,
        genero: cancion.genero,
        autor: cancion.autor
    });
}
// Iniciar la aplicación
gestionarCancion();
