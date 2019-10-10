# php
## Introducción

### Ejercicios

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

  