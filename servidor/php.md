# php

##### Ejercicios

###### Introductorios

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

###### Con funciones

**1** Haz un programa con una función que calcule el factorial de un número n, y muestre el resultado. (función de cáculo) `function factorial($n)`

**2** Haz un programa que pida una cadena y sustituya cualquier vocal por "i", con la misma capitalización. Usa una función de cálculo `function cambiarVocales($mensaje)` Ej: "El mensaje secreto." --> "Il minsiji sicriti."
**3** Haz un programa que pida una cadena y que imprima la cantidad de cada vocal que tiene. Contempla sólo a, e, i, o, u, A, E, I, O, U. 
Hacemos una función de cálculo, que acepte una cadena y devuelva un array asociativo, con las vocales en minúscula como claves y su frecuencia como valor.
Si la cadena no contiene una determinada vocal, estará también como clave del array, pero con valor 0.

**4** Haz un programa que acepte un número e indique si es primo o compuesto.
Usa una función de cálculo `function esPrimo($n)`

**5** haz un programa que imprima las tablas de multiplicar de los números 1 a 10... es decir, 10 tablas.  
Haremos una función de _presentación_ que genere la tabla de un número. Con un bucle for llamaremos varias veces a esa función. `function dibujarTabla()`

**6** Haz un programa que imprima **todos** los números entre 2 y un entero n dado por parámetro (Nombre del parámetro: `n`). Si no se da el parámetro se supondrá que n es 100, de tal manera que los primos se pinten en verde y los compuestos en rojo. 8 números en cada línea: una tabla de 8 datos por fila mejor
(ojo a la última fila).  

Utilizando el algoritmo de [la criba de eratóstenes](https://es.wikipedia.org/wiki/Criba_de_Erat%C3%B3stenes) devolveremos un array con índices numéricos entre 2 y n, cuyos valores serán `true` si el número es primo o false si no lo es.  
Usaremos una función de cálculo con un parámetro por defecto `eratostenes($n = 100)`

**7** Haz un programa que pida una cadena y que imprima la cantidad de cada vocal que tiene, y cuente el número de veces que aparece cada palabra, imprimiendo las palabras en orden, y su frecuencia de aparición, en una tabla.
Usa una función de cálculo `function cuentaPalabras($mensaje)` que devuelva un array asociativo con las palabras como claves, y su frecuencia como valor.
Las palabras van separadas por 1 o más espacios. Los signos de puntuación no deben ser tenidos en cuenta.  
Mira a ver si te sirve la función [explode](https://www.w3schools.com/php/func_string_explode.asp).

