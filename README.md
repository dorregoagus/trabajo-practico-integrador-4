# Trabajo Practico Integrador 4 - TypeScript

## Tema 1: ¿Qué es TypeScript?

- **¿Qué es TypeScript y quién lo desarrolla?**
  TypeScript es un lenguaje de programación de código abierto desarrollado y mantenido por Microsoft. Funciona como un superconjunto tipado de JavaScript, lo que significa que cualquier código JavaScript válido es también código TypeScript válido, añadiendo la capacidad de tipado estático opcional.

- **¿Qué diferencias tiene con JavaScript?**
  - **Tipado:** JavaScript es dinámico (los tipos se verifican en tiempo de ejecución), mientras que TypeScript permite tipado estático (los errores se detectan en tiempo de compilación o de escritura en el editor).
  - **Ejecución directa:** Los navegadores y Node.js ejecutan JavaScript directamente; TypeScript necesita ser transpilado (convertido) a JavaScript antes de poder ejecutarse.

- **¿Qué ventajas ofrece?**
  - Detección temprana de errores gracias al análisis estático.
  - Mejor experiencia de desarrollo con autocompletado avanzado (IntelliSense), refactorización más segura y código autodocumentado.

- **¿Cuál es su versión actual?**
  - La versión actual de TypeScript es la 7.0.2, lanzada recientemente en julio de 2026.

## Tema 2: Crear y ejecutar un proyecto
- **¿Cómo se instala TypeScript en un proyecto?**
  Se instala ejecutando `npm install -D typescript` como dependencia de desarrollo.

- **¿Para qué sirve el archivo tsconfig.json?**
  Es el archivo de configuración que define las opciones del compilador que TypeScript utilizará para transformar los archivos `.ts` en `.js`.

- **¿Qué hace el comando tsc?**
  Es el compilador oficial de TypeScript. Toma los archivos `.ts` y los compila/convierte en archivos de JavaScript (`.js`) según las reglas del `tsconfig.json`.
  
- **¿Qué diferencia hay entre ejecutar un archivo con tsc, tsx y node?**
  - `tsc`: Compila el archivo TypeScript a un archivo JavaScript (no lo ejecuta directamente por sí solo, solo genera el `.js`).
  - `node`: Ejecuta código JavaScript plano (si intentas pasarle un archivo `.ts` directamente, Node fallará a menos que uses configuraciones experimentales o banderas especiales).
  - `tsx`: Es una herramienta moderna de desarrollo que permite ejecutar archivos TypeScript de forma directa al vuelo, compilando en memoria sin necesidad de generar archivos `.js` intermedios manualmente.

## Tema 3: Tipos básicos
- **¿Qué son los tipos string, number y boolean?**
  Son los tipos primitivos fundamentales en TypeScript:
  - `string`: Representa cadenas de texto (ej. `"Hola"`).
  - `number`: Representa números enteros y decimales (ej. `42`, `3.14`).
  - `boolean`: Representa valores de verdadero o falso (`true`, `false`).

- **¿Cómo se declara un array con tipo?**
  Se puede declarar usando la sintaxis de corchetes `tipo[]` o mediante un tipo genérico `Array<tipo>` (ej. `let numeros: number[] = [1, 2, 3];`).

- **¿Qué es un tipo unión?**
  Permite que una variable o parámetro acepte más de un tipo de datos, combinándolos con el operador barra vertical `|` (ej. `let id: string | number;`).

- **¿Por qué se recomienda evitar any?**
  Porque el tipo `any` desactiva el sistema de verificación de tipos de TypeScript, volviendo al comportamiento dinámico de JavaScript y aumentando el riesgo de cometer errores inadvertidos que rompan la aplicación en producción.

## Tema 4: Funciones
- **¿Cómo se indican los tipos de los parámetros?**
  Colocando dos puntos `:` seguidos del tipo de dato correspondiente inmediatamente después del nombre del parámetro (ej. `function sumar(a: number, b: number)`).

- **¿Cómo se indica el tipo de retorno?**
  Se especifica colocando dos puntos `:` y el tipo de dato justo después de los paréntesis de los parámetros de la función (ej. `function sumar(a: number, b: number): number { ... }`).

- **¿Qué es un parámetro opcional?**
  Es un parámetro que puede o no ser proporcionado al invocar la función. Se indica añadiendo un signo de interrogación `?` antes de los dos puntos (ej. `nombre?: string`).

- **¿Qué es un parámetro por defecto?**
  Es un parámetro al que se le asigna un valor predeterminado directamente en la firma de la función. Si no se pasa el argumento o se pasa `undefined`, se usará ese valor por defecto (ej. `function saludar(saludo: string = "Hola")`).

## Tema 5: Interfaces y type
- **¿Qué es una interfaz y para qué sirve?**
  Una interfaz (`interface`) es una estructura que define la forma o contrato que debe cumplir un objeto, especificando sus propiedades y tipos. Sirve para estructurar código y asegurar consistencia en objetos y clases.

- **¿Qué es un type?**
  Un alias de tipo (`type alias`) permite crear un nombre personalizado para cualquier tipo de dato, incluyendo tipos primitivos, uniones, tuplas y objetos.

- **¿Cómo se declara una propiedad opcional?**
  Añadiendo un signo de interrogación `?` antes de los dos puntos en la definición de la propiedad dentro de la interfaz o el type (ej. `edad?: number;`).

- **¿Cuándo conviene usar cada uno?**
  - Se prefiere `interface` para definir la estructura de objetos y clases, ya que soporta mejor la declaración y extensión (herencia mediante `extends`).
  - Se prefiere `type` cuando se necesitan uniones complejas (`string | number`), tipos primitivos, tuplas o funciones avanzadas, ya que es más flexible para esas operaciones.

## Tema 6: Enums y tipos literales
- **¿Qué es un enum?**
  Un enumerado (`enum`) es una estructura que permite definir un conjunto de constantes con nombre asociadas a valores numéricos o de cadena, mejorando la legibilidad del código.

- **¿Qué es un tipo literal?**
  Es un tipo que restringe una variable a un valor exacto y específico en lugar de un conjunto amplio de tipos (ej. `let direccion: "norte" | "sur";`).

- **¿En qué se parecen y en qué se diferencian?**
  - *Parecidos:* Ambos limitan los valores posibles que puede tomar una variable a un conjunto cerrado de opciones predefinidas.
  - *Diferencias:* Los `enum` generan código JavaScript adicional al compilar y funcionan como estructuras u objetos nombrados, mientras que los tipos literales son puramente una característica de tipado estático de TypeScript que desaparece tras la compilación.

- **¿En qué situaciones se puede usar cada uno?**
  - Los `enum` son útiles para agrupar estados o roles fijos (ej. niveles de usuario o días de la semana).
  - Los tipos literales son ideales para configuraciones simples, opciones binarias o estados específicos (ej. estados de una petición: `"idle" | "loading" | "success"`).

## Fuentes Consultadas
- Documentación oficial de TypeScript: [https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)
- Apuntes y material teórico de la cátedra.