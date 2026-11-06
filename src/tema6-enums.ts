// Tema 6: Enums y Tipos Literales

// Uso de Enum
enum DiaSemana {
    Lunes = "LUNES",
    Martes = "MARTES",
    Miercoles = "MIÉRCOLES",
    Jueves = "JUEVES",
    Viernes = "VIERNES"
}

// Uso de Tipo Literal
type EstadoConexion = "conectado" | "desconectado" | "latente";

const diaHoy: DiaSemana = DiaSemana.Viernes;
const estadoRed: EstadoConexion = "conectado";

console.log("--- TEMA 6: ENUMS Y LITERALES ---");
console.log(`Día actual según el enum: ${diaHoy}`);
console.log(`Estado de la conexión (tipo literal): ${estadoRed}`);