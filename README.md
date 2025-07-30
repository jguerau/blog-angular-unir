# Blog Angular UNIR

Proyecto realizado como parte de la **Actividad 5** de la asignatura _Full Stack Developer_ del Máster de UNIR.

## 📌 Objetivo

Crear una SPA en Angular que permita publicar noticias en un blog mediante un formulario y visualizarlas en un listado.

## 🛠️ Tecnologías usadas

- Angular 17
- TypeScript
- HTML5 + CSS3

## 🧩 Funcionalidad

- Formulario para introducir nuevas noticias
- Validación de campos vacíos
- Listado de noticias dinámico
- Datos iniciales cargados desde un array

## ▶️ Cómo ejecutar el proyecto

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/jguerau/blog-angular-unir.git
   cd blog-angular-unir
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Ejecutar la aplicación:
   ```bash
   ng serve
   ```

4. Abrir el navegador en:
   ```
   http://localhost:4200
   ```


## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── blog/
│   │   ├── blog.component.ts
│   │   ├── blog.component.html
│   │   └── blog.component.css
│   ├── interfaces/
│   │   └── noticia.ts
│   ├── app.module.ts
│   └── app.component.html
├── index.html
├── styles.css
```

## 📚 Autor

Josep Garcia – [https://github.com/jguerau](https://github.com/jguerau)
