# php



#### Ejercicios

##### A - Introductorios

**1** - Una tienda online necesita un tratamiento de la información de la cesta de los clientes que cumpla los siguientes requisitos:

* Si la compra del cliente es inferior a 19 euros podrán requerir 2 cosas:
    * si los productos son de mascotas se mostrará un mensaje: "No se puede realizar el envío".
    * si los productos son de ropa se le mostrará el siguiente mensaje: "Los gastos de envío son 9 euros".
* Si la compra tiene un importe entre 19 y 40 euros se le indicará el mensaje: "Los gastos de envío son 9 euros".
    * Si la compra supera los 40 euros deberemos indicar un mensaje de que los portes de envío son gratis.
    * Si la compra supera los 200 euros deberemos mostrar un mensaje con un código de descuento: CODIGODESC33.

Para este problema disponemos de los siguientes datos:

* El importe total de la cesta de la compra viene en una variable `$totalCompra` con un número decimal positivo. Ejemplo: 33.55.
* En la variable `$tipoCompra` nos viene un texto que 
puede ser 'mascotas' o 'ropa'.
* Debemos rellenar una variable `$precioEnvio` para cada una de las posibilidades anteriores.

* Amplía el programa poniendo un formulario previo que recoja los datos.

**2** - Haz un programa que escoja dos números al azar entre 1 y 6, simulando dos tiradas de un dado, y guardándolos en variables. El programa imprimirá las dos tiradas, y la suma de los dos valores.

