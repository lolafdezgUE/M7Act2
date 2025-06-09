# Práctica 2 - API de Películas

## Descripción

Este proyecto es una API RESTful para la gestión de películas, desarrollada con Node.js y Express. Permite crear, consultar, actualizar y eliminar películas almacenadas en un archivo JSON.

---

## Requisitos previos

- Node.js (v18 o superior recomendado)
- npm

---

## Instalación

1. Clona el repositorio o descarga el código.
2. Instala las dependencias:

   ```bash
   npm install
   ```

---

## Configuración

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```
PORT=3000
FILMS_DIR=./data/films.json
```

- `PORT`: Puerto en el que se ejecutará el servidor.
- `FILMS_DIR`: Ruta al archivo JSON donde se almacenan las películas.

---

## Ejecución

En la raíz del proyecto, ejecuta:

```bash
npm start
```

El servidor se iniciará y estará disponible en `http://localhost:3000` (o el puerto que hayas configurado).

---

## Endpoints

Todos los endpoints están bajo el prefijo `/films`.

### Obtener todas las películas

- **GET** `/films/`
- **Respuesta:** Array de películas.

### Obtener una película por ID

- **GET** `/films/:id`
- **Respuesta:** Objeto de la película.

### Crear una nueva película

- **POST** `/films/`
- **Body:**  
  ```json
  {
    "titulo": "Nombre de la película",
    "descripcion": "Descripción opcional",
    "fecha_estreno": "YYYY-MM-DD",
    "director": "Nombre del director"
  }
  ```
- **Respuesta:** Objeto de la película creada.

### Actualizar una película

- **PUT** `/films/:id`
- **Body:**  
  ```json
  {
    "titulo": "Nuevo título",
    "descripcion": "Nueva descripción",
    "fecha_estreno": "YYYY-MM-DD",
    "director": "Nuevo director"
  }
  ```
- **Respuesta:** Objeto de la película actualizada.

### Eliminar una película

- **DELETE** `/films/:id`
- **Respuesta:** Mensaje de confirmación.

---

## Notas

- Todos los campos obligatorios deben estar presentes y cumplir las validaciones indicadas.
- Si el archivo JSON no existe, se creará automáticamente al agregar la primera película.
- Los errores y validaciones se devuelven en formato JSON.

---

## Autor

- Lola Fernández Gordillo