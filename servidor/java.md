# Java

## Servlets

Un servidor de aplicaciones web de Java proporciona el modelo de programación de **Servlets**,
que son clases de Java capaces de procesar una petición **http** y generar una respuesta, al estilo del mecanismo CGI tradicional, pero con algunas ventajas:
* Tienen un buen rendimiento
* Se ejecutan en el proceso del servidor, sin crear procesos independiente.
* Al estar escritos en Java, son independientes de la plataforma.
* Los mecanismos de seguridad de Java están incorporados, lo que permite una confiabilidad de las aplicaciones.
* Toda la funcionalidad de Java SE está a disposición de las aplicaciones web de Java, además de mecanismos específicos.

> Son servidores de Java **Apache Tomcat, Oracle Glassfish, Paraya, IBM Websphere, Oracle Weblogic, Red Hat WildFly**.

Para la confección de un servlet, los programadores disponen de toda la potencia de Java SE y además de **Java EE** (Enterprise Edition), que son una serie de clases agrupadas
en paquetes dirigidas a la programación de aplicaciones empresariales, incluidas las aplicaciones web. Las clases de Java EE
están integradas en el servidor web Java, y nuestros servlets pueden usarlas.

> [Api de Java EE 7.](https://docs.oracle.com/javaee/7/api/toc.htm)

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

## JSP (Java Server Pages)