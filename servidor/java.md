# Java

Usaremos java, un lenguaje que ya conocemos para aprender los puntos fundamentales de la programación en servidor de aplicaciones web:

> * Un script web recibe una **petición http** y su objetivo es generar una **respuesta http**.
> * La peticion http puede contener **parámetros**, que vendrán en la URL o en el cuerpo de la petición.
> * Los sistemas de programación pueden ayudarnos a identificar al cliente enviando una **cookie de sesión**, y a la vez crean un
>   espacio de memoria para almacenar datos asociados a la sesión del cliente
> * Se tiene acceso a memoria secundaria para almacenar y recuperar datos, habitualmente mediante **sistemas gestores de bases de datos**

## Servlets

Un servidor de aplicaciones web de Java proporciona el modelo de programación de **Servlets**,
que son clases de Java capaces de procesar una petición **http** y generar una respuesta, al estilo del mecanismo CGI tradicional, pero con algunas ventajas:
* Tienen un buen rendimiento
* Se ejecutan en el proceso del servidor, sin crear procesos independientes.
* Al estar escritos en Java, son independientes de la plataforma.
* Los mecanismos de seguridad de Java están incorporados, lo que permite una confiabilidad de las aplicaciones.
* Toda la funcionalidad de Java SE está a disposición de las aplicaciones web de Java, además de mecanismos específicos.
* Los servidores de aplicaciones web en java aislan ejecutan las aplicaciones **contenedorizadas**: cada aplicación se ejecuta en un contenedor con un marco de seguridad que restringe el acceso de la aplicación solo a su carpeta y a recursos permitidos.

