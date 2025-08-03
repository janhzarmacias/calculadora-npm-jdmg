# 🧮 Calculadora NPM - JDMG

Este proyecto implementa una calculadora modular en Node.js.  
Cada operación (suma, resta, multiplicación y división) está separada en su propio módulo, y se ha integrado una interfaz visual adicional como aplicación pequeña, aplicando principios de **clean code**.

---

## Prácticas incluidas

| Parte | Descripción | Carpeta |
|-------|-------------|---------|
| Taller 1 | Librerías locales con `npm init` por operación | `2025a-swgr1-jdmg-suma`, `resta`, `multiplicacion` |
| Taller 2 | Submódulo Git para simular trabajo en equipo | `submodulos/jdmg-modulo-division` |
| Examen | Archivo `main.js` que une e invoca todas las operaciones | `main.js` |
| Aplicativo visual + Clean Code | Calculadora interactiva con principios del repositorio [clean-code-javascript-es](https://github.com/andersontr15/clean-code-javascript-es) | `visual/` |
| Talleres reflexivos (1 al 5) | Actividades personales sobre hábitos y desarrollo aplicando conceptos de git, APIs y reutilización | `reflexiones/` |

---

## Operaciones disponibles (Taller 1 + Examen)

- **Suma**: `2025a-swgr1-jdmg-suma`
- **Resta**: `2025a-swgr1-jdmg-resta`
- **Multiplicación**: `2025a-swgr1-jdmg-multiplicacion`
- **División**: `submodulos/jdmg-modulo-division/2025a-swgr1-jdmg-division` *(submódulo Git)*

---

## Submódulo Git (Taller 2)

Se ha incluido la operación de división como submódulo Git para simular trabajo colaborativo:

```bash
git submodule add https://github.com/janhzarmacias/jdmg-modulo-division.git submodulos/jdmg-modulo-division
