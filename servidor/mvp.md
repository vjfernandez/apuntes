# Arquitectura en el servidor

Es algo frecuente que los primeros ejemplos de construcción de una app web pasen por construir pequeñas aplicaciones web en las que la construcción de la respuesta sigue un algoritmo con puntos secuenciales 
en los que se mezclan con un critero meramente secuencial:
* El html, que define el contenido, y el css que define el estilo
* La lectura de los datos de entrada desde parámetros u otras fuentes
* La lógica de los distintos aspectos de la respuesta

No hay nada de malo en ello para el aprendizaje, pero para la construcción de apps del "mundo real es insuficiente", dado que este tipo de código es dificil de entender y mantener, y muy propenso que los errores que comentamos
sean difíciles de encontrar.

## MVP (MVC)
En la web funciona bien el patrón de construcción MVC o algunos derivados, como MVP, en los que se construye la app
en torno a una separación clara de responsabilidades ([Single Responsibility Principle - SRP, de los principios de programación ágil](https://es.wikipedia.org/wiki/Principio_de_responsabilidad_%C3%BAnica))

### Resumen
**No hay un estándar para hacer esto, y la forma de hacerlo ha ido evolucionando a lo largo de la historia.**

En clase hemos estudiado esquemas de diseño típicos para la aplicación del patrón:

ROUTER: El punto de entrada es un **router**, que distinguirá cuál es la operación a hacer, e invocará a un controlador

CONTROLADOR: El **controlador** es un fragmento de software, representado por:

  * una **clase con métodos** (recomendado) 
  * un **script en el ámbito global** (obsoleto. Estos scripts no deben poder ejecutarse individualmente, sino solo si son invocados desde el router).

El objetivo del controlador será aplicar la secuencia lógica de la acción que genera la respuesta http:
  * Leer datos de entrada: principalmente de los parámetros
  * Leer datos de memoria secundaria: principalmente desde BD
  * Aplicar algoritmos lógicos y generar un conjunto de *datos de salida*.
  * Pasar los datos de salida a la **vista**


VISTAS: Las vistas son fragmentos de codigo encargados de generar la parte estructural y de estilo de la salida (habitualmente html/css/multimedia), pero podría ser cualquier otra cosa (pdf/ json/xml, etc).  
En general, se utiliza una de estas tres técnicas:
    * Un script en el ámbito global que usa los datos de salida generados por el controlador. (desaconsejado)
    * Clases del lenguaje, que mediante la propia herencia del lenguaje implementan una plantilla principal con bloques que son representados por métodos abstractos que deben ser sustituidos en las clases derivadas. (Ok, pero el código resultante es poco elegante)
    * Un sistema de gestión de plantillas, con herencia de bloques basados en búfferes **RECOMENDADO**. Lo podemos construir nosotros, o como se hace en general, recurrir a uno estándar (Twig, Smarty, Moustache, etc...)

MODELO: La parte que se encarga de la gestión de los datos, incluyendo el propio SGBD y la BD.
En general, en el modelo incluiremos un mapeador, que traduzca la dinámica de objetos de la aplicación a operaciones de BD.
En el caso de las BD relacionales, el mapeador suele ser OBJETO-RELACIONAL (ORM)

El ORM lo podemos construir completamente utilizando el lenguaje de programación del servidor y el lenguaje de la BD, o bien podemos recurrir a productos que semiautomatizan estas operaciones (Hibernate, RedBeans, Eloquent...)
Si construimos nosotros el ORM por completo, entonces se suelen aislar las operaciones rutinarias de BD en algún tipo de clase auxiliar.

#### Frameworks
Un **framework** de MVC/MVP es un conjunto de software que proporciona una base para la construcción de apps siguiendo el patrón arquitectónico.

Permiten un desarollo rápido y eficaz de aplicaciones, así como un código limpio y estructurado (siempre y cuando los programadores escriban limpio y estructurado)

En contrapartida, el framework se debe utilizar para todas las operaciones, y no se debe prescincindir de él (eso complicaría el proyecto al tener dos o más patrones mezclados) y el coste de cambio es muy elevado (cambiar a otro sistema implicaría refactorizar todo el código).

Las actualizaciones de la app quedan también a merced de las actualizaciones del framework.



