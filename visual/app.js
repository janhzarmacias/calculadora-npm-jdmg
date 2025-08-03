function obtenerNumero(id) {
  const valor = document.getElementById(id).value;
  const numero = Number(valor);
  if (isNaN(numero)) {
    alert("⚠️ Ingrese un número válido.");
    throw new Error("Entrada inválida");
  }
  return numero;
}

function operar(tipo) {
  try {
    const a = obtenerNumero("numero1");
    const b = obtenerNumero("numero2");

    const resultado = ejecutarOperacion(tipo, a, b);
    document.getElementById("resultado").textContent = resultado;
  } catch (error) {
    document.getElementById("resultado").textContent = "-";
    console.warn("Error:", error.message);
  }
}

function ejecutarOperacion(tipo, a, b) {
  const operaciones = {
    suma: (x, y) => x + y,
    resta: (x, y) => x - y,
    multiplicacion: (x, y) => x * y,
    division: (x, y) => {
      if (y === 0) throw new Error("No se puede dividir para cero");
      return x / y;
    },
  };

  if (!operaciones[tipo]) throw new Error("Operación inválida");
  return operaciones[tipo](a, b);
}