> Son servidores de Java **Apache [Tomcat](https://tomcat.apache.org/), [Paraya](https://www.payara.fish/), IBM [Websphere](https://www.ibm.com/es-es/marketplace/java-ee-runtime), Oracle [Weblogic](https://www.oracle.com/es/middleware/weblogic/), Red Hat [WildFly](https://wildfly.org/)**.

Para la confección de un servlet, los programadores disponen de toda la potencia de Java SE y además de **Java EE** (Enterprise Edition), que son una serie de clases agrupadas
en paquetes dirigidas a la programación de aplicaciones empresariales, incluidas las aplicaciones web. Las clases de Java EE
están integradas en el servidor web Java, y nuestros servlets pueden usarlas.

> [Api de Java EE 7](https://docs.oracle.com/javaee/7/api/toc.htm)

### Estructura

Un servlet debe heredar de la clase `HttpServlet`. Esta clase se encuentra en el paquete `javax.servlet.http`.

Es una clase abstracta, cuyas subclases serán un servlet que podrá ejecutarse en un servidor de aplicaciones de Java.

Una subclase de `HttpServlet` debe hacer override de al menos un método, usualmente uno de éstos:
    
   * doGet, si el servlet soporta peticiones http con el método get GET
   * doPost, para http POST
   * doPut, para http PUT
   * doDelete, para http DELETE
   * init y destroy, para inicializar y liberar recursos que deben ser utilizados durante todo el ciclo de vida del servlet
   * getServletInfo, que utiliza el servlet para proporcionar información sobre sí mismo.

También existe un método llamado `service` que es el que recoge las peticiones http, y según el método que utilicen la despacha a uno de los métodos de nombre `doXXXX`. No suele haber una buena razón para hacer un override de `service`.

Los servlets se ejecutan típicamente en un entorno concurrente con múltiples hilos de ejecución, así que sé consciente de que un servlet debe manejar peticiones http concurrentemente y sé cuidadoso con el acceso a recursos compartidos.

#### Ejemplo de servlet

```java
// Import required java libraries
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

// Extend HttpServlet class
public class HelloWorld extends HttpServlet {
 
   @Override
   public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
      
      // Set response content type
      response.setContentType("text/html");

      // Actual logic goes here.
      PrintWriter out = response.getWriter();
      out.println("<h1>" + message + "</h1>");
   }

}
```

* el método `doGet` reemplaza el heredado
* Recibe como parámetro un parámetro que representa a la petición y otro a la respuesta, de las clases `HttpServletRequest` y `HttpServletResponse`.
* La petición contiene, entre otros:
  * Parámetros, que se pueden obtener con `request.getParameter(_nombre_)`
  * Campos de cabecera
  * Cookies enviadas desde el cliente
* La respuesta que se enviará al cliente contiene, entre otros:
  * El código de respuesta (200 Ok, si no se indica otro)
  * Campos de cabecera
  * Cookies fijadas por el servidor
  * El cuerpo de la respuesta, que se escribe mediante el stream
    asociado a `response.getWriter()`, y que por costumbre se recoge en una referencia llamada `out`.

### Parámetros

Los parámetros se parsean automáticamente, tanto de la URL de la petición como del cuerpo de la petición.

#### De campos de formulario
Los servlets manejan los datos de formulario parseándolos automáticamente, tanto si vienen por el método GET como por el método POST.

Los valores de los campos entran al servlet como parámetros y pueden ser obtenidos mediante estos métodos del `request`, entre otros:

* getParameter() − Obtiene el valor de un parámetro, o null si no se recibió ese parámetro.

* getParameterValues() − Si el parámetro aparece más de una vez o devuelve múltiples valores

* getParameterNames() − Devueve una colección con el nombre de todos los parámetros.

#### Parámetros en la URL

Los parámetros pueden venir asociados a la URL.  
La zona de parámetros en la URL empieza con `?` y a continuación vienen los parámetros en el formato _nombre=valor_, con `&` como separador. Ej:

```
http://dominio.com/recurso?id=3&termino=hola+mundo
```

En este caso, hay dos parámetros en la URL: `id` y `termino`.

Un formulario con método GET generará una URL en este formato. También se pueden asociar directamente este tipo de URLs a un enlace `<a>` u otro elemento clicable.

Como la URL no admite espacios ni símbolos no ASCII, se utiliza la codificación **URLencode**, en la que los espacios son sustituidos por `+` y los carácteres no ASCII por los valores hexadecimales de cada byte que los compone, precedidos de un `%`. Ej: La url de la página de wikipedia para la entrada **Cigüeñal** contiene dos carácteres no ASCII: la ü y la ñ. Su codificación URLencode sería:
```
https://es.wikipedia.org/wiki/Cig%C3%BCe%C3%B1al
```
`%C3%BC` es la codificación de la *ü* y `%C3%B1` la de la *ñ*.

## JSP

Java Server Pages es un sistema para escribir scripts en java que generan una respuesta a una petición http con una sintaxis más sencilla que un servlet.

Un jsp es transpilado a un servlet

> Transpilar: compilar de un lenguaje de alto nivel a otro lenguaje de alto nivel. (Ej: JSP --> Servlet de Java)

En JSP, cualquier texto que no esté encerrado entre marcas especiales es enviado directamente al cliente.

### Marcas

* `<%` ... `%>`: Un fragmento de código que será enviado al interior **del método principal del servlet**. Admite por lo tanto variables, que serán transpiladas como <mark>variables locales</mark>, y sentencias de código, que serán enviadas al interior del método.
* `<%!` ... `%>`: Un fragmento de código que será enviado al interior **de la clase del servlet**. Admite por lo tanto variables, que serán transpiladas como <mark>variables de instancia</mark> o de clase si llevan el modificador static, y definiciones de métodos formarán parte de la clase del servlet, pero no sentencias sueltas.
* `<%=`expresión`%>`: Entre estas marcas debe haber una _expresión_. La expresión se evalúa y el resultado se envia en la respuesta hacia el cliente. Es equivalente a un `out.print(`expresión`);`

#### Directivas

JSP tiene algunas directivas con significado especial. Por ejemplo.

* `<%@page import="..."%>` Importa una clase o paquete 

### Objetos implícitos

Existen varios objetos creados de manera automática en un jsp y que se pueden usar directamente. Entre ellos:

* `request`: un objeto de tipo `HttpServletRequest` que representa a la petición que se ha recibido en el servidor de aplicaciones java. De este objeto podemos extraer _parámetros_, _cookies_ y otra información sobre la petición.
* `response`: un objeto de tipo `HttpServletResponse` que representa a la respuesta que el servidor envia al cliente, y que nosotros estamos construyendo con el JSP.
* `out`: un manejador de stream que admite los métodos print y println para añadir datos al cuerpo de la respuesta.
* `session`: representa a la sesión de un cliente con nuestra aplicación. 

### Sesiones
El manejo de sesión en JSP es automático: se envia una cookie automáticamente con un número de serie, y se crea una variable llamada **session** que representa a la sesión del cliente, en la que se pueden colocar atributos

> **Cookie** pareja de **clave** y **valor** que un servidor puede enviar a un cliente en la cabecera de una respuesta http.  
> Una vez que el servidor manda una cookie al cliente, éste la envía de nuevo en cada petición a ese mismo servidor, hasta que la cookie
> caduca, o el servidor devuelve en la cabecera de alguna respuesta orden para invalidad la cookie.

* Los métodos `setAttribute` y `getAttribute` establecen y obtienen atributos de sesión. Los atributos se manejan con referencias a Object. Si un atributo no existe, getAttribute devuelve null
* El método `invalidate` destruye la sesión con los atributos y se deja de recordar la sesión del cliente. La sesión también termina cuando el usuario cierra el navegador, porque la cookie de sesión se destruye.

### Acceso a datos.
Todos los mecanismos de java están disponibles para acceder a datos con un JSP.

Nosotros utilizaremos [jdbc](https://docs.oracle.com/javase/tutorial/jdbc/index.html), con sentencias preparadas para evitar [inyecciones de SQL](https://es.wikipedia.org/wiki/Inyecci%C3%B3n_SQL).