* Amplía el programa descargando desde wikimedia commons [las imágenes de las seis caras de un dado](https://commons.wikimedia.org/wiki/Category:Dice_faces)
* Amplía el programa, para que salgan 8 tiradas de dado, que guardaremos en un array. Igualmente se mostrarán las imagenes de los 8 dados, y se mostrará la suma al final.
   

**3** - Escribe un programa que obtenga el año en que compramos un coche o moto, y muestre los años en que tiene que pasar las primeras 10  ITV: coches y motos pasan la ITV cada 2 años cuando el vehículo tiene entre 6 y 10 años, y luego cada año.

* amplía el programa con una lista desplegable, para preguntar si el vehículo es coche, moto o  ciclomotor. Los ciclomotores pasan la ITV cada dos años a partir del tercero

**4** - Haz una calculadora con un formulario que tenga los siguientes campos y un script que los procese e imprima el resultado:

* Dos operandos numéricos, que admitan decimales y negativos, entre -100 y +100 (usa `<input type="number">` con sus opciones)
* Cinco radios, para estas operaciones: sumar, restar, multiplicar, dividir y potencia.
* Un checkbox que indique si los números negativos se muestran en rojo.
* Un botón de enviar.
* Nota: con el checkbox solo se envía el parámetro si ha sido marcado. Usa `isset` para saber si el parámetro ha sido recogido.

##### B - Con funciones

**1** Haz un programa con una función que calcule el factorial de un número n, y muestre el resultado. (función de cáculo) `function factorial($n)`

**2** Haz un programa que pida una cadena y sustituya cualquier vocal por "i", con la misma capitalización. Usa una función de cálculo `function cambiarVocales($mensaje)` Ej: "El mensaje secreto." --> "Il minsiji sicriti."  
[[Posible solución]](https://repl.it/@vjfernandez/php-b-02)

**3** Haz un programa que pida una cadena y que imprima la cantidad de cada vocal que tiene. Contempla sólo a, e, i, o, u, A, E, I, O, U. 
Hacemos una función de cálculo, que acepte una cadena y devuelva un array asociativo, con las vocales en minúscula como claves y su frecuencia como valor.
Si la cadena no contiene una determinada vocal, estará también como clave del array, pero con valor 0.

**4** Haz un programa que acepte un número e indique si es primo o compuesto.
Usa una función de cálculo `function esPrimo($n)`

**5** haz un programa que imprima las tablas de multiplicar de los números 1 a 10... es decir, 10 tablas.  
Haremos una función de _presentación_ que genere la tabla de un número. Con un bucle for llamaremos varias veces a esa función. `function dibujarTabla($num)`

**6** Haz un programa que imprima **todos** los números entre 2 y un entero n dado por parámetro (Nombre del parámetro: `n`). Si no se da el parámetro se supondrá que n es 100, de tal manera que los primos se pinten en verde y los compuestos en rojo. 8 números en cada línea: una tabla de 8 datos por fila mejor
(ojo a la última fila).  

Utilizando el algoritmo de [la criba de eratóstenes](https://es.wikipedia.org/wiki/Criba_de_Erat%C3%B3stenes) devolveremos un array con índices numéricos entre 2 y n, cuyos valores serán `true` si el número es primo o `false` si no lo es.  
Usaremos una función de cálculo con un parámetro que indique el número maximo a comprobar (incluído) `eratostenes($n)`

[[Posible solución]](https://repl.it/@vjfernandez/php-b-06)

**7** Haz un programa que pida un texto, si quieres de varias líneas y que imprima la frecuencia de aparición de cada palabra que tiene, imprimiendo las palabras en orden alfabético, y su frecuencia de aparición, en una tabla.
Usa una función de cálculo `function cuentaPalabras($mensaje)` que devuelva un array asociativo con las palabras como claves, y su frecuencia como valor.
Las palabras van separadas por 1 o más espacios. Los signos de puntuación no deben ser tenidos en cuenta.  
Mira a ver si te sirve la función [explode](https://www.w3schools.com/php/func_string_explode.asp) del API. También hay varias funciones en el API para ordenar arrays.

[[Posible solución]](https://repl.it/@vjfernandez/php-b-07)

<span style="color:red">**8**: Tres en raya. Entregable. </span> Vamos a programar un juego de **tres en raya** desarrollado completamente en el servidor, y manteniendo el estado mediante parámetros. El estado permanecerá todo el rato en el cliente, mediante parámetros que el cliente inyectará en las URL.

El comportamiento esperado es el del [tic-tac-toe](https://www.google.com/search?q=tic+tac+toe) tradicional.

El desarrollo se realiza en un solo script de php (recomendado `index.php`), que puede requerir otro con funciones.

Parámetros:
* `tablero`: una cadena de 9 caracteres exactamente, que representa a las casillas del tablero, recorrido de izquierda a derecha y de arriba a abajo en el que `x` representa una ficha del jugador, `o` a una del jugador y un guión `-` representa una casilla libre.

```
Ej:
╔═══╦═══╦═══╗
║ X ║ O ║   ║
╠═══╬═══╬═══╣
║   ║ X ║   ║      ===>   tablero=xo--x---o
╠═══╬═══╬═══╣
║   ║   ║ O ║
╚═══╩═══╩═══╝
```

* `jugada`: Dos cifras decimales que indican las coordenadas (_fila, columna_) donde el usuario desea jugar su `x`. Ej: `jugada=02` indica que el usuario desea jugar en la casilla de la fila 0, columna 2.

El juego inicia al llamar al index.php sin parámetros, pintando un tablero vacío, en el que las 9 casillas son clicables, y llevarán de nuevo a index.php, pero con los parámetros tablero y jugada incializados, que representan el estado del juego, pero guardado en el cliente. Recomiendo usar imágenes para representar las jugadas, arregladas en una tabla, o sin tabla... al ser elementos de línea se alinearán una al lado de la la otra, o en cajas separadas.

Cuando index.php recibe una invocación con parámetros, deberá realizar la jugada del jugador, comprobar si lleva a empate o a ganar, y si no es así, decidir una jugada para el ordenador, ver si lleva a empate, o ganar, y generar una _response_ con el tablero actualizado.
En todo momento se mostrará un enlace para reiniciar la partida: basta con que dirija a index.php sin parámetros.

Se recomienda utilizar las siguientes funciones, como acordamos en clase:

* De lógica:
   * `parsearTablero($paramTablero)` → Recibe el parámetro que representa al tablero (la cadena de 9 caracteres) y devuelve un array de 3x3. Ej: `parsearTablero("xo--x---o")` devuelve `[["x","o", "-"], ["-", "x", "-"], ["-", "-", "o"]]`  
Puedes usar `null` en lugar de "-". En ese caso, isset devuelve false cuando se le pasa un valor null, igual que si el dato no tuviese valor. También es posible comparar con la constante null, aunque recomiendo isset. Ej: `if ($a[0][2] == null) `.
   * `anotarJugadaJugador($tablero, $fila, $col)` → Recibe el array tablero y la fila y la columna donde anotar la jugada. Devuelve un nuevo array con la jugada del jugador ya anotada.
   * `decidirJugadaOrdenador($tablero)` → A partir del array del tabero, escoger una casilla en blanco para la jugada del ordenador: debería escoger una jugada que conduzca a un tres en raya para el ordenador y/o frustar cualquier intento de 3 en raya del jugador. Como debería devolver fila y columna, recomiendo que devuelva un array de dos enteros, indizado o asociativo, como mejor te venga.
   * `obtenerEstadoPartida($tablero)` → Que indique cómo va la partida. Hay cuatro posibles estados: Ha ganado jugador, ha ganado ordenador, el tablero está lleno y hay empate, todavía quedan huecos y no ha ganado nadie.  
Representa estos cuatro estados con cuatro valores enteros. Recomiendo usar [constantes](https://www.w3schools.com/php/php_constants.asp) enteras para representar estos cuatro valores

* De presentación:
   * `pintarTablero($tablero)` → Recibe el array tablero, y dibuja el tablero en html: las casillas libres deben ser clicables. Si quieres hacer algún efecto de [animación](https://www.w3schools.com/css/css3_animations.asp) sobre la jugada del ordenador para dar un efecto de _retardo_ amplía los parámetros con la jugada del ordenador.
   
```css
<html>
<head>
<style> 
/* definimos una animación */
@keyframes fadein {
  from {opacity: 0;}
  to {opacity: 1;}
}

div#animado {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: fadein; /* aplicamos la animación a este div*/
  animation-delay: 2s; /*  dos segundos de retraso antes de que empiece */
  animation-duration: 4s; /* la animación durará 4s */
  opacity:0; 
}

</style>
</head>
<body>
   <div id="animado">Hey</div>
</body>
</html>
```

Si se te ocurre que pueda venir bien alguna otra función... adelante.

> Piensa en esto: Aunque pueda parecer que este programa no es gran cosa... este sistema que estamos explorando permite que una cantidad **ilimitada** de clientes jueguen una partida **simultánea** con el servidor.  
> Al no gastar memoria en el servidor de manera permanente, ni principal con variables de sesión, ni secundaria con bases de datos, la cantidad de partidas que se pueden mantener en un momento dado es ilimitada, condicionada tan solo por la capacidad de respuesta del servidor y la red.

##### C - Superglobales, formularios.

**1** Haz un script llamado `datadump.php` y colócalo directamente en la carpeta pública de tu servidor de desarrollo, que saque en tablas el contenido de $_GET, $_POST y $_REQUEST

**2** Haz un formulario que pida los siguientes datos, agrupados con fieldsets
* Su nombre de persona (name: nombre)
* Su email (name: email)
* Su teléfono (name: tlf)
* Si es hombre o mujer con un radio (name: genero, Values  "h" o "m") . 

* Si le gusta la pizza y si le gusta el brocoli con checkboxes (nombre: pizza, brocoli) 
* Un comentario de varias líneas (name: comentario)
* Su género musical favorito en una lista desplegable (nombre: musica, valores: "tango", "la-rosalia", "kpop")
* Sus colores favoritos, en una lista de opción multiple (nombre: color, valores: "azul", "rojo", "verde", "negro", "marengo"

**3** Haz que el propio formulario del ejercicio 2 imprima los valores recibidos, pero vamos a filtrarlos
1. con la función trim para quitar posibles espacios exteriores
2. con stripslashes, que quitará las barras de escape de PHP
3. con htmlspecialchars incluidas las comillas dobles, que convertirá carácteres especiales de html en entidades.

**4** Comprobamos que el usuario ha introducido campos requeridos:
Nombre y email.

**5** Comprobamos que el teléfono solo tiene números espacios y opcionalmente el signo + al principio con una expresión regular (función `preg_match`)

