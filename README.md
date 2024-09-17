# Lyata-VueJS-Talwind

### Pasos seguidos durante el desarrollo

1. Inicio de proyecto Vue con Node
`npm create vite@latest lyata-project -- --template vue`
2. Con el editor añadimos Talwind, PostCSS, AutoPrefixer Axios (Para consultar API) y el renrutador Vue (Para la navegación) en las dependencias de desarrollo en el archivo package.json
```
"devDependencies": {
    "@vitejs/plugin-vue": "^5.1.2",
    "autoprefixer": "^10.4.20",
    "axios": "^1.7.7",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.11",
    "vite": "^5.4.1",
    "vue-router": "^4.4.5"
  }
```
3. Instalamos las dependencias
`npm install`
4. Iniciamos las configuraciones de Tailwind
`npx tailwindcss init -p`
5. Reemplazamos el contenido de .src/style.css por las directivas:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
6. Editamos el archivo App.vue para que tenga el menú principal, el visor del enrutador y las respuestas de la API. Adicionalmente, en este archivo se encuentra el método de consulta de la API.
7. Editamos el archivo main.js para que incluya el enrutador
8. En el directorio ".src/components/" añadimos todos los componentes los cuales en este caso son formularios para la consulta de la API

### Pasos para ejecución

Requeremientos: Node.JS 20

1. Clonar el repositorio: `git clone https://github.com/JoseDavid97/Lyata-VueJS-Talwind.git`
2. Ingresar al directorio: `cd Lyata-VueJS-Talwind`
3. Instalar dependencias: `npm install`
4. Ejecutar en modo desarrollo: `npm run dev`
5. Acceder a la App con la URL por defecto: http://localhost:5173/ - http://127.0.0.1:5173/np