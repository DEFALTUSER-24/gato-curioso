# gato-curioso

Es una app que facilita los datos de tus mascotas para que no te olvides los turnos con el veterinario, las vacunas que le diste y la comida que le das. Cuenta con una seccion de Catpedia que te muestra algunas razas, un mapa con las veterinarias y guia de alimentos. Podes agregar a todos tus gatos, colocarles una foto y todos sus datos personales. Cuenta con una sección de datos curiosos para que sepas todo sobre tus mascotas.

Diseño realizado por <a href="https://www.behance.net/bonayee" target="_blank">Bonazzola Ayelén</a>

<br>

## Frameworks
* jQuery Mobile v1.4.5 - https://jquerymobile.com/
* jQuery v1.12.3 - https://fontawesome.com

<br>

## Contenido
La App incluye las siguientes funciones:
* Posibilidad de registro e inicio de sesión.
* Agendar/modificar o eliminar mascotas.
* Por cada mascota se puede subir una foto e información personalizada.
* Posibilidad de agregar vacunas dadas a la mascota.
* Posibilidad de agregar visitas al veterinario de la mascota con su respectivo diagnostico.
* Posibilidad de agregar diferentes comidas.
* Pantalla de inicio con visitas al veterinario, vacunas recientes y boton con "datos curiosos".
* Sección "catpedia" con datos sobre razas, alimentos y posibilidad de buscar veterinarias cercanas.
* Posibilidad de editar información de perfil y guardarla en un servidor [^1].

<br>

## Instalación
Al clonar el repositorio hay 2 carpetas: "APP" y "Server-side":

###### Carpeta Server-side
Incluye todo el contenido del lado del servidor de la App.

* Crear una base de datos e importar "app.sql".
* Subir los archivos a un servidor (excluyendo "app.sql").

###### Carpeta APP
Incluye todo el contenido de la aplicación que el usuario instala en su teléfono.

* Abrir el archivo "script.js" y modificar la variable "serverUrl" en la linea 3 por la URL donde hayas subido los archivos de la carpeta "Server-side".
* Empaquetar la aplicación usando algún programa de empaquetado como <a href="https://websitetoapk.com/" target="_blank">Website 2 APK Builder</a>.

<br>

[^1]: El guardado de información online **no** incluye los datos de las mascotas, dicha información es guardada de forma local con localStorage.
