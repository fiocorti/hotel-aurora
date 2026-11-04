# Hotel Aurora — React

Proyecto académico de hotel ficticio creado en React y compatible con la estructura de Create React App 5.1.0 (sin Vite).

## Requisitos
- Node.js y npm instalados.
- Visual Studio Code (recomendado).

## Instalación rápida desde el ZIP
```powershell
cd C:\Users\andre\Desktop\hotel-aurora-react
npm install
npm start
```
La página se abre en http://localhost:3000 (o el siguiente puerto libre).

## Si tu consigna exige ejecutar el generador Create React App 5.1.0
1. Ubicate en el Escritorio y ejecutá:
   ```powershell
   cd C:\Users\andre\Desktop
   npx create-react-app@5.1.0 hotel-aurora
   cd hotel-aurora
   npm install react-router-dom@6
   ```
2. Copiá el contenido de las carpetas `src` y `public` del ZIP sobre esas mismas carpetas del proyecto recién generado.
3. Mantené el `package.json` del proyecto generado, que ya tiene `react-scripts` configurado, y ejecutá `npm start`.

No es necesario copiar `node_modules`.

## Secciones
- Inicio: presentación del hotel.
- Acerca: información del proyecto.
- Contacto: formulario de demostración (no envía correos).
- Reservas: cuatro habitaciones, selección, validación de fechas, cantidad de personas y cálculo del total en ARS.

## Importante
Todas las habitaciones, descripciones y tarifas son ficticias. No existe servidor, base de datos ni pasarela de pagos; una reserva solo muestra una confirmación en pantalla.

## Subir a GitHub
1. Creá un repositorio **vacío** llamado `hotel-aurora-react` en GitHub, sin README, .gitignore ni licencia inicial.
2. Abrí una terminal en la carpeta del proyecto y ejecutá:
   ```powershell
   git init
   git branch -M main
   git add .
   git commit -m "Proyecto Hotel Aurora en React"
   git remote add origin https://github.com/TU-USUARIO/hotel-aurora-react.git
   git push -u origin main
   ```
3. Reemplazá `TU-USUARIO` por tu usuario de GitHub. Si el generador ya había iniciado Git, `git init` no borra el historial.
4. No subas `node_modules`, contraseñas, ni archivos `.env`.

Para próximos cambios: `git add .`, `git commit -m "Descripción"` y `git push`.
