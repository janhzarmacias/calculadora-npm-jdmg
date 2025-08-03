# 🧮 Calculadora Visual - JDMG

Este es un aplicativo visual construido con HTML, CSS y JavaScript que permite realizar operaciones aritméticas básicas: suma, resta, multiplicación y división.  
Forma parte del trabajo para aplicar los principios de **Clean Code en JavaScript**.

---

##  Funcionalidades

- Interfaz visual amigable
- Operaciones: suma, resta, multiplicación y división
- Manejo de errores para entradas inválidas y división entre cero

---

##  Principios de Clean Code Aplicados

Los principios aplicados fueron tomados de la guía:  
https://github.com/andersontr15/clean-code-javascript-es

| Principio | Descripción | Archivo |
|----------|-------------|---------|
|  Nombres descriptivos | Se usaron nombres de funciones y variables claros como `obtenerNumero`, `operar`, `ejecutarOperacion`, `numero1`, etc. | `app.js` |
|  No repetir código (DRY) | Se evita duplicar lógica al centralizar la ejecución de operaciones en un único objeto `operaciones` | `app.js` |
|  Funciones pequeñas | Cada función tiene una sola responsabilidad clara: capturar datos, procesar operación, mostrar resultado | `app.js` |
|  Separación de responsabilidades | HTML solo estructura, CSS da estilo, JS maneja lógica — cada uno está en su archivo | `index.html`, `style.css`, `app.js` |
|  Sin valores mágicos | Se validan operaciones y errores con condiciones explícitas y controladas | `app.js` |
|  Manejo de errores claro | Se controla cuando la entrada no es un número o cuando hay división por cero | `app.js` |

---

##  Archivos

- `index.html` → Estructura de la interfaz
- `style.css` → Estilos y diseño visual
- `app.js` → Lógica de la calculadora con clean code

---

##  Cómo ejecutar

1. Abrir `index.html` con doble clic o en navegador
2. Ingresar dos números
3. Seleccionar una operación
4. Ver el resultado en pantalla

---

##  Autor

**Janhzar Daniel Macias Garcia**
