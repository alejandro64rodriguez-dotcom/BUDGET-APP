# Gestor de Presupuestos

Aplicación web para crear, buscar y consultar presupuestos de servicios. Incluye formulario con validación, listado con búsqueda, vista de detalle y resumen del presupuesto.

                             Live Demo [https://budget-appa.netlify.app/](https://budget-appa.netlify.app)
                         
## Tecnologías

- **JavaScript / TypeScript**: el código está escrito en TypeScript (`.ts` / `.tsx`)
- **React**: librería para construir la interfaz
- **Vite**: bundler y servidor de desarrollo
- **Vitest + Testing Library**: tests unitarios y de componentes
- **ESLint**: análisis estático del código

## Requisitos previos

- Node.js 18 o superior
- npm (o yarn / pnpm)

## Instalación y uso

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Previsualizar el build
npm run preview

# Linter
npm run lint
```

## Tests

```bash
# Modo watch (re-ejecuta al guardar)
npx vitest

# Todos los tests, una sola ejecución
npx vitest run

# Un archivo concreto
npx vitest run src/components/budget/BudgetTerms.test.tsx

# Cobertura
npx vitest run --coverage
```

La configuración de los tests está en `vite.config.ts` y el setup global en `src/test/setup.ts`.

## Arquitectura de carpetas

```
budget-app/
├── public/
├── src/
│   ├── assets/
│   │   ├── image/
│   │   │   └── header-background.png
│   │   └── logo/
│   │       └── logo-frontend.png
│   ├── components/
│   │   ├── budget/
│   │   │   ├── budgetDetail/
│   │   │   │   ├── ActivityTimeline.tsx
│   │   │   │   ├── BudgetDetail.tsx
│   │   │   │   ├── BudgetServiceItem.tsx
│   │   │   │   ├── BudgetTerms.test.tsx
│   │   │   │   └── BudgetTerms.tsx
│   │   │   ├── BudgetCard.tsx
│   │   │   ├── BudgetForm.tsx
│   │   │   ├── BudgetSearch.tsx
│   │   │   ├── BudgetSummary.tsx
│   │   │   └── FormField.tsx
│   │   └── Header.tsx
│   ├── data/
│   │   └── services.json
│   ├── pages/
│   │   ├── BudgetDetailPage.test.tsx
│   │   ├── BudgetDetailPage.tsx
│   │   ├── HomePage.test.tsx
│   │   └── HomePage.tsx
│   ├── serviceCard/
│   │   ├── ServiceCard.tsx
│   │   └── ToggleService.tsx
│   ├── test/
│   │   └── setup.ts
│   ├── types/
│   │   ├── budget.ts
│   │   └── service.ts
│   ├── utils/
│   │   ├── budget.ts
│   │   ├── budgetSearch.ts
│   │   └── validateBudgetForm.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

### Descripción de cada carpeta

| Carpeta | Contenido |
|---|---|
| `src/assets/` | Recursos estáticos: imágenes (`image/`) y logotipos (`logo/`). |
| `src/components/` | Componentes reutilizables de la interfaz. |
| `src/components/budget/` | Componentes específicos del dominio de presupuestos (detalle, línea de servicio, condiciones, cronología de actividad). |
| `src/data/` | Datos estáticos, como el catálogo de servicios (`services.json`). |
| `src/pages/` | Páginas completas que componen varios componentes (`HomePage`, `BudgetDetailPage`). |
| `src/test/` | Configuración global de los tests (`setup.ts`). |
| `src/types/` | Definiciones de tipos e interfaces de TypeScript (`budget.ts`, `service.ts`). |
| `src/utils/` | Funciones puras auxiliares: cálculos de presupuesto, búsqueda y validación del formulario. |

### Archivos de la raíz

| Archivo | Función |
|---|---|
| `src/main.tsx` | Punto de entrada: monta React en el DOM. |
| `src/App.tsx` | Componente raíz de la aplicación. |
| `src/index.css` | Estilos globales. |
| `vite.config.ts` | Configuración de Vite y de Vitest. |
| `tsconfig.json` | Configuración base de TypeScript, referencia a `tsconfig.app.json` y `tsconfig.node.json`. |
| `eslint.config.js` | Reglas de ESLint. |

## Convenciones

- Los componentes de React se nombran en **PascalCase** y viven en archivos `.tsx`.
- Las utilidades y los tipos se nombran en **camelCase** y viven en archivos `.ts`.
- Los tests se colocan junto al archivo que prueban con el sufijo `.test.tsx` / `.test.ts`.
- La lógica de negocio (cálculos, validaciones, búsquedas) va en `utils/`, fuera de los componentes, para que sea fácil de testear.
- Los tipos compartidos se definen en `types/` y se importan donde se necesiten.
