/*


    Hacer condiciones con cada condicion de JS
    En JavaScript, las **condiciones** permiten que el programa tome decisiones basadas en la evaluación de expresiones lógicas. Existen varias estructuras de control condicional que te permiten ejecutar bloques de código dependiendo de si se cumple o no una condición. Aquí están las principales estructuras condicionales en JavaScript:

### 1. **Condicional `if`**

El `if` es la estructura condicional básica. Permite ejecutar un bloque de código si una condición es verdadera.

```javascript
if (condicion) {
    // Código a ejecutar si la condición es verdadera
}
```

Ejemplo:
```javascript
let edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad.");
}
```

### 2. **Condicional `if...else`**

El `if...else` permite ejecutar un bloque de código si la condición es verdadera, y otro bloque diferente si la condición es falsa.

```javascript
if (condicion) {
    // Código a ejecutar si la condición es verdadera
} else {
    // Código a ejecutar si la condición es falsa
}
```

Ejemplo:
```javascript
let edad = 16;
if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}
```

### 3. **Condicional `if...else if...else`**

Esta estructura permite manejar múltiples condiciones, evaluando una por una en orden. Si la primera condición no se cumple, se evalúa la siguiente, y así sucesivamente. Si ninguna de las condiciones se cumple, se ejecuta el bloque final del `else`.

```javascript
if (condicion1) {
    // Código a ejecutar si condicion1 es verdadera
} else if (condicion2) {
    // Código a ejecutar si condicion1 es falsa y condicion2 es verdadera
} else {
    // Código a ejecutar si todas las condiciones anteriores son falsas
}
```

Ejemplo:
```javascript
let edad = 20;
if (edad >= 65) {
    console.log("Eres un adulto mayor.");
} else if (edad >= 18) {
    console.log("Eres un adulto.");
} else if (edad >= 13) {
    console.log("Eres un adolescente.");
} else {
    console.log("Eres un niño.");
}
```

### 4. **Condicional `switch`**

El `switch` es útil cuando tienes muchas condiciones basadas en el valor de una sola expresión. En lugar de usar múltiples `if...else if`, puedes utilizar `switch` para simplificar el código.

```javascript
switch (expresion) {
    case valor1:
        // Código a ejecutar si expresion === valor1
        break;
    case valor2:
        // Código a ejecutar si expresion === valor2
        break;
    // Puedes agregar más casos aquí
    default:
        // Código a ejecutar si ninguno de los casos coincide
}
```

Ejemplo:
```javascript
let dia = "lunes";
switch (dia) {
    case "lunes":
        console.log("Es el primer día de la semana.");
        break;
    case "martes":
        console.log("Es el segundo día de la semana.");
        break;
    case "miércoles":
        console.log("Es el tercer día de la semana.");
        break;
    default:
        console.log("Es otro día de la semana.");
}
```

### 5. **Operador ternario (Condicional corto)**

El operador ternario es una forma abreviada de un `if...else`. Se utiliza para hacer asignaciones o devolver un valor dependiendo de si una condición es verdadera o falsa.

```javascript
condicion ? valorSiEsVerdadero : valorSiEsFalso;
```

Ejemplo:
```javascript
let edad = 20;
let resultado = (edad >= 18) ? "Eres mayor de edad." : "Eres menor de edad.";
console.log(resultado);
```

### 6. **Operadores lógicos en condiciones**

En JavaScript, puedes combinar múltiples condiciones usando operadores lógicos. Los más comunes son:

- **`&&` (AND)**: La condición se evalúa como verdadera solo si ambas subcondiciones son verdaderas.
- **`||` (OR)**: La condición se evalúa como verdadera si al menos una de las subcondiciones es verdadera.
- **`!` (NOT)**: Invierte el valor de la condición (de verdadera a falsa y viceversa).

#### Ejemplo con `&&` (AND):
```javascript
let edad = 20;
let tieneLicencia = true;
if (edad >= 18 && tieneLicencia) {
    console.log("Puedes conducir.");
} else {
    console.log("No puedes conducir.");
}
```

#### Ejemplo con `||` (OR):
```javascript
let esFinDeSemana = false;
let tieneTiempoLibre = true;
if (esFinDeSemana || tieneTiempoLibre) {
    console.log("Puedes salir a divertirte.");
} else {
    console.log("No puedes salir a divertirte.");
}
```

#### Ejemplo con `!` (NOT):
```javascript
let tienePermiso = false;
if (!tienePermiso) {
    console.log("No tienes permiso.");
} else {
    console.log("Tienes permiso.");
}
```

### 7. **Condicional `if` con operadores de comparación**

JavaScript proporciona varios operadores de comparación que son muy útiles en las condiciones. Algunos de los más comunes son:

- **`==`**: Igual a (compara valores, sin considerar tipo de datos).
- **`===`**: Igual a (compara valores y tipo de datos).
- **`!=`**: Diferente a (compara valores).
- **`!==`**: Diferente a (compara valores y tipo de datos).
- **`>`**: Mayor que.
- **`<`**: Menor que.
- **`>=`**: Mayor o igual que.
- **`<=`**: Menor o igual que.

Ejemplo:
```javascript
let edad = 18;
if (edad === 18) {
    console.log("Tienes exactamente 18 años.");
}

let numero = 10;
if (numero >= 5 && numero <= 20) {
    console.log("El número está en el rango entre 5 y 20.");
}
```

---

### Resumen

- **`if`**: Para ejecutar código si una condición es verdadera.
- **`if...else`**: Para elegir entre dos bloques de código, dependiendo de la condición.
- **`if...else if...else`**: Para manejar múltiples condiciones.
- **`switch`**: Para evaluar múltiples condiciones basadas en un valor.
- **Operador ternario**: Una forma más concisa de `if...else`.
- **Operadores lógicos**: Para combinar varias condiciones (`&&`, `||`, `!`).

Cada uno de estos tipos de condicionales te ayudará a controlar el flujo de ejecución de tu programa en función de condiciones y valores. ¿Te gustaría ver ejemplos más complejos de alguna de estas estructuras?

*/

