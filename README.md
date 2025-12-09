# Chaskys Delivery App

El frontend de una aplicación de delivery para repartidores construida con **React**. 
El proyecto forma parte del examen final del curso de Desarrollo de Interfaces 2.

## ✨ Características Principales

* **Interfaz de Usuario Intuitiva:** Diseño limpio y fácil de usar para una mejor experiencia de compra.
* **Pedidos activos** Muestra los pedidos actuales con opción a aceptar.
* **Historial de pedidos:** Muestra el historial de pedidos y sus detalles.
* **Usuario guardado en localStorage:** Inicio se sesión y opción de editar peril utilizando localStorage.
* **Recuperación de contraseña:** Mediante un código de 6 dígitos.

---

## 🛠️ Instalación y Configuración

Sigue estos pasos para poner en marcha el proyecto en tu entorno local.

### Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/). Se recomienda la versión **v22 o superior**.

Debes tener una cuenta y token en [Mapbox](https://www.mapbox.com/) para visualizar los mapas en los pedidos. Estos deben estar en un archivo .env (Puedes encontrar el ejemplo en el archivo .env.example)

### Pasos de Instalación

1.  **Clonar el Repositorio:**
    ```sh
    git clone https://github.com/fernandoruiz2016/Chaskys
    ```

2.  **Acceder al Directorio del Proyecto:**
    ```sh
    cd chaskys
    ```

3.  **Instalar Dependencias:**
    ```sh
    npm install
    ```

4.  **Ejecutar la Aplicación en Modo Desarrollo:**
    ```sh
    npm run dev
    ```

> La aplicación se ejecutará en **http://localhost:5173** (o el puerto que te indique la consola).

---

## 🏗️ Estructura del Proyecto

Esta es una vista general de los directorios y archivos más importantes:

* `src/`: Contiene el código fuente principal de la aplicación.
    * `components/`: Componentes reutilizables de UI (pedidos, foto de perfil, headers, etc.).
    * `pages/`: Componentes que representan las vistas principales (Home, profile, login, etc.).
    * `App.jsx`: Componente principal de la aplicación (maneja el routing).

---

## 💻 Tecnologías Utilizadas

* **React:** Biblioteca de JavaScript para construir interfaces de usuario.
* **Vite:** Herramienta de construcción rápida para el desarrollo frontend.
* **JavaScript:** Lenguaje de programación.
* **Figma:** Herramienta para el diseño de la página web.