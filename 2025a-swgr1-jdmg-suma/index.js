exports.suma = (a, b) => {
  const numeroUno = Number(a);
  const numeroDos = Number(b);

  if (isNaN(numeroUno) || isNaN(numeroDos)) {
    throw new Error("No son números válidos");
  }

  return numeroUno + numeroDos;
};
