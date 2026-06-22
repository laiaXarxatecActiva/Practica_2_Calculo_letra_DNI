# Validador de DNI

## Descripción

Este programa solicita al usuario un DNI español, comprueba que sea válido y verifica si la letra introducida corresponde realmente al número indicado.

En caso de que el formato sea incorrecto, se muestra un mensaje de error. Si el formato es válido, el programa calcula la letra asociada al número del DNI y la compara con la proporcionada por el usuario.

---

## Posible mejora del código

En el enunciado se proporciona el siguiente array para obtener la letra correspondiente al DNI:

```javascript
var LETTERS = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
```

Aunque funciona, contiene una 'T' adicional al final, una última posición que nunca será necesaria en este caso y que hace que el array tenga una longitud de 24.

Eliminando la letra repetida, el array tendría una longitud real de 23 elementos y podría utilizarse directamente LETTERS.length en lugar de una constante independiente (AMOUNT_LETTERS). Esto hace el código ligeramente más limpio y evita mantener dos valores que representan la misma información.

Por ejemplo:

```javascript

function calculateLetter(DNI) {
    const LETTERS = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    const number = parseInt(DNI.slice(0, -1));

    return LETTERS[number % LETTERS.length];
}
```

De esta forma, el propio array proporciona la información necesaria para realizar el cálculo, reduciendo ligeramente la complejidad del código y evitando datos redundantes.