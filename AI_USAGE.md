# AI_USAGE.md — Uso de IA en el proyecto ZTRACK

## 1. En qué partes usé IA y cómo

Durante el desarrollo de **ZTRACK**, utilicé herramientas de inteligencia artificial (principalmente **ChatGPT**) para:

- 🏗️ **Diseñar la estructura del proyecto** (organización de carpetas y separación de frontend, backend y base de datos).  
- 🎨 **Diseñar componentes de interfaz** en **React** con **TailwindCSS**, tomando inspiración de ejemplos sugeridos por la IA.
- 🧰 **Redactar documentación técnica**, incluyendo este archivo y el README principal.

---

## ✍️ 2. Qué cosas decidí hacer manualmente

- ⚙️ **Conexión y pruebas locales con MongoDB** (ajustes manuales en `.env` y URIs).  
- 🧩 **Integración final entre frontend y backend**, especialmente en el manejo de tokens y fetchs protegidos.  
- 💅 **Ajustes de estilo visual y estructura del panel de estudiantes y notas**.  
- 🧠 **Refactorización y depuración** del código para adaptarlo a mi propio flujo y buenas prácticas.  
- 🧾 **Validaciones lógicas en el backend** (por ejemplo, verificar duplicados de notas y campos requeridos).

---

## ⚠️ 3. Errores o limitaciones detectadas en la IA

- ❌ A veces la IA generó código que **no coincidía exactamente** con la estructura de datos real (por ejemplo, usaba `data.exams` en lugar de `data.examenes`).  
- 🧩 Algunas sugerencias de Docker tenían versiones de Node.js **no compatibles con Vite 6**, lo que causó errores que tuve que corregir manualmente.  
- 💬 La IA no siempre detecta las dependencias instaladas, por lo que tuve que validar manualmente los `package.json`.

---

## 💡 4. Ejemplo de una mejora sugerida por la IA que implementé

La IA sugirió **migrar el Dockerfile del frontend a `node:22-alpine`** porque Vite requería una versión de Node.js 20.19+ o superior.  
Antes usaba `node:18-alpine`, lo cual generaba el error:

