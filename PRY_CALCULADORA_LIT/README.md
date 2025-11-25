# PRY_CALCULADORA_LIT

## Descripción

Proyecto de calculadora construido con componentes web y estilos locales (Bootstrap incluido en `vendor/`). Este proyecto demuestra el uso de Web Components y organización mediante ES Modules.

## Estructura

- `index.html` - interfaz principal
- `package.json` - dependencias y scripts
- `src/main.js` - arranque de la app
- `src/components/basic-calculator.js` - componente calculadora
- `vendor/bootstrap/` - Bootstrap local (CSS y JS)

## Requisitos

- Node.js y npm (recomendado si quiere usar `npm run dev`)
- Navegador moderno

## Cómo ejecutar

### Usando `npm run dev` (preferido si `package.json` lo incluye)

Desde la carpeta `PRY_CALCULADORA_LIT` ejecuta:

```powershell
npm install
npm run dev
```

Si no existe el script `dev`, puedes usar una de las alternativas abajo.

### Alternativa: Usar Live Server (VS Code)

1. Abre `PRY_CALCULADORA_LIT` en VS Code
2. Abre `index.html`
3. Click derecho → "Open with Live Server"

### Alternativa: Servidor simple con Python

Desde la raíz del repositorio o desde `PRY_CALCULADORA_LIT`:

```powershell
python -m http.server 8000
```

Abre `http://localhost:8000/PRY_CALCULADORA_LIT/index.html`.

## Notas

- Si usas Bootstrap local, comprueba las rutas en los enlaces `<link>` y `<script>` en `index.html`.
- Para depuración abre la consola del navegador (F12) y revisa errores.
