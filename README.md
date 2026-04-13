# 📋 Lista de Publicaciones

Aplicación web construida con React y Vite que consume la API pública JSONPlaceholder para mostrar publicaciones de forma dinámica. Proyecto desarrollado como ejercicio de aprendizaje para practicar componentes, hooks y consumo de APIs.

---

## ✨ Funcionalidades

- Obtiene 50 publicaciones desde la API de JSONPlaceholder al cargar la app
- Buscador en tiempo real que filtra publicaciones por título
- Paginación de 10 publicaciones por página con navegación Anterior / Siguiente
- Contador de resultados que se actualiza según la búsqueda activa
- Estado de carga mientras se esperan los datos de la API
- Manejo de errores si la petición falla
- Diseño dark mode

---

## 🛠️ Stack tecnológico

| Tecnología                | Uso                              |
| ------------------------- | -------------------------------- |
| React 18                  | Librería principal de UI         |
| Vite                      | Bundler y servidor de desarrollo |
| JavaScript (ES6+)         | Lenguaje base                    |
| JSONPlaceholder           | API pública de datos de prueba   |
| CSS-in-JS (inline styles) | Estilos del proyecto             |

---

## 📁 Estructura del proyecto

```
lista-publicaciones/
├── src/
│   ├── main.jsx          # Punto de entrada de la app
│   ├── App.jsx           # Componente raíz, maneja el estado del buscador
│   ├── SearchBar.jsx     # Input de búsqueda controlado
│   ├── PostsList.jsx     # Lógica de API, filtrado y paginación
│   ├── PostCard.jsx      # Tarjeta visual de una publicación
│   └── index.css         # Estilos globales (dark mode)
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Cómo ejecutar el proyecto

### Requisitos previos

- [Node.js](https://nodejs.org) v18 o superior
- npm (incluido con Node.js)

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/MiguelAngeltxt/lista-publicaciones.git

# 2. Entrar a la carpeta
cd lista-publicaciones

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev
```

Abre tu navegador en `http://localhost:5173` para ver la aplicación.

---

## 🔌 API utilizada

**JSONPlaceholder** — `https://jsonplaceholder.typicode.com`

| Endpoint | Método | Descripción                          |
| -------- | ------ | ------------------------------------ |
| `/posts` | GET    | Devuelve 100 publicaciones de prueba |

Cada publicación tiene la siguiente forma:

```json
{
  "id": 1,
  "userId": 1,
  "title": "sunt aut facere repellat provident occaecati",
  "body": "quia et suscipit suscipit recusandae..."
}
```

---

## 🧠 Conceptos aplicados

- **Componentes** — la UI está dividida en piezas reutilizables e independientes
- **useState** — manejo de estado local para posts, loading, error y página actual
- **useEffect** — ejecución de la petición a la API al montar el componente, y reset de página al buscar
- **Props** — comunicación de datos entre componentes padre e hijo
- **async/await** — manejo de la asincronía al consumir la API
- **Elevación de estado** — el estado del buscador vive en `App.jsx` y se comparte hacia abajo
- **Renderizado condicional** — distintas vistas según el estado (cargando, error, resultados vacíos)

---

## 👤 Autor

Desarrollado por **MIGUEL ANGEL FALCON VALENZUELA**  
[GitHub](https://github.com/MiguelAngeltxt)
