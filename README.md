# Lyata-VueJS-Talwind

Requeremientos: 
-Node.JS 20

### Pasos seguidos durante el desarrollo

1. Inicio de proyecto Vue con Node
`npm create vite@latest lyata-project -- --template vue`
2. Con el editor añadimos Talwind, PostCSS, AutoPrefixer y el renrutador Vue en las dependencias de desarrollo en el archivo package.json
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