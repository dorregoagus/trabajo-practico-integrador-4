// Tema 5: Interfaces y type aliases

// Interfaz para un objeto Usuario
interface Usuario {
    id: number;
    nombre: string;
    email?: string; // Propiedad opcional
}

// Type alias para un rol o permisos
type RolSistema = "Administrador" | "Estudiante" | "Profesor";

const usuario1: Usuario = {
    id: 1,
    nombre: "Agustina Dorrego",
    email: "agus@gmail.com"
};

const rolActual: RolSistema = "Estudiante";

console.log("--- TEMA 5: INTERFACES Y TYPE ---");
console.log("Usuario registrado:", usuario1);
console.log(`Rol asignado en el sistema: ${rolActual}`);