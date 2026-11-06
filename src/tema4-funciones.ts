// Tema 4: Funciones, parámetros tipados, retorno, opcionales y por defecto

// Función con parámetros tipados y tipo de retorno explícito
function calcularAreaRectangulo(base: number, altura: number): number {
    return base * altura;
}

// Función con parámetro opcional (?) y parámetro por defecto
function presentarPersona(nombre: string, edad?: number, rol: string = "Estudiante"): string {
    if (edad) {
        console.log(`Hola, soy ${nombre}, tengo ${edad} años y mi rol es ${rol}.`);
    } else {
        console.log(`Hola, soy ${nombre} y soy ${rol}.`);
    }
    return nombre;
}

console.log("--- TEMA 4: FUNCIONES ---");
const area = calcularAreaRectangulo(10, 5);
console.log(`Área del rectángulo calculada: ${area}`);

presentarPersona("Agus", 21);
presentarPersona("María");