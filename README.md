# UNIVERSIDAD DE LAS FUERZAS ARMADAS "ESPE"
**Autor**: Mauri Tandazo
**Correo**: matandazo3@espe.edu.ec


# PROGRAMACIÓN INTEGRATIVA CON COMPONENTES

## Descripción General

Este repositorio contiene proyectos educativos centrados en el aprendizaje y uso de la librería **Lit** (LitElement / lit-html) junto con **Vite** como herramienta de desarrollo y bundling. Los ejemplos muestran cómo construir Web Components con Lit, usar templates y propiedades reactivas, encapsular estilos con Shadow DOM y organizar el código con ES Modules.

Los proyectos están organizados en carpetas independientes y se pueden ejecutar localmente. Cuando los proyectos incluyen un `package.json` con scripts, se recomienda usar `npm run dev` (Vite) para levantar un servidor de desarrollo con HMR; como alternativa puede usarse Live Server o un servidor HTTP simple.

---

## Estructura del Repositorio

```
PROGRAMACION_INTEGRATIVA_COMPONENTES_P2/
├── README.md                          (Este archivo - Guía general)
├── lit-hola-mundo/                    (Ejemplos con Web Components / ES Modules)
│   └── README.md                      (Guía específica del proyecto)
└── PRY_CALCULADORA_LIT/               (Calculadora con Bootstrap 5 incluida)
	└── README.md                      (Guía específica del proyecto)
```

---

## Proyectos Incluidos

| Carpeta | Objetivo | Tecnologías |
|--------:|----------|-------------|
| `lit-hola-mundo` | Ejemplos básicos de componentes y módulos | HTML, CSS, JavaScript (ES Modules) y como utilizar LIT|
| `PRY_CALCULADORA_LIT` | Calculadora de ejemplo, usando componentes y Bootstrap local | Web Components, Bootstrap, ES Modules y la libreria LIT |

Para detalles específicos revisa los archivos `index.html` y el contenido de `src/` en cada carpeta.

---

## Requisitos Previos

- **Navegador moderno**: Chrome, Firefox, Edge o Safari
- **Python 3** (para servidor simple) o **Node.js** (opcional)
- **Editor de código**: VS Code (se recomienda la extensión Live Server)

---

## Cómo Ejecutar los Proyectos

### Opción 1: Live Server (VS Code)

1. Abre el proyecto en VS Code
2. Abre la carpeta del proyecto deseado (`lit-hola-mundo` o `PRY_CALCULADORA_LIT`)
3. Abre `index.html` y usa "Open with Live Server"

### Opción 2: Usar Python (PowerShell)

Abre una terminal en la raíz del repositorio y ejecuta:

```powershell
python -m http.server 8000
```

Luego accede en el navegador a:
- `http://localhost:8000/lit-hola-mundo/index.html`
- `http://localhost:8000/PRY_CALCULADORA_LIT/index.html`

### Opción 3: Node.js + http-server

Si tienes Node.js instalado puedes ejecutar:

```powershell
npx http-server -p 8080
```

Y luego abrir:
- `http://localhost:8080/lit-hola-mundo/index.html`
- `http://localhost:8080/PRY_CALCULADORA_LIT/index.html`

---

## Conceptos Clave Tratados

- Lit (LitElement / lit-html): creación de componentes con templates declarativos, propiedades reactivas, directivas de plantilla y el ciclo de vida propio de Lit
- Vite: servidor de desarrollo rápido, Hot Module Replacement (HMR), bundling eficiente y manejo de assets (recomendado para `npm run dev`)
- Web Components: definición de elementos personalizados, ciclos de vida y registro con `customElements.define()`
- Shadow DOM: encapsulación de estilos y aislamiento de la estructura interna del componente
- ES Modules: `import` / `export` para organizar el código en módulos reutilizables
- Comunicación entre componentes: paso de datos mediante propiedades y atributos, y uso de eventos personalizados (`CustomEvent`) para comunicación padre/hijo

---

## Solución de Problemas

- "Failed to load module script" → usa un servidor HTTP, no `file://`
- Rutas de Bootstrap o assets rotas → verifica que `vendor/bootstrap/` exista y las rutas sean relativas
- Eventos que no funcionan → abre la consola del navegador y revisa errores; asegúrate de usar `bubbles: true` y `composed: true` si es necesario

---

## Recomendación de Orden de Estudio

1. `lit-hola-mundo` → ejemplos básicos y aprendizaje de módulos
2. `PRY_CALCULADORA_LIT` → proyecto integrador con componentes y estilos

**Repositorio**: PROGRAMACION_INTEGRATIVA_COMPONENTES_P2
**Rama**: main
**Última actualización**: 2025-11-25

Este repositorio corresponde al segundo parcial de la materia de Programación Integrativa de Componentes Web.
