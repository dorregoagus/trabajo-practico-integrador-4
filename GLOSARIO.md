# Glosario de Términos - TypeScript

1. **Interferencia de tipos (Type Interference)**
   - **Definición:** Capacidad que tiene TypeScript para deducir automáticamente el tipo de una variable basándose en su valor inicial, sin necesidad de que se lo declare explícitamente.
   - **Ejemplo:** `let contador = 10; // TypeScript infiere automáticamente que es de tipo number.`

2. **Tipado Estático**
   - **Definición:** Característica mediante la cual los tipos de las variables son conocidos y verificados por el entorno de desarrollo y el compilador antes de ejecutar el código.
   - **Ejemplo:** `let edad: number = 21;` *(asignar un string generará un error de compilación).*

3. **Transpilación**
   - **Definición:** Proceso de convertir código fuente escrito en un lenguaje (como TypeScript) a otro lenguaje con un nivel de abstracción similar (como JavaScript compatible).
   - **Ejemplo:** El comando `npx tsc` transpila el código de `.ts` a `.js`.

4. **Tipo Unión (Union Type)**
   - **Definición:** Mecanismo que permite declarar que una variable o parámetro puede aceptar valores de dos o más tipos diferentes utilizando el operador `|`.
   - **Ejemplo:** `let codigo: string | number = "ABC-123";`

5. **Tipo Any**
   - **Definición:** Un tipo especial que desactiva temporalmente el control de tipos de TypeScript, permitiendo que una variable almacene cualquier tipo de valor.
   - **Ejemplo:** `let datoDesconocido: any = 42; datoDesconocido = "Texto";` 

6. **Interfaz (Interface)**
   - **Definición:** Estructura que define la forma formal que debe cumplir un objeto, especificando las propiedades obligatorias y opcionales que contendrá.
   - **Ejemplo:** `interface Producto { id: number; nombre: string; }`

7. **Tuplas (Tuples)**
   - **Definición:** Un tipo especial de array que permite estructurar una cantidad fija de elementos donde cada posición puede tener un tipo de dato diferente y conocido.
   - **Ejemplo:** `let usuarioInfo: [sting, number] = [Agus, 21];`

8. **Parámetro Opcional**
   - **Definición:** Parámetro de una función que puede ser omitido al invocarla, indicado mediante un signo de interrogación `?`.
   - **Ejemplo:** `function loguear(mensaje: string, usuario?: string) { ... }`

9. **Enum (Enumerado)**
   - **Definición:** Estructura de datos que permite definir un conjunto de constantes con nombre asociadas a valores legibles.
   - **Ejemplo:** `enum Direccion { Norte, Sur, Este, Oeste }`

10. **Tipo Literal**
    - **Definición:** Tipo de dato estático que restringe una variable a un valor exacto y específico en lugar de permitir cualquier valor de un tipo general.
    - **Ejemplo:** `let respuesta: "Sí" | "No" = "Sí";`