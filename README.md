# [Conversor de precios de dolares a bolibares]

"Aplicación web para convertir los precios de los productos que vende la casa de los granos de dolares a bolivares, desarrollada en PHP y MySQL"]

---

## 🛠️ **Requisitos Previos**
Antes de comenzar, asegúrate de tener instalado:
- [XAMPP](https://www.apachefriends.org/es/index.html) (versión 8.1 o superior).
- Navegador web (Chrome, Firefox, Edge, etc.).
- Editor de código (VS Code, Sublime Text, PHPStorm, etc.).
- [Git](https://git-scm.com/) (opcional, pero recomendado).

---

## 🚀 **Instalación Paso a Paso**

### 1. **Clonar o Descargar el Proyecto**
   - **Opción A (Git):**
     ```bash
     https://github.com/minombreesjorge/CDG.git
     ```
   - **Opción B (Descarga manual):**
     - Descarga el ZIP desde GitHub y descomprímelo.

### 2. **Mover el Proyecto a XAMPP**
   - Copia la carpeta del proyecto a la carpeta `htdocs` de XAMPP:
     - **Windows:** `C:\xampp\htdocs\CDG`
     - **Linux/Mac:** `/opt/lampp/htdocs/CDG`

### 3. **Iniciar Servicios en XAMPP**
   - Abre el **Panel de Control de XAMPP**.
   - Inicia los servicios:
     - **Apache** (servidor web).
     - **MySQL** (base de datos).
   - Verifica que ambos módulos estén en verde (activos).

### 4. **Configurar la Base de Datos**
   - Accede a phpMyAdmin desde: http://localhost/phpmyadmin.
   - Crea una nueva base de datos:
     - Nombre: `casa_granos`.
     - Colación: `utf8mb4_general_ci`.
   - Importa el archivo SQL (si existe en el proyecto):
     - Ve a la pestaña **Importar**.
     - Selecciona el archivo `.sql` de la carpeta raiz del proyecto.
     - Haz clic en **Importar**.

---

## 🌐 **Acceder al Proyecto**
- Abre tu navegador y visita:
  ```bash
  http://localhost/CDG