/*1 Condicional if

let dia = prompt("Ingresa un día de la semana: (Por favor introducir todo en minusculas)");
if (dia === "lunes") {
    console.log("Es el primer día de la semana.");
} else if (dia == "martes") {
    console.log("Es el segundo día de la semana.");
} else if (dia == "miércoles") {
    console.log("Es el tercer día de la semana.");
}   else if (dia == "jueves") {
    console.log("Es el cuarto día de la semana.");
}   else if (dia == "viernes") {
    console.log("Es el quinto día de la semana y proximamente finde.");
}  else if (dia == "sábado") {
    console.log("Es el sexto día de la semana.");
}  else if (dia == "domingo") {
    console.log("Es el séptimo día de la semana.");
}

/*2 Condicional if...else

if (dia === "viernes") {
    alert("Te felicito, ya es viernes");
    
} else {
    console.log("No es viernes");
}
*/
/*3 Condicional if...else if...else
let auto = prompt('Tienes auto? (si/no)');
if (auto === "si") {
    console.log("Tienes auto");
    alert('¿De que color?')
    if (auto === "rojo") {
        console.log("Amo el color rojo");
    } else{
        console.log("Que lindo auto tienes");
    }
}   
*/
/* 4 No se que pasa que no me funciona el switch
prompt('¿Que moto tenes? (Yamaha, Honda o Africa Twin)');
let marcaMoto;
switch (marcaMoto) {
    case "Yamaha" || "yamaha" || "YAMAHA":
        console.log("Muy linda moto");
        break;
    case "Honda" || "honda"|| "HONDA":
        console.log("Son de las mas vendidas");
        break;
    case "Africa Twin" || "africa twin" | "africatwin" | 'AFRICA TWIN':
        console.log("Es de primera ");
        break;
    default:
        console.log("No tengo información de esa moto");
}
*/

//5 Operador ternario
/**

let soymillonario = 1000000;
let resultado = prompt('Ingresa tu capital') 
if (resultado >= soymillonario ){
    console.log("Eres millonario");
} else {
    console.log("No eres millonario");
} */


// 7
/*
let edadPermitida >= 17;
let (edadConducir = prompt('¿Cuantos años tienes?'));
if (edadConducir >= 17){
    console.log("Puedes sacar el permiso para conducir");
} else {console.log("No puedes sacar el permiso para conducir");
}  elseif (edadConducir > 12){ 
    console.log("Puedes conducir un karting, porque para un auto estas loco");
}
*/

/*
### 7. **Condicional `if` con operadores de comparación**

JavaScript proporciona varios operadores de comparación que son muy útiles en las condiciones. Algunos de los más comunes son:

- **`==`**: Igual a (compara valores, sin considerar tipo de datos).
- **`===`**: Igual a (compara valores y tipo de datos).
- **`!=`**: Diferente a (compara valores).
- **`!==`**: Diferente a (compara valores y tipo de datos).
- **`>`**: Mayor que.
- **`<`**: Menor que.
- **`>=`**: Mayor o igual que.
- **`<=`**: Menor o igual que.
*/