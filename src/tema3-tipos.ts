// Tema 3: Tipos básicos, arrays, uniones y avoidance de any

let texto: string = "Tipos básicos en TS";
let numeroClase: number = 4;
let activo: boolean = true;

// Array tipado
let tecnologias: string[] = ["JavaScript", "TypeScript", "Node.js", "React"];

// Tipo unión
let identificador: string | number;
identificador = "ID-998";
console.log(`Identificador como string: ${identificador}`);
identificador = 1045;
console.log(`Identificador como number: ${identificador}`);

console.log("--- TEMA 3: TIPOS BÁSICOS ---");
console.log(`Texto: ${texto}, Número: ${numeroClase}, Activo: ${activo}`);
console.log("Tecnologías permitidas:", tecnologias);