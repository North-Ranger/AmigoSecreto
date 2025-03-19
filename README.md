# Amigo Secreto

Este challenge es una aplicación en JavaScript que permite a los usuarios ingresar nombres de sus amigos, mostrarlos en una lista y realizar un sorteo aleatorio entre ellos.

## Características
- Agregar nombres de amigos a una lista.
- Mostrar la lista de amigos ingresados.
- Realizar un sorteo aleatorio de un amigo de la lista.
- Reiniciar el juego tras el sorteo.

## Tecnologías Utilizadas
- **HTML** para la estructura de la interfaz.
- **CSS** para el diseño visual (opcional, no incluido en el código).
- **JavaScript** para la lógica de la aplicación.

## Cómo Usar
1. Ingresar un nombre en el campo de entrada.
2. Hacer clic en el botón "Agregar Amigo" para añadirlo a la lista.
3. Ver la lista de amigos ingresados.
4. Hacer clic en "Sortear Amigo" para seleccionar uno aleatoriamente.
5. Después del sorteo, la lista se vaciará automáticamente para iniciar un nuevo juego.
Nota: El resultado del sorteo anterior seguirá apareciendo, solo hay que ingresar un nombre en el campo de entrada y hacer clic en "Agregar Amigo", esto borrará el anterior resultado

## Explicación del Código
- **`asignarTextoElemento(elemento, texto)`**: Modifica el contenido de un elemento HTML.
- **`agregarAmigo()`**: Agrega un amigo a la lista, validando que el campo no esté vacío.
- **`mostrarAmigos()`**: Muestra la lista de amigos en pantalla.
- **`sortearAmigo()`**: Selecciona un amigo aleatorio de la lista y muestra el resultado.
- **`reiniciarJuego()`**: Borra la lista de amigos y limpia la interfaz después del sorteo.
- **`limpiarCaja()`**: Vacía el campo de entrada después de cada ingreso.

## Validaciones Implementadas
- Evita que se agreguen nombres vacíos o con solo espacios en blanco.
- No permite realizar un sorteo si la lista está vacía.

## Mejoras Posibles
- Agregar estilos CSS para mejorar la interfaz.
- Permitir eliminar nombres individuales de la lista antes de realizar el sorteo.
- Implementar un almacenamiento local para conservar la lista después de recargar la página.

## Autor
John Alejandro Morales Useche

