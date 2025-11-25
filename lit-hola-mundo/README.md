# lit-hola-mundo

## Descripción

Pequeño proyecto de ejemplo que contiene componentes y módulos ES simples. Ideal para aprender la creación de Web Components y la organización con ES Modules.

## Estructura

- `index.html` - entrada del ejemplo
- `src/main.js` - punto de arranque
- `src/components/` - componentes (`hola-mundo.js`, `suma-numeros.js`)

## Requisitos

- Node.js (opcional)
- npm (opcional)
- Navegador moderno

## Cómo ejecutar

### Opción A — Usando `npm run dev` (si existe script en `package.json`)

Desde la carpeta `lit-hola-mundo` ejecuta:

```powershell
npm install
npm run dev
```

Si `package.json` no define `dev`, revisa la sección "Alternativas" más abajo.

### Opción B — Usando Live Server (VS Code)

1. Abre `lit-hola-mundo` en VS Code
2. Abre `index.html`
3. Click derecho → "Open with Live Server"

### Opción C — Servidor simple con Python

Desde la raíz del repositorio o desde `lit-hola-mundo`:

```powershell
python -m http.server 8000
```

Abre `http://localhost:8000/lit-hola-mundo/index.html`.

## Notas

- Si al usar módulos aparece "Failed to load module script", asegúrate de estar sirviendo los archivos vía HTTP (no `file://`).
- Si no existe script `dev`, puedes usar `npx http-server` o Live Server como alternativas.
