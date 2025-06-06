class Cancion {
    private _titulo: string;
    private _genero: string;
    private _autor: string;
    
    constructor(titulo: string, genero: string) {
        this._titulo = titulo;
        this._genero = genero;
        this._autor = "Desconocido";
    }

    // Getters y setters para todas las propiedades
    get titulo(): string {
        return this._titulo;
    }

    set titulo(nuevoTitulo: string) {
        if (nuevoTitulo.trim() === "") {
            alert("El título no puede estar vacío");
        } else {
            this._titulo = nuevoTitulo;
        }
    }

    get genero(): string {
        return this._genero;
    }

    set genero(nuevoGenero: string) {
        if (nuevoGenero.trim() === "") {
            alert("El género no puede estar vacío");
        } else {
            this._genero = nuevoGenero;
        }
    }

    get autor(): string {
        return this._autor;
    }

    set autor(nuevoAutor: string) {
        if (nuevoAutor.trim() === "") {
            alert("El autor no puede estar vacío");
        } else {
            this._autor = nuevoAutor;
        }
    }

    // Método para mostrar datos usando los getters
    mostrarDatos(): string {
        return `Canción: ${this.titulo}\nGénero: ${this.genero}\nAutor: ${this.autor}`;
    }

    // Método para editar usando los setters
    editarCancion(): void {
        let editar = true;
        
        while (editar) {
            const opcion = prompt(
                `Datos actuales:\n${this.mostrarDatos()}\n\n¿Qué deseas editar?\n` +
                "1. Título\n2. Género\n3. Autor\n4. Terminar edición\n\n" +
                "Ingrese el número de la opción:"
            );

            switch (opcion) {
                case "1":
                    const nuevoTitulo = prompt("Nuevo título:", this.titulo);
                    if (nuevoTitulo !== null) {
                        this.titulo = nuevoTitulo; // Usa el setter
                    }
                    break;
                case "2":
                    const nuevoGenero = prompt("Nuevo género:", this.genero);
                    if (nuevoGenero !== null) {
                        this.genero = nuevoGenero; // Usa el setter
                    }
                    break;
                case "3":
                    const nuevoAutor = prompt("Nuevo autor:", this.autor);
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
    }
}

// Función para crear y gestionar la canción
function gestionarCancion() {
    // Creación inicial usando setters
    let tituloValido = false;
    let titulo = "";
    while (!tituloValido) {
        titulo = prompt("Ingrese el título de la canción:") || "";
        if (titulo.trim() !== "") {
            tituloValido = true;
        } else {
            alert("El título no puede estar vacío");
        }
    }

    let generoValido = false;
    let genero = "";
    while (!generoValido) {
        genero = prompt("Ingrese el género de la canción:") || "";
        if (genero.trim() !== "") {
            generoValido = true;
        } else {
            alert("El género no puede estar vacío");
        }
    }

    const cancion = new Cancion(titulo, genero);

    // Establecer autor usando setter
    let autorValido = false;
    while (!autorValido) {
        const autorInput = prompt("Ingrese el autor de la canción:") || "";
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